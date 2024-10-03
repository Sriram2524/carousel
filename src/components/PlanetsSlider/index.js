// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <div data-testid="planets" className="slider-container">
      <h1 className="main-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem key={each.id} eachCarousel={each} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
