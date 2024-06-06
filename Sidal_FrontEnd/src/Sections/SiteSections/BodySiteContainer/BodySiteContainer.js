
import './BodySiteContainer.css'

const BodySiteContainer = (props) => {
  return (
    <div className='BodySiteContainer' id='BodySiteContainer'>
        {props.children}
    </div>
  )
}

export default BodySiteContainer