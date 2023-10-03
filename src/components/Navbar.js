const Navbar = ({name, onClick, onClick2, onClick3, onClick4, onClick5}) => {
  return (
    <div className={name} id="navbar_parent">
        <div className="navbar-brand text-white nav-link" onClick={onClick}>NelsonWu</div>
        
          <div>
            <div className="navbar-links navbar-right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <div className="nav-link text-white" onClick={onClick}>Home</div>      
                    </li>
                    <li className="nav-item active">
                      <div className="nav-link text-white" onClick={onClick2}>Skills & Technologies</div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link text-white" onClick={onClick3}>Projects</div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link text-white" onClick={onClick4}>About Me</div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link text-white" onClick={onClick5}>Contact Me</div>
                    </li>
                </ul>
            </div>

          </div>
    </div>
  )
}

export default Navbar