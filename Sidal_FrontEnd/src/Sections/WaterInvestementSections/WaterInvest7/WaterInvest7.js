import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest7Data from '../../../Data/WaterInvestData/WaterInvest7Data.js'

const WaterInvest7 = () => {
  const CardsInfo = WaterInvest7Data.map(
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

export default WaterInvest7