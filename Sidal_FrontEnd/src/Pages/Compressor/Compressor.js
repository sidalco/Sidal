import { useState } from 'react';
import './Compressor.css'
import {SpaceProductShow,ProductDescription} from '../../component'
import {CReciprocating, CRotaryScrew, CScroll, CTurbo, EAirDryer, EAirReceiver, EFilter, ENitrogenGenerator} from '../../Sections'


const CompressorTabs = () => {
  const [activeTab, setActiveTab] = useState('Reciprocating');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SpaceProductShow>
      <ProductDescription Name={'Compressors'} />
      <div className='ProductTabs'>
            <div className="TabsButtons">
            <button className={activeTab === 'Reciprocating' ? 'active' : ''} onClick={() => handleTabClick('Reciprocating')}>
                    Reciprocating
                  </button>
                  <button className={activeTab === 'RotaryScrew' ? 'active' : ''} onClick={() => handleTabClick('RotaryScrew')}>
                    Rotary Screw
                  </button>
                  <button className={activeTab === 'Scroll' ? 'active' : ''} onClick={() => handleTabClick('Scroll')}>
                    Scroll
                  </button>
                  <button className={activeTab === 'Turbo' ? 'active' : ''} onClick={() => handleTabClick('Turbo')}>
                    Turbo
                  </button>
                  <button className={activeTab === 'AirDryer' ? 'active' : ''} onClick={() => handleTabClick('AirDryer')}>
                    Air Dryer
                  </button><button className={activeTab === 'AirReceiver' ? 'active' : ''} onClick={() => handleTabClick('AirReceiver')}>
                    Air Receiver
                  </button>
                  <button className={activeTab === 'Filter' ? 'active' : ''} onClick={() => handleTabClick('Filter')}>
                    Filter
                  </button>
                  <button className={activeTab === 'NitrogenGenerator' ? 'active' : ''} onClick={() => handleTabClick('NitrogenGenerator')}>
                    Nitrogen Generator
                  </button> 



            </div>  
            <div className="TabsContent">
                    {activeTab === 'Reciprocating' && <CReciprocating/>}
                    {activeTab === 'RotaryScrew' && <CRotaryScrew/>}
                    {activeTab === 'Scroll' && <CScroll/>}
                    {activeTab === 'Turbo' && <CTurbo/>}
                    {activeTab === 'AirDryer' && <EAirDryer/>}
                    {activeTab === 'AirReceiver' && <EAirReceiver/>}
                    {activeTab === 'Filter' && <EFilter/>}
                    {activeTab === 'NitrogenGenerator' && <ENitrogenGenerator/>}
            </div>

      </div>
    </SpaceProductShow>
  );
};

export default CompressorTabs;

/* <div className='ProductTabs'>
        <div className="TabsButtons">
          <TabButton ActiveTabName={'Reciprocating'} ButtonName={'Reciprocating'} setActiveTab={setActiveTab}  />
          <TabButton ActiveTabName={'RotaryScrew'} ButtonName={'RotaryScrew'} setActi





            import TabButton from '../../component/ProductComponent/TabButton/TabButton';
            const [activeTab, setActiveTab] = useState('Reciprocating');
            <TabButton ActiveTabName={'Reciprocating'} ButtonName={'Reciprocating'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'RotaryScrew'} ButtonName={'RotaryScrew'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'Scroll'} ButtonName={'Scroll'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'Turbo'} ButtonName={'Turbo'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'AirDryer'} ButtonName={'AirDryer'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'AirReceiver'} ButtonName={'AirReceiver'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'Filter'} ButtonName={'Filter'} setActiveTab={setActiveTab} />
            <TabButton ActiveTabName={'NitrogenGenerator'} ButtonName={'NitrogenGenerator'} setActiveTab={setActiveTab} />





          
            <button className={activeTab === 'Reciprocating' ? 'active' : ''} onClick={() => handleTabClick('Reciprocating')}>
                    Reciprocating
                  </button>
                  <button className={activeTab === 'RotaryScrew' ? 'active' : ''} onClick={() => handleTabClick('RotaryScrew')}>
                    Rotary Screw
                  </button>
                  <button className={activeTab === 'Scroll' ? 'active' : ''} onClick={() => handleTabClick('Scroll')}>
                    Scroll
                  </button>
                  <button className={activeTab === 'Turbo' ? 'active' : ''} onClick={() => handleTabClick('Turbo')}>
                    Turbo
                  </button>
                  <button className={activeTab === 'AirDryer' ? 'active' : ''} onClick={() => handleTabClick('AirDryer')}>
                    Air Dryer
                  </button><button className={activeTab === 'AirReceiver' ? 'active' : ''} onClick={() => handleTabClick('AirReceiver')}>
                    Air Receiver
                  </button>
                  <button className={activeTab === 'Filter' ? 'active' : ''} onClick={() => handleTabClick('Filter')}>
                    Filter
                  </button>
                  <button className={activeTab === 'NitrogenGenerator' ? 'active' : ''} onClick={() => handleTabClick('NitrogenGenerator')}>
                    Nitrogen Generator
                  </button> */

