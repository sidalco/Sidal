import '../../ProductSections.css'
import {ProductCard} from '../../index'
import WaterInvest3Data from '../../../Data/WaterInvestData/WaterInvest3Data.js'

const WaterInvest3 = () => {
  const CardsInfo = WaterInvest3Data.map(
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

export default WaterInvest3