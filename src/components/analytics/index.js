
import { useState, useEffect } from 'react';
import canUseDOM from 'can-use-dom';

export default function useLogEvent(scriptText = '', scriptUrl = '') {
  const [isLoaded, setIsLoaded] = useState(false);
  const [queue, setQueue] = useState([]);

  const insertEvent = (data) => {
    setQueue([...queue, data]);
  };

  const fire = (event, data, func) => {
    if (!isLoaded) {
      insertEvent({ event, data, func });
    } else if (isLoaded) {
      func(event, data);
    }
  };

  const checkIfScriptExists = (attribute, value) => {
    const allScripts = [...document.getElementsByTagName('script')];
    return allScripts.find((script) => script[attribute] === value);
  };

  const createElement = () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    return script;
  };

  const injectScriptUrl = () => {
    const script = checkIfScriptExists('src', scriptUrl);
    if (script) {
      return Promise.resolve({ loaded: true });
    }
    const elem = createElement();
    elem.async = true;
    document.body.appendChild(elem);
    elem.src = scriptUrl;
    const promise = new Promise((resolve) => {
      elem.onload = () => {
        resolve({
          loaded: true
        });
      };
    });
    return promise;
  };

  const injectScriptText = () => {
    const script = checkIfScriptExists('text', scriptText);
    if (script) {
      return Promise.resolve({ loaded: true });
    }
    const elem = createElement();
    elem.text = scriptText;
    document.body.appendChild(elem);
    const promise = new Promise((resolve) => {
      resolve({
        loaded: true
      });
    });
    return promise;
  };

  const inject = async () => {
    if (scriptUrl || scriptText) {
      const promise = scriptUrl ? injectScriptUrl() : injectScriptText();
      const response = await promise;
      if (response.loaded) {
        setIsLoaded(true);
      }
    }
  };

  const flushEvents = () => {
    queue.forEach(({ event, data, func }) => {
      fire(event, data, func);
    });
    setQueue([]);
  };

  useEffect(() => {
    if (isLoaded && queue.length > 0) {
      setTimeout(flushEvents, 0);
    } else if (!isLoaded) {
      if (canUseDOM) {
        inject();
      }
    }
  }, [queue, isLoaded]);

  return fire;
}

