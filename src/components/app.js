import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

console.log('process.env1111', process.env)

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          <UptimeRobot key={process.env.REACT_APP_API_KEY} apikey={process.env.REACT_APP_API_KEY} />
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>2020&nbsp;-&nbsp;{new Date().getFullYear()}&nbsp;&copy;&nbsp;Reach&nbsp;-&nbsp;<Link to='/' text='约翰·乔瑟夫' /></p>
        </div>
      </div>
    </>
  );
}

export default App;
