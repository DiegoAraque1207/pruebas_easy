import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
                 <nav id = "a" className="navbar navbar-expand-lg navbar-dark primary-color">                      
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="basicExampleNav">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recomendaciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Noticias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                            </ul>                            
                        </div>
                        </nav>
        );
    }
}

export default Navbar;

