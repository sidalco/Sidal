// import { useState } from 'react';
import './Spare.css'
import {SpaceProductShow,ProductDescription} from '../../component'
// import {  Steel316,   Steel304} from '../../Sections'

const Spare = () => {
   
    return (
      <SpaceProductShow>
      
      <div className='ComingsoonContainer'>Coming Soon...</div>
    </SpaceProductShow>
    )
  }
  
  export default Spare
  
  
  // Steel316
  // Steel304
  /*

   const [activeTab, setActiveTab] = useState('Steel316');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  

  <ProductDescription Name={'Compressors'} />
  <div className='ProductTabs'>
            <div className="TabsButtons">
            <button className={activeTab === 'Steel316' ? 'active' : ''} onClick={() => handleTabClick('Steel316')}>
                      3 1 6
                  </button>
                  <button className={activeTab === 'Steel304' ? 'active' : ''} onClick={() => handleTabClick('Steel304')}>
                      3 0 4
                  </button>
                 
            </div>  
            <div className="TabsContent">
                    {activeTab === 'Steel316' && < Steel316/>}
                    {activeTab === 'Steel304' && < Steel304/>}
            </div>

      </div>
  */