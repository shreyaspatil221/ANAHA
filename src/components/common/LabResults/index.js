/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import results from '../../__mocks__/labResults.json';

const labResults = css`
  border: 0.6px solid #d7d7d7;
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 0.75rem;
`;

const labResultsInner = css`
  display: flex;
  flex-wrap: wrap;
`;

const miniInfo = css`
  color: #383838;
  padding: 0.5rem;
  font-size: 0.5rem;
  flex: 0 1 27%;
  display: flex;
  flex-direction: column;
  line-height: 1.6;
  :last-of-type{flex: 1 1 27%;}
  span{margin-right: 0.1rem;}
`;

const label = css`color: #b97e58; font-size: 0.6rem;`;

const head = css`padding: 0 0.5rem;`;

export const LabResults = ({ t }) => (
  <div css={labResults}>
    <div css={head}>{t('Lab Resullts')}</div>
    <div css={labResultsInner}>
      {
        results?.map((result, i) => (
          <div key={i} css={miniInfo}>
            <div>{result?.date}</div>
            <div css={label}>{result?.label}</div>
            <div>
              <span>{result?.value}</span>
              <span>{result?.unit}</span>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);
