import './Home.css'
import {SpaceMainShow, SpaceMainTitle} from '../../component'
import { SiteNews, SiteMainView, SiteBrunches,Catalogue } from '../../Sections'

const Home = () => {
  return (
    <>
          <SpaceMainShow>
                <SiteMainView />
            </SpaceMainShow>
            
            <SpaceMainShow>
                <SpaceMainTitle>
                 News
                </SpaceMainTitle>
                <SiteNews/>
            </SpaceMainShow>

           {/* <SpaceMainShow>
                <SpaceMainTitle>
                  Brunches
                </SpaceMainTitle>
                <SiteBrunches/>
            </SpaceMainShow>  */}
            
            <SpaceMainShow>
                <SpaceMainTitle>
                Catalogues
                </SpaceMainTitle>
                <Catalogue/>
            </SpaceMainShow> 


    </>

  )
}

export default Home