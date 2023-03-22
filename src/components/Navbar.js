const Navbar = ({onClick, onClick2}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
        <a class="navbar-brand text-white" href="#">NelsonWu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        
        <div class="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link text-white" onClick={onClick}>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link text-white" href={onClick2}>Skills & Technologies</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">About Me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar