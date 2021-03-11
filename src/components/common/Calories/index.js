/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pieGraph = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  border: 0.6px solid #d7d7d7;
  padding: 0.5rem;
  font-size: 0.75rem;
  max-width: 7rem;
  position: relative;
`;

const pieWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const center = css`
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Calories = ({ value, label, children }) => (
  <div css={pieGraph}>
    <div css={center}>
      <div>{value}</div>
      <div>{label}</div>
    </div>
    <div css={pieWrapper}>
      {children}
    </div>
  </div>
);
