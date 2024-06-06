import './WaterTratement.css'
import {SpaceProductShow} from '../../component'
const WaterTratement = () => {

  return (<SpaceProductShow>
      <div className='ComingsoonContainer'>Coming Soon...</div>    
  </SpaceProductShow>);
};

export default WaterTratement;



/*

import { useState } from 'react';
import {SpaceProductShow,ProductDescription} from '../../component'
import {WaterInvest1,WaterInvest2 ,WaterInvest3 ,WaterInvest4 , WaterInvest5, WaterInvest6, WaterInvest7, WaterInvest8} from '../../Sections'


  const [activeTab, setActiveTab] = useState('WaterInvest1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 <SpaceProductShow>
</SpaceProductShow>
<ProductDescription Name={'Compressors'} />
<div className='ProductTabs'>
      <div className="TabsButtons">

           <button className={activeTab === 'WaterInvest1' ? 'active' : ''} onClick={() => handleTabClick('WaterInvest1')}>
              WaterInvest1
            </button> 

      </div>  
       <div className="TabsContent">
              {activeTab === 'WaterInvest1' && <WaterInvest1/>}
              {activeTab === 'WaterInvest2' && <WaterInvest2/>}
              {activeTab === 'WaterInvest3' && <WaterInvest3/>}
              {activeTab === 'WaterInvest4' && <WaterInvest4/>}
              {activeTab === 'WaterInvest5' && <WaterInvest5/>}
              {activeTab === 'WaterInvest6' && <WaterInvest6/>}
              {activeTab === 'WaterInvest7' && <WaterInvest7/>}
              {activeTab === 'WaterInvest8' && <WaterInvest8/>}
      </div> 

</div>
*/