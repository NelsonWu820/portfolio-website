import city from "../static/city_cropped_4.jpg"

const Header = () => {
  return (
    <section class="header">
      <img src={city} alt="New york Skyline" class="header"/>
      <div class="header_bottom"></div>
    </section>
  )
}

export default Header