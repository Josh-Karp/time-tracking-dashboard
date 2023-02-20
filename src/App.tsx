import { clsx } from 'clsx';
import { useState } from 'react';
import data from './assets/data.json';
import profilePic from './assets/image-jeremy.png';
import Activity from './components/Activity';

function App() {
  const [period, setPeriod] = useState('daily')
  return (
    <div className='h-screen text-white bg-very-dark-blue md:flex md:flex-col md:justify-center md:align-middle'>
      <div className='container mx-auto p-4 w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6'>
        <div className='rounded-xl bg-dark-blue row-span-2 grid grid-cols-1 grid-rows-3'>
          <div className='row-span-2 p-6 rounded-xl bg-desaturated-blue'>
            <img className='border-white border-solid border-4 rounded-full w-20' src={profilePic} alt='Profile image' />
            <p className='text-xs opacity-50 pt-10'>Report for</p>
            <h2 className='text-4xl'>Jeremy Robson</h2>
          </div>
          <div className='flex flex-col gap-2 p-6 bg-dark-blue rounded-xl'>
            <span className={clsx('transition-opacity cursor-pointer hover:opacity-100', period === 'daily' ? 'opacity-100' : 'opacity-50')} onClick={() => setPeriod('daily')}>Daily</span>
            <span className={clsx('transition-opacity cursor-pointer hover:opacity-100', period === 'weekly' ? 'opacity-100' : 'opacity-50')} onClick={() => setPeriod('weekly')}>Weekly</span>
            <span className={clsx('transition-opacity cursor-pointer hover:opacity-100', period === 'monthly' ? 'opacity-100' : 'opacity-50')} onClick={() => setPeriod('monthly')}>Monthly</span>
          </div>
        </div>
        {data.map((activity: { title: string; timeframes: any; }) => {
          return <Activity key={activity.title} title={activity.title} timeframes={activity.timeframes} period={period} />
        })}

      </div>
    </div>
  );
}

export default App;
