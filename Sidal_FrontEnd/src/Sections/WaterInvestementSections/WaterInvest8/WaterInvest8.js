import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest8Data from '../../../Data/WaterInvestData/WaterInvest8Data.js'

const WaterInvest8 = () => {
  const CardsInfo = WaterInvest8Data.map(
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

export default WaterInvest8