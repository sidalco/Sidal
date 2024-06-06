import './SpaceMainTitle.css'

const SpaceMainTitle = (props) => {
  return (
    <h1 className='SpaceMainTitle'>
        {props.children}
    </h1>
  )
}

export default SpaceMainTitle