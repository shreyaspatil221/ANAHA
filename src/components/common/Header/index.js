/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const list = css`
  top: 43px;
  left: 0;
  width: 100%;
  z-index: 2;
  position: absolute;
  background: #f3f3f3;
  box-shadow: 0 0 1rem #2147961A;
  outline: 0.6px solid #d7d7d7;
`;

const listMap = css`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.6px solid #d7d7d7;
  :last-of-type{border-bottom: none;};
`;

const w100 = css`width: 100%;`;

const userIcon = css`
  margin-right: 1rem;
`;

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0 0 0;
`;

const company = css`
  font-size: 1.5rem;
  font-weight: 600;
`;

const statusIcon = css`
  margin-right: 1rem;
`;

const menu = css`
  margin-right: 1rem;
`;

const notification = css`
  position: relative;
`;

const count = css`
  position: absolute;
  top: 0;
  right: 0;
  background: #ff0000;
  border-radius: 50%;
  color: #ffffff;
  z-index: 2;
  height: 1rem;
  width: 1rem;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const inputRow = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  input {height: 1.5rem; border: none;}
  img {margin: 0 0.5rem; cursor: pointer;}
  outline: 0.6px solid #d7d7d7;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem #2147961A;
  position: relative;
`;

const userInfo = css`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  span { margin-right: 0.5rem;};
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const flexRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const padding = css`padding: 0.5rem 1rem;`;

export const Header = ({ headerProps }) => {
  const {
    t, search, changeSearch, show, expand, result
  } = headerProps;
    // eslint-disable-next-line camelcase
  const { location_suggestions } = result;
  return (
    <div css={header}>
      <div css={[company, padding]}>{t('company')}</div>
      <div css={[flexRow, padding]}>
        <div>{t('Patient Profile')}</div>
        <img
          src="/static/images/arrow-right.svg"
          alt="right arrow"
          height="16px"
          width="16px"
        />
        <div>{t('Analytics')}</div>
      </div>
      <div css={[inputRow, padding]}>
        <img
          src="/static/images/search.svg"
          alt="search icon"
          height="24px"
          width="24px"
        />
        <input type="input" value={search} onChange={changeSearch} placeholder={t('Search')} />
        <button type="button" onClick={expand}>
          <img
            src={`/static/images/${location_suggestions?.length && show ? 'arrow-up' : 'arrow-down'}.svg`}
            alt="right arrow"
            height="16px"
            width="16px"
          />
        </button>
        {location_suggestions?.length && show ? (
          <div css={list}>
            {location_suggestions?.map((res, i) => (
              <div key={i} css={listMap}>
                <img
                  src={res?.country_flag_url}
                  alt="flag"
                  height="24px"
                  width="24px"
                />
                <div css={[flexColumn, w100]}>
                  <div>{res?.name}</div>
                  <div>{res?.country_name}</div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div css={[flexRow, padding]}>
        <button type="button" css={statusIcon}>
          <img
            src="/static/images/warn.svg"
            alt="status icon"
            height="24px"
            width="24px"
          />
        </button>
        <button type="button" css={menu}>
          <img
            src="/static/images/menu.svg"
            alt="menu icon"
            height="24px"
            width="24px"
          />
        </button>
        <button type="button" css={notification}>
          <img
            src="/static/images/notification.svg"
            alt="notification bell icon"
            height="24px"
            width="24px"
          />
          <div css={count}>4</div>
        </button>
      </div>
      <div css={[flexRow, padding]}>
        <div css={userIcon}>
          <img
            src="/static/images/profile.jpg"
            alt="profile icon"
            height="44px"
            width="44px"
          />
        </div>
        <button css={userInfo} type="button">
          <span>{t('Dr. Raquel')}</span>
          <img
            src="/static/images/arrow-down.svg"
            alt="right arrow"
            height="16px"
            width="16px"
          />
        </button>
      </div>
    </div>
  );
};

