import city from "../static/city_cropped_4.jpg"

const Header = () => {
  return (
    <section className="header" id="header_id">
      <img src={city} alt="New york Skyline" className="header"/>
      <div className="header_bottom"></div>
    </section>
  )
}

export default Header