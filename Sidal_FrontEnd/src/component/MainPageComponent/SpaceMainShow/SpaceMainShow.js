import './SpaceMainShow.css'

const SpaceMainShow = (props) => {
  return (
    <div className='SpaceMainShow'>
      
      <div className='SpaceMainShowChild'>
        {props.children}
      </div>
    </div>
  )
}

export default SpaceMainShow