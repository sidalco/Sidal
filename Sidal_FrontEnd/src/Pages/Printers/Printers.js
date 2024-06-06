
import './Printers.css'
import {SpaceProductShow} from '../../component'
import DodDescrip from './PrintersPart/DodDescrip';
import DodImage from './PrintersPart/DodImage';

import CIJInkJetDescrip from './PrintersPart/CIJInkJetDescrip';
import CIJInkJetImage from './PrintersPart/CIJInkJetImage';
import LaserMarkingDescrip from './PrintersPart/LaserMarkingDescrip';
import LaserMarkingImage from './PrintersPart/LaserMarkingImage';
import TIJInkJetDescrip from './PrintersPart/TIJInkJetDescrip';
import TIJInkJetImage from './PrintersPart/TIJInkJetImage';
const Printers = () => {
 

  
    return (<SpaceProductShow>
      <div className='ProductDescription' id='ProductDescription'>
          <DodDescrip/>
          <DodImage/>
      </div>  
      <div className='ProductDescription' id='ProductDescription'>
        <CIJInkJetDescrip/>
        <CIJInkJetImage/>

      </div>  
      <div className='ProductDescription' id='ProductDescription'>
        <LaserMarkingDescrip/>
        <LaserMarkingImage/>

      </div>  
      <div className='ProductDescription' id='ProductDescription'>
        <TIJInkJetDescrip/>
        <TIJInkJetImage/>

      </div>  
      </SpaceProductShow>
    )
  }
  
  export default Printers
  
  
  




/*
PrinterDODInkJet
PrinterCIJInkJet
PrinterTIJInkJet
PrinterLaserMarkingInkJet
*/



/**
 <ProductDescription Name={'Compressors'} />
     <div className='ProductTabs'>
            <div className="TabsButtons">
            <button className={activeTab === 'PrinterDODInkJet' ? 'active' : ''} onClick={() => handleTabClick('PrinterDODInkJet')}>
                    DOD Ink Jet
                  </button>
                  <button className={activeTab === 'PrinterCIJInkJet' ? 'active' : ''} onClick={() => handleTabClick('PrinterCIJInkJet')}>
                    CIJ Ink Jet
                  </button>
                  <button className={activeTab === 'PrinterTIJInkJet' ? 'active' : ''} onClick={() => handleTabClick('PrinterTIJInkJet')}>
                    TIJ Ink Jet
                  </button>
                  <button className={activeTab === 'LaserMarkingInkJet' ? 'active' : ''} onClick={() => handleTabClick('LaserMarkingInkJet')}>
                    Laser MarkingInk Jet
                  </button>
            </div>  
            <div className="TabsContent">
                    {activeTab === 'PrinterDODInkJet' && <PrinterDODInkJet/>}
                    {activeTab === 'PrinterCIJInkJet' && <PrinterCIJInkJet/>}
                    {activeTab === 'PrinterTIJInkJet' && <PrinterTIJInkJet/>}
                    {activeTab === 'LaserMarkingInkJet' && <LaserMarkingInkJet/>}
            </div>
 
      </div>














      <div className='PrinterContainer'>
              <div className='PrinterDODInkJet1'>
                  <div className='ExplanationPrinter'>
                          <h3>DOD Title</h3>
                          <span>
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  !lorem  
                          !lorem  !lorem  !lorem  !lorem  !lorem 
                          
                          </span>
                  </div>
                  <div className='ImagePrinter'>

                  </div>
              </div>
              
              {/*____________________________________________________ *-/}

              <div className='PrinterCIJInkJet1'>
                eeeeeeeeeeee
              </div>
              
              {/*____________________________________________________ *-/}

              <div className='PrinterTIJInkJet1'>

              </div>
              
              {/*____________________________________________________ *-/}

              <div className='PrinterLaserMarkingInkJet1'>

              </div>
              
              {/*____________________________________________________ *-/}
        </div>

 */