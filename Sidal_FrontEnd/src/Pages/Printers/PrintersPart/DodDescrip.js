import '../Printers.css'
import {useState, useEffect,} from'react'
import axios from 'axios';
const DataURL = 'http://127.0.0.1:8000/product/DODInkJet-Description/';
const DodDescrip = () => {
    
  const [DODDData, setDODDData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setDODDData(response.data);
        } else {
          setError('Data format is not correct');
        }
      } catch (error) {
        setError('Error fetching data: 11' + error.message);
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
  console.log(DODDData.length);
  if (Array.isArray(DODDData) && DODDData.length > 0) {
    console.log(DODDData[0].name);
    console.log('Failed')
  } else {
    console.log('data is empty or not an array');
  }
  if (DODDData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

  return (
    <div className='ProductDescriptionLeftSide' id='ProductDescriptionLeftSide'>
        {DODDData.map(item => (
             <div className='ProDescripLeftIn' >
             <h3 className="ProductDescriptionTitle" id='ProductDescriptionTitle'>
                {item.name}
                </h3>
              <p className="ProductDescriptionDesc" id='ProductDescriptionDesc'>
                {item.description}
              </p>
            </div>

        ))}      
    </div>
  )
}

export default DodDescrip

