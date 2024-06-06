import './ContactingUS.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const DataURL = 'http://127.0.0.1:8000/ContactUsMap/';
const ContactUsInfoMap = () => {
  
  const [MapData, setMapData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setMapData(response.data);
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
  console.log(MapData.length);
  if (Array.isArray(MapData) && MapData.length > 0) {
    console.log(MapData[0].name);
    console.log('Failed')
  } else {
    console.log('MapData is empty or not an array');
  }
  if (MapData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }


  return (
    <div className='ContactUsInfoMap'>
       {MapData.map(item => (
            <iframe key={item.id} src={item.mapURL}
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        ))}
            </div>
  )
}

export default ContactUsInfoMap;