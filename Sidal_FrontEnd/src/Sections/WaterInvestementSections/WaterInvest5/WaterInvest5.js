import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest5Data from '../../../Data/WaterInvestData/WaterInvest5Data.js'

const WaterInvest5 = () => {
    const CardsInfo = WaterInvest5Data.map(
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

export default WaterInvest5