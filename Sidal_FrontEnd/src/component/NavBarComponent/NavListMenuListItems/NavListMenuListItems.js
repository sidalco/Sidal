import './NavListMenuListItems.css'
import {ListButton} from '../../index';

const NavListMenuListItems = () => {
  return (
    <div className='NavListMenuListItems'>
        <ListButton buttonName='About' linkTo='/about' />
        <ListButton buttonName='Compressor' linkTo='/compressor' />
        <ListButton buttonName='Water-Tratement' linkTo='/watertratement'/> 
        <ListButton buttonName='Printers' linkTo='/printers' />
        <ListButton buttonName='Spare-Parts' linkTo='/Spare' />
        <ListButton buttonName='Laboratory' linkTo='/laboratory' />
        <ListButton buttonName='Contuct-Us' linkTo='/contuct-us' />
        
      </div>
  )
}

export default NavListMenuListItems
