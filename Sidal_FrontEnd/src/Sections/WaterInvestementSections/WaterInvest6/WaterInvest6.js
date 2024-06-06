import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest6Data from '../../../Data/WaterInvestData/WaterInvest6Data.js'

const WaterInvest6 = () => {
  const CardsInfo = WaterInvest6Data.map(
      card => {
        return <ProductCard 
            ProductName={card.ProductName} 
            ProductType={card.ProductType} 
            ProductFilePDF={card.ProductFilePDF} 
            ProductImage={card.ProductImage} 
            ProductExplain={card.ProductExplain} 
          />
      }
    )
    return (
    <div className='ProductSections' id='ProductSections'>
      <div className='ProductsContainer'>
            {CardsInfo}
      </div>
   </div>
  )
}

export default WaterInvest6