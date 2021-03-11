/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const patientName = css`
  color: #3972f3;
  span {
    margin-right: 0.25rem;
    :last-of-type{
      margin-right: 0;
    }
  }
`;

const withWrapper = css`
  display: flex;
  span { color: #3972f3;};
  div{
    margin-right: 0.25rem;
    :last-of-type{
      margin-right: 0;
    }
  }
`;

const infoCard = css`
  /* width: 90%; */
  font-size: 1rem;
  margin: 1rem 0 0 0;
  padding: 0rem 2rem;
  border: 0.6px solid #d7d7d7;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 1rem #2147961A;
`;

const padding = css`padding: 1rem 1rem;`;

export const PatientInfo = ({ t, info }) => {
  const {
    name, age, id, wth, status, lmp, edd
  } = info;
  return (
    <div css={infoCard}>
      <div css={[patientName, padding]}>
        <span>{name}</span>
        <span>{`${age?.year}Y`}</span>
        <span>{`${age?.month}M`}</span>
      </div>
      <div css={padding}>
        <span>{t('id')}</span>
        <span>{id}</span>
      </div>
      <div css={[withWrapper, padding]}>
        <div>{t('With ')}</div>
        {wth?.G && (
          <div>
            <span>G</span>
            {wth?.G}
          </div>
        )}
        {wth?.P && (
          <div>
            <span>P</span>
            {wth?.P}
          </div>
        )}
        {wth?.L && (
          <div>
            <span>L</span>
            {wth?.L}
          </div>
        )}
        {wth?.A && (
          <div>
            <span>A</span>
            {wth?.A}
          </div>
        )}
      </div>
      <div css={padding}>{status}</div>
      <div css={padding}>
        <span>{t('lmp')}</span>
        <span>{lmp}</span>
      </div>
      <div css={padding}>
        <span>{t('edd')}</span>
        <span>{edd}</span>
      </div>
    </div>
  );
};

