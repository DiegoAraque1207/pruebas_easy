import React from 'react'


class NavbarFv extends React.Component{
        render(){
            return(
              <div id = "tabn">
                    <ul class="nav nav-tabs justify-content-center navbar-light">
                    <div>
                    <li class="nav-item">
                      <a class="nav-link" href="/mykitchen" target="_self">Principal</a>
                    </li>
                    </div>  
                    <li class="nav-item">
                      <a class="nav-link active" href="/mykitchen/myfavorites" target="_self">Favoritos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen/myrecipes" target="_self">Mis Recetas</a>
                    </li>
                  </ul>
              </div>
            )
        }
}

export default NavbarFv