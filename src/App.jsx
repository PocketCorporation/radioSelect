import { BadgePercent, Sparkle, Gem, Crown, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Radio, { RadioGroup } from './components/Radio';

const App = () => {
  const [plan, setPlan] = useState('')

 
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold tracking-tight'>Choose Your Plan</h2>
      <hr className="my-3 w-1/3" />

      <RadioGroup value={plan} onChange={e=>setPlan(e.target.value)}>
        <div className='flex gap-4 justify-center flex-col'>
        <Radio value='free'>
          <Plan 
            icon={<BadgePercent />}
            title="Free"
            features={['SD (480)','Mobile','Ads']}
            price={0}
          />
        </Radio>
        <Radio value='basic'>
          <Plan 
            icon={<Sparkle />}
            title="Basic"
            features={['HD (720)','1 Device']}
            price={4.99}
          />
        </Radio>
        <Radio value='standard'>
          <Plan 
            icon={<Gem />}
            title="Standard"
            features={['Full HD (1080)','2 Devices']}
            price={9.99}
          />
        </Radio>
        <Radio value='premium'>
          <Plan 
            icon={<Crown />}
            title="Premium"
            features={['Ultra HD (4K) + HDR','4 Devices']}
            price={14.99}
          />
        </Radio>
        </div>
      </RadioGroup>
      <hr className="my-3 w-1/3" />
      <button className={`flex gap-4 items-center px-6 py-3 rounded-lg bg-violet-800 hover:bg-violet-700 font-semibold text-lg text-white`}>
        Proceed with {plan} plan!
        <ArrowRight />
      </button>
    </main>
  );
}

export default App;

function Plan({icon, title, features, price}){
  return(
    <div className='flex gap-4 items-center'>
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className='text-sm'>{features.join(' · ')}</p>
      </div>
      <span className="ml-auto font-medium">$ {price}</span>
    </div>
  )
}