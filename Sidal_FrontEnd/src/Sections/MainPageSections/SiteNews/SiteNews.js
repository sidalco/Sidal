import './SiteNews.css'
import { RiExternalLinkFill } from "react-icons/ri";
import { useState, useEffect } from 'react';
import axios from 'axios';

const SiteNews = () => {
const DataURL = 'http://127.0.0.1:8000/company/latest-news/';
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
  
  // Text Data Fetch 
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(DataURL);
        if (Array.isArray(response.data)) {
          setData(response.data);
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
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

    return (
    <div className='SiteNews' id='SiteNews'>
        <div className='SiteNewsContainer'>
            {data.map(item => (
                <div key={item.id} className='SiteNewsCard'>
                        <div className='NewsImgSide'>
                            <img key={item.id} src={item.image}></img>
                        </div>
                        <div className='NewsTextSide'>
                            <h5 key={item.id} className='NewsName'>
                                {item.title}
                            </h5>
                            <span key={item.id} className='NewsDetail'>
                                {item.description}
                            </span>
                            <div className='NewsLinkDate'>
                                <p key={item.id} className='NewsDate'>{item.dateofEvent}</p>
                                <a key={item.id}  href={item.link} target="_blank" rel="noopener noreferrer" className="NewsSocialLink"><RiExternalLinkFill /></a>
                            </div> 

                        </div>
                </div>    
             ))}
        </div>
    </div>
  )
}

export default SiteNews