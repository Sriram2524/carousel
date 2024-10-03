// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachCarousel} = props
  const {name, imageUrl, description} = eachCarousel
  return (
    <div className="carousel-con">
      <img className="carousel-img" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
