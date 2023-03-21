const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
        <div class="navbar-brand text-white" href="#">NelsonWu</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        
        <div class="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <div class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></div>
                </li>
                <li class="nav-item active">
                <div class="nav-link text-white" href="#">Skills & Technologies</div>
                </li>
                <li class="nav-item">
                <div class="nav-link text-white" href="#">Projects</div>
                </li>
                <li class="nav-item">
                <div class="nav-link text-white" href="#">About Me</div>
                </li>
                <li class="nav-item">
                <div class="nav-link text-white" href="#">Contact Me</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar