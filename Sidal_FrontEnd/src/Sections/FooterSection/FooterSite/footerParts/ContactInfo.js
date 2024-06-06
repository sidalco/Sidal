import '../FooterSite.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const DataURL = 'http://127.0.0.1:8000/company/our-branches/';
const ContactInfo = () => {
    const [ContactData, setContactData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setContactData(response.data);
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
  console.log(ContactData.length);
  if (Array.isArray(ContactData) && ContactData.length > 0) {
    console.log(ContactData[0].name);
    console.log('Failed')
  } else {
    console.log('ContactData is empty or not an array');
  }
  

  return (
    <div className='ContactInfo'>
      
            <h4>Our Contact Info :</h4>
            {ContactData.map(item => (
                <div className='MapData'>
                    <div >
                        <p className='ContactInfoName'>Phone:</p>
                        <span className='ContactInfoDetail'>07701357213</span>
                        
                    </div>
                    <div >
                        <p className='ContactInfoName'>Phone:</p>
                        <span className='ContactInfoDetail'>07701357213</span>
                        
                    </div>
                    <div >
                        <p className='ContactInfoName'>Phone:</p>
                        <span className='ContactInfoDetail'>07701357213</span>
                        
                    </div>
                    <div >
                        <p className='ContactInfoName'>Phone:</p>
                        <span className='ContactInfoDetail'>07701357213</span>
                        
                    </div>
                    <div >
                        <p className='ContactInfoName'>Phone:</p>
                        <span className='ContactInfoDetail'>07701357213</span>
                        
                    </div>
                </div>
            ))}      
        

    </div>
      
  )
}
export default ContactInfo



/*
if (ContactData.length <= 0) {
    return  <div className='FooterSite' id='FooterSite'>
      <div className='LeftOtherPart'>
        
      </div>
      <div className='RightOtherPart'>
        <div className='SocialMediaPart'>
            <h4>Our Contact Info :</h4><div className='ComingsoonContainer'>Coming Soon...</div>
        </div>
            <div className='NewPart'>

            </div>
      </div>
      
    </div>;
  }
*/