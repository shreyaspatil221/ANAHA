/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const selectBy = css`
  display: flex;
  position: relative;
  span {margin-right: 0.2rem;}
`;

const graphName = css`

`;

const graph = (small) => css`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 0.6px solid #d7d7d7;
  padding: 0.5rem;
  font-size: 0.75rem;
  /* margin: 1rem; */
  /* flex: 0 1 100%; */
  flex: ${small ? '0 1 17.3% ' : '0 1 100%'};
  :last-of-type{ margin-right: 0;};
  @media screen and (max-width: 768px){
    flex: 1 1 100%;
  }
`;

const graphHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const graphView = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const userInfo = css`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const menu = css`
  position: absolute;
  top: -3px;
  left: -6px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 1rem #2147961A;
  button { font-size: 12px; background: white;}
`;

export const Graph = ({
  data, small, index, mapData, setMapdata, children
}) => {
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState(false);
  const clickSelect = (i) => {
    setSelect(i);
    setShow(false);
    const clone = [...mapData];
    clone[index].[3] = i;
    setMapdata(clone);
  };
  return (
    <div css={graph(small)}>
      <div css={graphHeader}>
        <div css={graphName}>{data && data[2]}</div>
        <div css={selectBy}>
          <span>{data && data[select]}</span>
          <button css={userInfo} type="button" onClick={() => setShow((prevState) => !prevState)}>
            <img
              src="/static/images/arrow-down.svg"
              alt="down arrow"
              height="8px"
              width="8px"
            />
          </button>
          {show ? (
            <div css={menu}>
              {data?.slice(0, data.length - 2)?.map((d, i) => (
                <button type="button" key={i} onClick={() => clickSelect(i)}>{d}</button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div css={graphView}>
        {children}
      </div>
    </div>
  );
};

