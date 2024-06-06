
import './ContactingUS.css';
import { SpaceProductShow } from '../../../component/index'; 
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const DataURLContactUsForm = 'http://127.0.0.1:8000/ContactUsForm/';
const ContactUsForm = () => {
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
      const csrftoken = Cookies.get('csrftoken'); // Get the CSRF token from the cookie

      const handleSubmit = async e => {
          e.preventDefault();
          try {
              await axios.post(DataURLContactUsForm, formData);
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
    <>
        <form onSubmit={handleSubmit}  className="ContactUsForm">
            <div className='UpContactUsForm'>
                   <input className="ContactUsFormFullName" type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
                   <input className="ContactUsFormEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='DownContactUsForm'>
                    <input className="ContactUsFormSubject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    <input className="ContactUsFormPhoneNumber" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
            </div>
            <div className='LastContactUsForm'>
                   <textarea className="ContactUsFormContent" name="content" placeholder="Your Note Or Message" value={formData.content} onChange={handleChange} required></textarea>
            </div>
            <div className='BTNContactUsForm'>
                    <button type="submit">
                        SEND
                    </button>
            </div>
        </form>
    </>
  );
};

export default ContactUsForm;

/*
import './ContactingUS.css'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const DataURL = 'http://127.0.0.1:8000/ContactUsFormForm/'
const ContactUsFormForm = () => {
  return (<div className='ContactUsFormForm'>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
              <span className='ContactUsFormInfoWordsSpan'>Email:<p>info@space.com</p></span>
                                                  
  </div>
  )
}

export default ContactUsFormForm
*/




/* Main ConatctUs
// import './ContactUsForm.css';
// import { SpaceProductShow } from '../../component'; 
// import { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';


// const DataURLContactUsForm = 'http://127.0.0.1:8000/ContactUsForm/';
// const ContactUsForm = () => {
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
//             await axios.post(DataURLContactUsForm, formData, {
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
    //           await axios.post(DataURLContactUsForm, formData);
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
//         <form onSubmit={handleSubmit}  className="ContactUsForm">
//             <div className='UpContactUsForm'>
//                    <input className="ContactUsFormFullName" type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
//                    <input className="ContactUsFormEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//             </div>
//             <div className='DownContactUsForm'>
//                     <input className="ContactUsFormSubject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
//                     <input className="ContactUsFormPhoneNumber" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
//             </div>
//             <div className='LastContactUsForm'>
//                    <textarea className="ContactUsFormContent" name="content" placeholder="Your Note Or Message" value={formData.content} onChange={handleChange} required></textarea>
//             </div>
//             <div className='BTNContactUsForm'>
//                     <button type="submit">
//                         SEND
//                     </button>
//             </div>
//         </form>
//     </SpaceProductShow>
//   );
// };

// export default ContactUsForm;
*/

/*axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';



import './ContactUsForm.css';
import { SpaceProductShow } from '../../component'; 
import { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {
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
      await axios.post('/http://127.0.0.1:8000/ContactUsForm/', formData);
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
      <form onSubmit={handleSubmit} className="ContactUsForm">
        <div className="UpContactUsForm">
          <input
            className="ContactUsFormFullName"
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
          <input
            className="ContactUsFormEmail"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="DownContactUsForm">
          <input
            className="ContactUsFormSubject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            className="ContactUsFormPhoneNumber"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="LastContactUsForm">
          <textarea
            className="ContactUsFormContent"
            name="content"
            placeholder="Your Note Or Message"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="BTNContactUsForm">
          <button type="submit">SEND</button>
        </div>
      </form>
    </SpaceProductShow>
  );
};

export default ContactUsForm;
*/

/*
import './ContuctUs.css'
import {SpaceProductShow} from '../../component' 
import { useState } from 'react';
import axios from 'axios';

const ContactUsForm = () => {

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
        <form onSubmit={handleSubmit}  className="ContactUsForm">
            <div className='UpContactUsForm'>
                   <input className="ContactUsFormFullName" type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} required />
                   <input className="ContactUsFormEmail" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className='DownContactUsForm'>
                    <input className="ContactUsFormSubject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    <input className="ContactUsFormPhoneNumber" type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
            </div>
            <div className='LastContactUsForm'>
                   <textarea className="ContactUsFormContent" name="content" placeholder="Your Note Or Message" value={formData.content} onChange={handleChange} required></textarea>
            </div>
            <div className='BTNContactUsForm'>
                    <button type="submit">
                        SEND
                    </button>
            </div>
        </form>
    </SpaceProductShow>
  );
};

export default ContactUsForm;
*/




