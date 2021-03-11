export const gtmScriptText = `(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&amp;l=' + l : '';
      j.async = true;
      j.src =
              '//www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-TTJVDJ');`;

export default function gtmTrack(event, data) {
  window.dataLayer.push({
    event,
    ...data
  });
}
