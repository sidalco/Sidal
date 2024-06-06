import { Link } from 'react-router-dom'
import './ListButton.css'

// import {a,  aa, aaa} from '../';


const ListButton = (props) => {
  return (
      <Link to={props.linkTo} className='ListButton'>
          {props.buttonName}
      </Link>
  )
}

export default ListButton