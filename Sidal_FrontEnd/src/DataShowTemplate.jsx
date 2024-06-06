import { useState, useEffect } from 'react';
import axios from 'axios';

const SiteBrunches = () => {
  const [Bdata, setBData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DataURL = 'http://127.0.0.1:8000/company/our-branches/';
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setBData(response.data);
        } else {
          setError('Data format is not correct');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='ComingsoonContainer'>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log(Bdata.length);
  if (Array.isArray(Bdata) && Bdata.length > 0) {
    console.log(Bdata[0].name);
    console.log('Failed')
  } else {
    console.log('Bdata is empty or not an array');
  }
  if (Bdata.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

  return (
    <div className='SiteBrunches' id='SiteBrunches'>
        <div className='BrunchesContainer'>
           {Bdata.map(item => (
               <div className='BrunchesCard'>
                      <h5 key={item.id} className='BrunchesName'>{item.name}</h5>
                      <div className='branchesbutt'>
                          <div className='BrunchesMapSide'>
                              <iframe key={item.id} 
                                      className='BrunchesMapIFrame' 
                                      id='BrunchesMapIFrame' 
                                      title='Sidal Kirkuk Map'
                                      src={item.location} 
                                      allowFullScreen="" 
                                      loading="lazy" 
                                      referrerPolicy="no-referrer-when-downgrade">
                              </iframe>
                          </div>
                          <div className='BrunchesInfoSide'>
                          <div className='BrunchesSingleInfo'>
                            <p className='BrunchesIcon'>Website</p>
                            <span key={item.id} className='BrunchesInfoNameTitle'>
                                {item.website}
                            </span>
                            </div>
                            <div className='BrunchesSingleInfo'>
                            <p className='BrunchesIcon'>Phone</p>
                            <span key={item.id} className='BrunchesInfoNameTitle'>
                                {item.tele}
                            </span>
                            </div>
                            <div className='BrunchesSingleInfo'>
                            <p className='BrunchesIcon'>E-mail</p>
                            <span key={item.id} className='BrunchesInfoNameTitle'>
                                {item.mail}
                              </span>
                            </div>
                            <div className='BrunchesSingleInfo'>
                            <p className='BrunchesIcon'>fax</p>
                            <span key={item.id} className='BrunchesInfoNameTitle'>
                                {item.fax}
                                </span>
                            </div>
                            <div className='BrunchesSingleInfo'>
                            <p className='BrunchesIcon'>address</p>
                            <span key={item.id} className='BrunchesInfoNameTitle'>
                                {item.address}
                            </span>
                            </div> 
                          </div>
                  </div>
            </div>
          ))}       
        </div>
    </div>




  )
}

export default SiteBrunches







// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




import '../../ProductSections.css'
import {ProductCard} from '../../index'
import { useState, useEffect } from 'react';
import axios from 'axios';

const CReciprocating = () => {
  const [ReciData, setReciData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DataURL = 'http://127.0.0.1:8000/product/reciprocating-compressors/';
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setReciData(response.data);
        } else {
          setError('Data format is not correct');
        }
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className='ComingsoonContainer'>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log(ReciData.length);
  if (Array.isArray(ReciData) && ReciData.length > 0) {
    console.log(ReciData[0].name);
    console.log('Failed')
  } else {
    console.log('ReciData is empty or not an array');
  }
  if (ReciData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }
  
  const CardsInfo = ReciData.map(
      item => {
        return <ProductCard 
          ProductName={item.name} 
          ProductType={item.type} 
          ProductFilePDF={item.pdf_file} 
          ProductImage={item.image} 
          ProductExplain={item.description} 
      />
    }
    ) 
  return (
    <div className='ProductSections' id='ProductSections'>
      <div className='ProductsContainer'>
            {CardsInfo}
      </div>
   </div>
  )
}

// export default CReciprocating







