/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n';
import { zomato } from '../service';
import { Header } from '../common/Header';
import { PatientInfo } from '../common/PatientInfo';
import { GraphTabs } from '../common/GraphTabs';
import info from '../__mocks__/info.json';

const container = css`
  padding: 0;
  background: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto 5rem auto;
`;

const Dashboard = () => {
  const { t } = useTranslation(['common']);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [, setError] = useState('');
  const [result, setResults] = useState({});
  const [, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(0);
  const tabs = [{ name: 'Analytics' }, { name: 'Compliance' }];

  const changeSearch = (e) => {
    const val = e?.target.value;
    setSearch(val);
  };

  const expand = () => {
    setShow((prevState) => !prevState);
  };

  const getCities = async () => {
    setIsLoading(true);
    try {
      const payload = { city: search };
      const resp = await zomato(payload);
      setResults(resp);
      setShow(true);
    } catch (err) {
      setError(err.message || 'GENERIC_ERROR');
    }
    setIsLoading(false);
  };

  const headerProps = {
    t, search, changeSearch, show, expand, result
  };

  useEffect(() => {
    search && getCities();
    return () => {};
  }, [search]);

  return (
    <>
      <NextSeo
        title={t('home')}
        description={t('homeDesc')}
      />
      <div css={container}>
        <Header headerProps={headerProps} />
        <PatientInfo t={t} info={info} />
        <GraphTabs
          t={t}
          tabs={tabs}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

Dashboard.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default Dashboard;
