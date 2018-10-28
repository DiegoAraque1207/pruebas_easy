import React from 'react'


class NavbarMK extends React.Component{
        render(){
            return(
              <div id = "tabn">
                    <ul className="nav nav-tabs justify-content-center navbar-light">
                    <div>
                    <li className="nav-item">
                      <a className="nav-link active" href="/mykitchen" target="_self">Principal</a>
                    </li>
                    </div>  
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen/myfavorites" target="_self">Favoritos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen/myrecipes" target="_self">Mis Recetas</a>
                    </li>
                  </ul>
              </div>
            )
        }
}

export default NavbarMK