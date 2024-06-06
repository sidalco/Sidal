import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest2Data from '../../../Data/WaterInvestData/WaterInvest2Data.js'

const WaterInvest2 = () => {
  const CardsInfo = WaterInvest2Data.map(
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

export default WaterInvest2