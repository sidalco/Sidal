import './ContactUs.css';
import { SpaceProductShow } from '../../component'; 
import ContactingUS from './PartOfContactUs/ContactingUS';
// import { useState, useEffect } from 'react';

import {SiteBrunches} from '../../Sections'
const DataURLContactUs = 'http://127.0.0.1:8000/contactus/';
const ContactUs = () => {
return( <SpaceProductShow>
            <div className='ContactUs'>
                <SiteBrunches/>
                <div className='Line'></div>
                <ContactingUS/>
            </div>
        </SpaceProductShow>

    /*
    <SpaceMainShow>
            
            <SiteBrunches/>
       </SpaceMainShow> 
    */
);
};

export default ContactUs;





// echo "# Sidal-web" >> README.md
// git init
// git add README.md












/* Main ConatctUs
// import './ContactUs.css';
// import { SpaceProductShow } from '../../component'; 
// import { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';


// const DataURLContactUs = 'http://127.0.0.1:8000/contactus/';
// const ContactUs = () => {
//     const [formData, setFormData] = useState(
//         {
//           full_name: '',
//           email: '',
//           subject: '',
//           phone_number: '',
//           content: ''
//       });
//       const handleChange = e => 
//       {
//           setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
//       const csrftoken = Cookies.get('csrftoken'); // Get the CSRF token from the cookie

//         const handleSubmit = async e => {
//         e.preventDefault();
//         try {
//             await axios.post(DataURLContactUs, formData, {
//                 headers: {
//                     'X-CSRFToken': csrftoken // Include the CSRF token in the headers
//                 }
//             });
//             alert('Contact form submitted successfully');
//             setFormData({
//                 full_name: '',
//                 email: '',
//                 subject: '',
//                 phone_number: '',
//                 content: ''
//             });
//         } catch (error) {
//             console.error('Error submitting contact form:', error);
//             alert('Failed to submit contact form. Please try again.');
//         }
//     };

    //   const handleSubmit = async e => {
    //       e.preventDefault();
    //       try {
    //           await axios.post(DataURLContactUs, formData);
    //           alert('Contact form submitted successfully');
    //           setFormData({
    //               full_name: '',
    //               email: '',
    //               subject: '',
    //               phone_number: '',
    //               content: ''
    //           });
    //       } catch (error) {
    //           console.error('Error submitting contact form:', error);
    //           alert('Failed to submit contact form. Please try again.');
    //       }
    //   };

//   return (
//     <SpaceProductShow>
//         <form onSubmit={handleSubmit}  className="ContactUs">
//             <div className='UpContactUs'>
//                    <input className="ContactUsFullName" type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
//                    <input className="ContactUsEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             </div>
//             <div className='DownContactUs'>
//                     <input className="ContactUsSubject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
//                     <input className="ContactUsPhoneNumber" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
//             </div>
//             <div className='LastContactUs'>
//                    <textarea className="ContactUsContent" name="content" placeholder="Your Note Or Message" value={formData.content} onChange={handleChange} required></textarea>
//             </div>
//             <div className='BTNContactUs'>
//                     <button type="submit">
//                         SEND
//                     </button>
//             </div>
//         </form>
//     </SpaceProductShow>
//   );
// };

// export default ContactUs;
*/

/*axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';



import './ContactUs.css';
import { SpaceProductShow } from '../../component'; 
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    phone_number: '',
    content: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/http://127.0.0.1:8000/contactus/', formData);
      alert('Contact form submitted successfully');
      setFormData({
        username: '',
        user_email: '',
        subject: '',
        phone: '',
        messageBody: ''
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit contact form. Please try again.');
    }
  };

  return (
    <SpaceProductShow>
      <form onSubmit={handleSubmit} className="ContactUs">
        <div className="UpContactUs">
          <input
            className="ContactUsFullName"
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <input
            className="ContactUsEmail"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="DownContactUs">
          <input
            className="ContactUsSubject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            className="ContactUsPhoneNumber"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="LastContactUs">
          <textarea
            className="ContactUsContent"
            name="content"
            placeholder="Your Note Or Message"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="BTNContactUs">
          <button type="submit">SEND</button>
        </div>
      </form>
    </SpaceProductShow>
  );
};

export default ContactUs;
*/

/*
import './ContuctUs.css'
import {SpaceProductShow} from '../../component' 
import { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {

      const [formData, setFormData] = useState(
        {
          full_name: '',
          email: '',
          subject: '',
          phone_number: '',
          content: ''
      });
      const handleChange = e => 
      {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = async e => {
          e.preventDefault();
          try {
              await axios.post('/api/contact-us/', formData);
              alert('Contact form submitted successfully');
              setFormData({
                  full_name: '',
                  email: '',
                  subject: '',
                  phone_number: '',
                  content: ''
              });
          } catch (error) {
              console.error('Error submitting contact form:', error);
              alert('Failed to submit contact form. Please try again.');
          }
      };

  return (
    <SpaceProductShow>
        <form onSubmit={handleSubmit}  className="ContactUs">
            <div className='UpContactUs'>
                   <input className="ContactUsFullName" type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
                   <input className="ContactUsEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='DownContactUs'>
                    <input className="ContactUsSubject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    <input className="ContactUsPhoneNumber" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
            </div>
            <div className='LastContactUs'>
                   <textarea className="ContactUsContent" name="content" placeholder="Your Note Or Message" value={formData.content} onChange={handleChange} required></textarea>
            </div>
            <div className='BTNContactUs'>
                    <button type="submit">
                        SEND
                    </button>
            </div>
        </form>
    </SpaceProductShow>
  );
};

export default ContactUs;
*/

