import './ProductDescription.css'
import ProductDescriptIMG from '../../../Assets/Images/wsa.png'
const ProductDescription = () => {


  return (
    <div className='ProductDescription'>
        <div className='ProductDescriptionLeftSide'>
              <h3 className="ProductDescriptionTitle">
              Efficient power meets experience
                </h3>
              <p className="ProductDescriptionDesc">
              We know how much you care about the quality of your compressed air . As Dalgakıran Kompresör, we proposes innovative solutions to your requirements and needs.

Recently energy efficiency is one of the most important considerations when choosing the right compressed air solution where the output generated matches the demand as closely as possible. 

That's why we offer innovative compressed air system that support global sustainable development by increasing our customers’ productivity, reducing cost and helping them meet their sustainability ambitions.
              </p>
        </div>
        <div className='ProductDescriptionRightSide'>
          <img className='ProductDescriptionImage' src={ProductDescriptIMG}></img>
        </div>
    </div>
  )
}

export default ProductDescription