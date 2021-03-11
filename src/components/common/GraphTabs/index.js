/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Graph } from '../Graph';
import { Calories } from '../Calories';
import { LabResults } from '../LabResults';
import LineChart from '../Charts/LineChart';
import DoughnutChart from '../Charts/DoughnutChart';

const graphData = css`
  padding: 1rem;
  margin: 0;
  border-radius: 0 1rem 1rem 1rem;
  border: 0.6px solid #d7d7d7;
  box-shadow: 0 0 1rem #2147961A;
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  gap: 1rem;
`;

const smallGraphs = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  /* margin: 0 auto 1rem 0; */
`;

const graphWrapper = css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const tabsWrapper = css`
  display; flex;
  margin: 1rem 0 0 0; 
`;

const tabBtn = css`
  border-radius: 1rem 1rem 0 0;
  border: transparent;
  padding: 1rem 2rem;
  margin: 0 1rem 0 0;
  background: rgb(228,228,228);
`;

const active = css`
  border-radius: 1rem 1rem 0 0;
  border: transparent;
  padding: 1rem 2rem;
  margin: 0 1rem 0 0;
  background: rgb(57,114,243);
  color: #ffffff;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const flexRow = css`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const w35 = css`
  width: 35%;
  gap: 1rem;
  @media screen and (max-width: 768px){
    width: 100%;    
  }
`;
const mt = css`gap: 1rem;`;
const mr = css`gap: 1rem;`;
const w65 = css`display: flex; flex: 0 1 63.3%;`;
const centerDiv = css`display: flex; justify-content: center; align-items: center; min-height: 50vh;`;

export const GraphTabs = ({
  t, tabs, selected, setSelected
}) => {
  const [mapData, setMapdata] = useState([
    ['Week', 'Month', 'Activity', 0],
    ['Week', 'Month', 'Heart Rate', 0],
    ['Week', 'Month', 'Blood Pressure', 0],
    ['Week', 'Month', 'Body Temprature', 0],
    ['Week', 'Month', 'Past Apointment', 0]
  ]);
  const [bigMap, setBigMap] = useState([
    ['Week', 'Month', 'Health Condition', 0]
  ]);
  const [sleep, setSleep] = useState([
    ['Week', 'Month', 'Sleep Pattern', 0]
  ]);
  return (
    <>
      <div css={tabsWrapper}>
        {tabs?.map((tab, i) => (
          <button
            key={i}
            type="button"
            css={selected === i ? active : tabBtn}
            onClick={() => setSelected(i)}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      <div css={graphData}>
        {selected === 0 ? (
          <>
            <div css={smallGraphs}>
              {
                mapData?.map((data, i) => (
                  <Graph t={t} key={i} data={data} mapData={mapData} setMapdata={setMapdata} index={i} small>
                    <LineChart width={160} height={100} maintainAspectRatio={false} select={data[3]} />
                  </Graph>
                ))
              }
            </div>
            <div css={graphWrapper}>
              <div css={w65}>
                {
                  bigMap?.map((data, i) => (
                    <Graph t={t} key={i} data={bigMap[0]} mapData={bigMap} setMapdata={setBigMap} index={0}>
                      <LineChart width={700} height={300} select={data[3]} />
                    </Graph>
                  ))
                }
              </div>
              <div css={[flexColumn, w35]}>
                <LabResults t={t} />
                <div css={[flexRow, mt]}>
                  <div css={mr}>
                    <Calories percentage={40} value="230" label={t('Kcal')} header={t('Calories Burn')}>
                      <DoughnutChart />
                    </Calories>
                  </div>
                  {
                    sleep?.map((data, i) => (
                      <Graph t={t} key={i} data={data} mapData={sleep} setMapdata={setSleep} index={i} small>
                        <LineChart width={250} height={100} maintainAspectRatio={false} select={data[3]} />
                      </Graph>
                    ))
                  }
                </div>
              </div>
            </div>
          </>
        ) : <div css={centerDiv}>{t('NO INFORMATION')}</div>}
      </div>
    </>
  );
};
