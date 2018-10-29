import React from 'react'


class NavbarRc extends React.Component{
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
                      <a class="nav-link" href="/mykitchen/myfavorites" target="_self">Favoritos</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="/mykitchen/myrecipes" target="_self">Mis Recetas</a>
                    </li>
                  </ul>
              </div>
            )
        }
}

export default NavbarRc