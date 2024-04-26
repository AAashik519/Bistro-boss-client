import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ima1 from '../../../assets/home/01.jpg'
import ima2 from '../../../assets/home/02.jpg'
import ima3 from '../../../assets/home/03.png'
import ima4 from '../../../assets/home/04.jpg'
import ima5 from '../../../assets/home/05.png'
import ima6 from '../../../assets/home/06.png'
const Banner = () => {
  return (
    <Carousel >
    <div>
        <img src={ima1}/>
        
    </div>
    <div>
        <img src={ima2} />
        
    </div>
    <div>
        <img src={ima3} />
    </div>
    <div>
        <img src={ima4} />
    </div>
    <div>
        <img src={ima5} />
    </div>
    <div>
        <img src={ima6} />
    </div>
</Carousel>
  )
}

export default Banner