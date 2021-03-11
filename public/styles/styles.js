/* eslint-disable max-len */
import { css, Global } from '@emotion/react';
import { fonturl } from './fonts';

export const globalStyles = (
  <Global
    styles={css`
      @import url(${fonturl});
      body {
        margin: 0;
        padding: 0;
        background: ##ffffff;
        min-height: 100%;
        font-size: 16px;
        font-family: 'Cabin', sans-serif;
        outline: none;
        button { font-family: 'Cabin', sans-serif; padding: 0.2rem;
          background: transparent; border: none; cursor: pointer;
          :focus{ outline: none;}}
        h1 { margin: 0.5em 0;}
        .container { padding: 3rem 0 0 0; margin: 0 auto;}
      };
    `}
  />
);

export const darkTheme = (
  <Global
    styles={css`
      body {
        background: #232323;
        color: #ffffff;
        transition: all 0.4s ease-in-out;
        main {
          background: #3c3c3c;
          color: #ffffff;
        }
      };  
    `}
  />
);

export const lightTheme = (
  <Global
    styles={css`
      body {
        background: #ffffff;
        color: #232323;
        transition: all 0.4s ease-in-out;
        main {
          background: #ffffff;
          color: #3c3c3c;
        }
      };  
    `}
  />
);
