import './ContactingUS.css'
import ContactUsForm from './ContactUsForm';
import ContactUsInfo from './ContactUsInfo';
const ContactingUS = () => {
  
  return (<div className='ContactingUS'>
            <ContactUsInfo/>
            <div className='HorizentalLine'>{/*________________________*/}</div>
            <ContactUsForm/>             
    </div>
    
  )
}

export default ContactingUS