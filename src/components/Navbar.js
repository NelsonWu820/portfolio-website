const Navbar = ({onClick, onClick2, onClick3}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
        <a class="navbar-brand text-white" href="#">NelsonWu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        
        <div class="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <div class="nav-link text-white" onClick={onClick}>Home</div>      
                </li>
                <li class="nav-item active">
                  <div class="nav-link text-white" onClick={onClick2}>Skills & Technologies</div>
                </li>
                <li class="nav-item">
                  <div class="nav-link text-white" onClick={onClick3}>Projects</div>
                </li>
                <li class="nav-item">
                  <div class="nav-link text-white" onClick={onClick2}>About Me</div>
                </li>
                <li class="nav-item">
                  <div class="nav-link text-white" onClick={onClick2}>Contact Me</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar