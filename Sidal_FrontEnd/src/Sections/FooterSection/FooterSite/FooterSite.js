import './FooterSite.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactInfo from './footerParts/ContactInfo';

const FooterSite = () => {
  const [SocialData, setSocialData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DataURL = 'http://127.0.0.1:8000/socialmedialinks/';
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setSocialData(response.data);
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
    return <div className='FooterSite' id='FooterSite'>
      <div className='LeftOtherPart'>
        
      </div>
      <div className='RightOtherPart'>
        <div className='SocialMediaPart'>
            <h4>Our Social Links :</h4><div className='ComingsoonContainer'>Loading...</div>
        </div>
            <div className='NewPart'>

            </div>
      </div>
      
    </div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log(SocialData.length);
  if (Array.isArray(SocialData) && SocialData.length > 0) {
    console.log(SocialData[0].name);
    console.log('Failed')
  } else {
    console.log('SocialData is empty or not an array');
  }

  return (
    <div className='FooterSite' id='FooterSite'>
          <div className='LeftOtherPart'>
              <ContactInfo/>
          </div>
          <div className='RightOtherPart'>
                  <div className='SocialMediaPart'>
                        <h4>Our Social Links :</h4>
                        {SocialData.map(item => (
                              <div className='SocialMediaLinks' id='SocialMediaLinks'>
                                  <a href={item.link}>{item.platform}</a>
                              </div>
                        ))}      
                  </div>
                
          </div>
      
    </div>
  )
}

export default FooterSite
