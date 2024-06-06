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

export default CReciprocating





