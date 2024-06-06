import './ContactingUS.css'
import { useState, useEffect } from 'react';
import ContactUsInfoMap from './ContactUsInfoMap'
import axios from 'axios';

const DataURL = 'http://127.0.0.1:8000/ContactUsInfo/'
const ContactUsInfo = () => {
  const [InfoData, setInfoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setInfoData(response.data);
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
  console.log(InfoData.length);
  if (Array.isArray(InfoData) && InfoData.length > 0) {
    console.log(InfoData[0].name);
    console.log('Failed')
  } else {
    console.log('InfoData is empty or not an array');
  }
  if (InfoData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

 
  return (<div className='ContactUsInfo'>
            <h3>Our Contact Information</h3>
            <div className='ContactUsInfoWords'>     
            {InfoData.map(item => ( 
                
                <span key={item.id}  className='ContactUsInfoWordsSpan'>{item.FieldName}:<a>{item.FieldData}</a></span>
               
            ))} 
            </div>
            <ContactUsInfoMap/>
    </div>
  )
}

export default ContactUsInfo