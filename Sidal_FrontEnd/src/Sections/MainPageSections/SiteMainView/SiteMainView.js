import './SiteMainView.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SiteMainView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Text Data Fetch 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/mainviewpage/');
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
  const firstImage = data.length > 0 ? data[0].image : null;

  const firstDivStyle = {
    backgroundImage: firstImage ? `url(${firstImage})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  }
 

  return (
    <div className='SiteMainView' id='SiteMainView' style={firstDivStyle}>
      {data.map(item => (
          <div key={item.id} className='SiteMainViewContainer' id='SiteMainViewContainer' >
            <h1 key={item.id} className='SidalH1'>{item.first_words} {item.company_Name}</h1>
            <p key={item.id} className='SidalP'>
              {item.Discription}
            </p>
          
          </div>
      ))}
       </div>
  );
};

export default SiteMainView;




/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://your-django-api-url.com/api/data');
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
    <div>
      <h1>Data from Django</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Adjust "id" and "name" according to your Django model
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
*/






/**
 
  // image Data Fetch
  const [image, setImage] = useState(null);
  const [loadingImg, setLoadingImg] = useState(true);
  const [errorImg, setErrorImg] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/mainviewpage/', {
          responseType: 'blob' // Important for handling binary data
        });
        const imageUrl = URL.createObjectURL(response.data);
        /* name
        image  
        const imager = data.map(item => (item.image));
        console.log(imager)
        setImage(imageUrl);
      } catch (errorImg) {
        setErrorImg('Error fetching image: ' + errorImg.message);
      } finally {
        setLoadingImg(false);
      }
    };

    fetchImage();
  }, []);

  if (loadingImg) {
    return <div>Loading...</div>;
  }

  if (errorImg) {
    return <div>{errorImg}</div>;
  }
  const IMGStyle = {
    backgroundImage: `url(${image})`
  };

 */




/*
// import './SiteMainView.css'
// // import SiteMainViewIMG from './SiteMainView.jpeg'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SiteMainView = () => {

// };


// export default SiteMainView
*/

/*
<div className='SiteMainView' id='SiteMainView' style={IMGStyle}>
<div className='SiteMainViewContainer' id='SiteMainViewContainer' >

  <h1 className='SidalH1'>Welcome to my website!</h1>
  <p className='SidalP'>
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
    This is a simple website created by me, using ReactJS. 
  </p>

</div>
</div>
*/

/*

  const [data, setData] = useState([]);
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/')
          .then(response => {
              setData(response.data);
              // console.log( data.map((item) =>(item.name)) );
          })
          .catch(error => {
              console.error('There was an error fetching the data!', error);
          });
  }, []);


  const IMGStyle = {
    backgroundImage: `url(${SiteMainViewIMG})`
  }; 
  return ( <div>
    <h1>Data from Django API</h1>
    <ul>
        {data.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
</div>
 
  )
*/



















// import React, { useState, useEffect } from 'react';

// const SiteMainView = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://your-django-api-url.com/api/data/');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>My Data</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SiteMainView;
