import city from "../static/city_cropped_3.png"

const Header = () => {
  return (
    <section class="header">
      <img src={city} alt="New york Skyline" class="header"/>
      <div class="header_bottom"></div>
    </section>
  )
}

export default Header