import '../Printers.css'
import {useState, useEffect,} from'react'
import axios from 'axios'

const DataURL = 'http://127.0.0.1:8000/product/DODInkJet-Images/';
const DodImage = () => {

  const [DODIData, setDODIData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setDODIData(response.data);
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
  console.log(DODIData.length);
  if (Array.isArray(DODIData) && DODIData.length > 0) {
    console.log(DODIData[0].name);
    console.log('Failed')
  } else {
    console.log('data is empty or not an array');
  }
  if (DODIData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

  return (
    <div className='ProductDescriptionRightSide' id='ProductDescriptionRightSide'> 
        {DODIData.map(item => (
             
                    <img className='ProductDescriptionImage' 
                    id='ProductDescriptionImage' 
                    src={item.image}>
                        
                    </img>
            

        ))}      
    </div>
  )
}

export default DodImage