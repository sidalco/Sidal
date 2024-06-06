import '../../ProductSections.css'
import {ProductCard} from '../../index'
import { useState, useEffect } from 'react';
import axios from 'axios';

const EAirReceiver = () => {
  const [ScroData, setScroData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DataURL = 'http://127.0.0.1:8000/product/air-receiver-equipements/';
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setScroData(response.data);
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
  console.log(ScroData.length);
  if (Array.isArray(ScroData) && ScroData.length > 0) {
    console.log(ScroData[0].name);
    console.log('Failed')
  } else {
    console.log('ScroData is empty or not an array');
  }
  if (ScroData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }
  
  const CardsInfo = ScroData.map(
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




  
export default EAirReceiver
    