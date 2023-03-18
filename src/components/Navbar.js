const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top">
        <a class="navbar-brand" href="#">NelsonWu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        
        <div class="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="#">Skills & Technologies</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About Me</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar