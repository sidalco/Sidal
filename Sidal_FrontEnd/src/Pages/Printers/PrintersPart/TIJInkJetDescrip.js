import '../Printers.css'
import {useState, useEffect,} from'react'
import axios from 'axios'

const DataURL = 'http://127.0.0.1:8000/product/TIJInkJet-Description/';

const TIJInkJetDescrip = () => {
    
  const [TIJDData, setTIJDData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setTIJDData(response.data);
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
  console.log(TIJDData.length);
  if (Array.isArray(TIJDData) && TIJDData.length > 0) {
    console.log(TIJDData[0].name);
    console.log('Failed')
  } else {
    console.log('data is empty or not an array');
  }
  if (TIJDData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

  return (
    <div className='ProductDescriptionLeftSide' id='ProductDescriptionLeftSide'>
        {TIJDData.map(item => (
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

export default TIJInkJetDescrip

