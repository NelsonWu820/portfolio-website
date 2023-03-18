import '../index.css';

const Header = (props) => {
  return (
    <div id='city_img'>
        <img src={props.image} alt="New york Skyline" id="city_img" style={'../index.css'}/>
    </div>
  )
}

export default Header