/* NAmes...
CReciprocating
CRotaryScrew
CScroll
CTurbo
EAirDryer
EAirReceiver
EFilter
ENitrogenGenerator


Reciprocating
RotaryScrew
Scroll
Turbo
AirDryer
AirReceiver
Filter
NitrogenGenerator

RotaryScrewCompressor
CReciprocatingCompressor
ScrollCompressor
TurboCompressor
AirDryerEquipement
FilterEquipement
AirReceiverEquipement
NitrogenGeneratorEquipement
*/

// <div>
// <div className="compressor-description">
//   {/* Your compressor description here */}
//   aaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br></br>dddddddddddddddddddddddddddddd<br></br>dddddddddddddddddddddddddddddd<br></br>dddddddddddddddddddddddddddddd<br></br>dddddddddddddddddddddddddddddd<br></br>dddddddddddddddddddddddddddddd
// </div>
// <div className="tab-buttons">
//   <button
//     className={activeTab === 'rotary' ? 'active' : ''}
//     onClick={() => handleTabClick('rotary')}
//   >
//     Rotary
//   </button>
//   <button
//     className={activeTab === 'inject' ? 'active' : ''}
//     onClick={() => handleTabClick('inject')}
//   >
//     Inject
//   </button>
//   <button
//     className={activeTab === 'turbo' ? 'active' : ''}
//     onClick={() => handleTabClick('turbo')}
//   >
//     Turbo
//   </button>
//   {/* Add more buttons for other compressor types */}
// </div>
// <div className="tab-content">
//   {activeTab === 'rotary' && <div>Rotary compressor content</div>}
//   {activeTab === 'inject' && <div>Inject compressor content</div>}
//   {activeTab === 'turbo' && <div>Turbo compressor content</div>}
//   {/* Add more conditional content for other compressor types */}
// </div>
// </div>



// <div>
//       <div>
//         <button onClick={() => handleTabClick('rotary')}>Rotary</button>
//         <button onClick={() => handleTabClick('inject')}>Inject</button>
//         <button onClick={() => handleTabClick('turbo')}>Turbo</button>
//         <button onClick={() => handleTabClick('screw')}>Screw</button>
//         {/* Add more buttons for other types of compressors */}
//       </div>
//       <div>
//         {activeTab === 'rotary' && <div>Content for Rotary Compressors</div>}
//         {activeTab === 'inject' && <div>Content for Inject Compressors</div>}
//         {activeTab === 'turbo' && <div>Content for Turbo Compressors</div>}
//         {activeTab === 'screw' && <div>Content for Screw Compressors</div>}
//         {/* Add more content for other types of compressors */}
//       </div>
//     </div>












// import './Compressor.css'
// import {SpaceProductShow, SpaceMainTitle} from '../../component'

// const Compressor = () => {
//   return (
//     <>
//       Compressor
//     </>

//   )
// }

// export default Compressor


