// eslint-disable-next-line prefer-destructuring
const ZOMATO_API_KEY = process.env.NEXT_PUBLIC_ZOMATO_API_KEY;

const errorObject = async (res) => {
  const body = await res.json();
  const error = new Error(body.errorMessage || body.error || body);
  error.statusCode = res.status;
  error.statusText = res.statusText;
  error.dynMsg = { ...body.dynMsg };
  error.code = body.errorCode;
  throw error;
};

export const validateResponse = async (resp) => {
  if (!resp.ok) return errorObject(resp);
  const string = await resp.text();
  return {
    headers: resp.headers,
    data: string === '' ? {} : JSON.parse(string)
  };
};

export const zomato = async ({ city }) => {
  const url = `https://developers.zomato.com/api/v2.1/cities?q=${city}&count=5`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user-key': ZOMATO_API_KEY
    }
  })
    .then(validateResponse)
    .then((resp) => resp.data);
};
