import './ProductCard.css'
import { FaFilePdf } from "react-icons/fa6";
// import picis from './ProductCard.jpeg'

const ProductCard = (props) => {
  return (
    
        <div className='ProductsCard'>
            <div className='ProductsUpSide'>
                    <h5 className='ProductsName'>{props.ProductName}</h5>
                    <p className='ProductType'>{props.ProductType}</p>
                    <button className='ProductPDF' src={props.ProductFilePDF} download>More Info...<FaFilePdf/></button>
                </div>
                <div className='ProductsBottomSide'>
                        <div className='ProductsBottomPicSide'>
                            <img src={props.ProductImage}></img>
                        </div>
                        <div className='ProductsBottomExplainSide'>
                            <span> {props.ProductExplain}</span>
                        </div>
                </div>
            </div>
            
 

    
    )
}

export default ProductCard



/*


<div className='ProductsUpSide'>
<h5 className='ProductsName'>Sidal Kirkuk</h5>
<p className='ProductType'>Oil Injected</p>
<button className='ProductPDF' src='' download>More Info...<FaFilePdf/></button>
</div>
<div className='ProductsBottomSide'>
<div className='ProductsBottomPicSide'>
    <img src={picis}></img>
</div>
<div className='ProductsBottomExplainSide'>
    <span>
    100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance100% SIDAL KIRKUK is a high quality, oil injected reciprocating spring 
      made of the finest natural materials. It is designed to provide superior performance
        
    </span>
</div>
</div>


*/