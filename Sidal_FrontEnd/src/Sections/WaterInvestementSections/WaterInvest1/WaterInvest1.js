import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest1Data from '../../../Data/WaterInvestData/WaterInvest1Data.js'

const WaterInvest1 = () => {
    const CardsInfo = WaterInvest1Data.map(
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

export default WaterInvest1