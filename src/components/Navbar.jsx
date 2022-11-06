function Navbar() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Hallo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://127.0.0.1:5173/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://127.0.0.1:5173/about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://127.0.0.1:5173/skills">My Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://127.0.0.1:5173/blog">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar