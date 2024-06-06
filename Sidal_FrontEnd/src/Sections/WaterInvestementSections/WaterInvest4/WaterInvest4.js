import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest4Data from '../../../Data/WaterInvestData/WaterInvest4Data.js'

const WaterInvest4 = () => {
  const CardsInfo = WaterInvest4Data.map(
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

export default WaterInvest4