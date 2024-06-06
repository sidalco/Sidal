import './SpaceProductShow.css'

const SpaceProductShow = (props) => {
  return (
    <div className='SpaceProductShow'>
      
      <div className='SpaceProductShowChild'>
        {props.children}
      </div>
    </div>
  )
}

export default SpaceProductShow