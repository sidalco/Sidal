import './Catalogue.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFilePdf } from "react-icons/fa6";

const Catalogue = () => {

  const [CatData, setCatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DataURL = 'http://127.0.0.1:8000/company/catalogues/';
  //_______________________________________________________________ Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setCatData(response.data);
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
  console.log(CatData.length);
  if (Array.isArray(CatData) && CatData.length > 0) {
    console.log(CatData[0].name);
    console.log('Failed')
  } else {
    console.log('data is empty or not an array');
  }
  if (CatData.length <= 0) {
    return <div className='ComingsoonContainer'>Coming Soon...</div>;
  }

  return (
    <div className='Catalogue' id='Catalogue'>
      <div className='CatalogueContainer'>
        {CatData.map(item => (
          <div className='CatalogueCard'>
                  <h5 key={item.id} className='CatalogueName'>{item.name}</h5>
                  <img key={item.id} src={item.image} className='CatalogueImage' alt="Product Image" />
                  <div className='CatalogueButtons'>
                      <a target="_blank" rel="noopener noreferrer" key={item.id} href={item.pdf_file} download className='CatalogueDownload'>Download </a>
                      <p key={item.id} className='CatalogueLanguage'>{item.language}</p>
                  </div>

                </div>
            
        ))}           
      </div>
    </div>
  )
}

export default Catalogue




// name
// language
// pdf_file
// image