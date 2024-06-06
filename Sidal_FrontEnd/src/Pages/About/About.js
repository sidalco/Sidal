import './About.css'


import { SpaceMainShow } from '../../component'
// import {SpaceMainShow, SpaceMainTitle} from '../../component'

const About = () => {
  return (
    <div className='AboutPage'>
        <SpaceMainShow>
            <h1>SIDAL Engineering & Trading</h1>
            <div className='NewExplanation'>
            Our company established in 2005, was founded based on our accumulated scientific experience gained from working in European countries and Turkey, various laboratories (water plants, soft drinks and various fruit juices) to build Deep Water Technology systems and equipments, we have launched several projects to install the latest engineering and technical methods to sustain improvements in European countries. While serving the owners of factories and companies, we started to provide all the necessary information to the customers in order to follow the developments in this sector closely.
            For any further information you may need just contact us!
            </div>
        </SpaceMainShow>
       
    
    </div>

  )
}

export default About

/*
import About_1 from '../../Assets/Images/About_1.png'
    
    import p001 from '../../Assets/Images/001.jpg'
import p002 from '../../Assets/Images/002.jpg'
import p003 from '../../Assets/Images/003.jpg'
import p004 from '../../Assets/Images/004.jpg'
import p005 from '../../Assets/Images/005.jpg'
import p006 from '../../Assets/Images/006.jpg'
import p007 from '../../Assets/Images/007.jpg'
import p008 from '../../Assets/Images/008.jpg'
import p009 from '../../Assets/Images/009.jpg'
import p010 from '../../Assets/Images/010.jpg'
import p011 from '../../Assets/Images/011.jpg'
import p012 from '../../Assets/Images/012.jpg'
import p013 from '../../Assets/Images/013.jpg'
import p014 from '../../Assets/Images/014.jpg'
import p015 from '../../Assets/Images/015.jpg'
import p016 from '../../Assets/Images/016.jpg'
import p017 from '../../Assets/Images/017.jpg'
import p018 from '../../Assets/Images/018.jpg'
import p019 from '../../Assets/Images/019.jpg'
import p020 from '../../Assets/Images/020.jpg'



<div className='AboutPage'>s
        <h1>Half a Century of Experience</h1>
        <div className='About1stShow'>
            <img src={About_1}></img>
            <div>
                  Türkiye’s largest manufacturer and exporter of industrial compressors, Dalgakıran Kompresör was founded in Istanbul in 1965 by Ömer Dalgakıran in a modest workshop measuring 25 m². Dalgakıran Kompresör has grown rapidly since the day it was founded through the investments it has made and today owns the largest compressor production plant under one roof in Europe and Türkiye with a closed production area covering 50,000 m².
                  Dalgakıran Kompresör has a diverse range of products and production quality to world standards. As one of Türkiye’s top 500 exporters, it reliably exports compressors to more than 130 countries and continues to work, invest, and grow for the betterment of Türkiye's industry and economy.
                  Continuing to work in the globalizing market focussed on customer satisfaction with more than 55 years of experience and an expert staff, Dalgakıran Kompresör provides rapid service all over the world through its 70+ international dealerships, overseas branches, and extensive service network.
            </div>
        </div>
        <div className='About2ndShow'>
              <div className='RedLableChild'>
                    <span>  120000+ </span>
                    <p>  Satisfied Customers</p>
              </div>
              <div className='RedLableChild'>
                    <span>  59 </span>
                    <p>  Years of Experience</p>
              </div>
              <div className='RedLableChild'>
                    <span>  130+ </span>
                    <p> Importing Countries </p>
              </div>
              <div className='RedLableChild'>
                    <span>  900+</span>
                    <p>Large Family</p>
              </div>
        </div>
        <div className='About3rdShow'>
            
              <h3>Dalgakıran  Past  to  Present</h3>
              <div className='PastToPresent'>
                      
                          <div className='ItemPastToPresent'>
                              <img src={p001} loading="lazy"></img>
                              <h5> Established <p>1965</p></h5>
                              <span>
Dalgakıran Kompresör’s first production site is established by Ömer Dalgakıran on 25 m² of space in Perşembe Market in Karaköy, Istanbul.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p002} loading="lazy"></img>
                              <h5> The First Compressor <p>1969</p></h5>
                              <span>
The company was produced its first reciprocating compressor.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p003} loading="lazy"></img>
                              <h5> New Location Of The Workshop <p>1979</p></h5>
                              <span>
The workshop was moved to its new location on an area of 100 m².</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p004} loading="lazy"></img>
                              <h5> The First Serial Production <p>1982</p></h5>
                              <span>
Serial production of single and double stage, low and high pressure reciprocating compressors was started.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p005} loading="lazy"></img>
                              <h5> The Second Generation <p>1987</p></h5>
                              <span>
The second generation of the Dalgakıran family joins the company.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p006} loading="lazy"></img>
                              <h5> Expansion Of The Production <p>1988</p></h5>
                              <span>
The new factory of 2.500 square meters goes into operation at the middle of the year.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p007} loading="lazy"></img>
                              <h5> The First Rotary Screw Compressor <p>1991</p></h5>
                              <span>
The company produces its first rotary screw air compressor.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p008} loading="lazy"></img>
                              <h5> The First Factory <p>1998</p></h5>
                              <span>
Our first factory of 6.000 square meters was established in Istanbul.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p009} loading="lazy"></img>
                              <h5> The First Booster Compressor <p>2000</p></h5>
                              <span>
Dalgakıran develops its first booster compressor for the PET bottle industry.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p010} loading="lazy"></img>
                              <h5> Opening Of The Branch In Germany <p>2004</p></h5>
                              <span>
HERTZ KOMPRESSOREN GMBH was founded in Germany.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p011} loading="lazy"></img>
                              <h5> Opening Of Thr Branch In Ukraine <p>2005</p></h5>
                              <span>
LLC DALGAKIRAN UKRAINE company was established.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p012} loading="lazy"></img>
                              <h5> The First Oil-Free Rotary Sscrew Compressor  <p>2007</p></h5>
                              <span>
Production of oil-free screw air compressor started.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p013} loading="lazy"></img>
                              <h5> Opening Of The R&D Center <p>2007</p></h5>
                              <span>
Dalgakıran R&D Center office was opened.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p014} loading="lazy"></img>
                              <h5> Expansion Of The Factory Area <p>2008</p></h5>
                              <span>
Our second factory of 6.000 square meters was established in Istanbul.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p015} loading="lazy"></img>
                              <h5> Opening Of The Branch In USA <p>2016</p></h5>
                              <span>
Hertz Kompressoren USA was founded in Charlotte.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p016} loading="lazy"></img>
                              <h5> The First Turbo Compressor <p>2017</p></h5>
                              <span>
IHI-DALGAKIRAN company was established. Dalgakıran became the first and only turbo compressor manufacturer in Turkey.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p017} loading="lazy"></img>
                              <h5> New Location Of The Factory <p>2020</p></h5>
                              <span>
50.000 square meter compressor factory started its production in Kocaeli.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p018} loading="lazy"></img>
                              <h5>New Series "IMPETUS"<p>2022</p></h5>
                              <span>
Mass production of our new series Impetus has started.</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p019} loading="lazy"></img>
                              <h5>New Series "IMPETUS 22-75 kW" <p>2023</p></h5>
                              <span>Mass production of our new series Impetus 22-75 kW will have started at the end of year</span>
                          </div>
                          <div className='ItemPastToPresent'>
                              <img src={p020} loading="lazy"></img>
                              <h5> Launch Of The New Generation  <p>2024</p></h5>
                              <span>Mass production of our new series, New Generation TIDY-DVK, has started.</span>
                          </div>
                          
                      
              </div>
        </div>
        <div className='About4thShow'>
        </div>
        <div className='About5thShow'>
        </div>
        <div className='About6thShow'>
        </div>
        <div className='About7thShow'>
        </div>
    
    </div>

 */