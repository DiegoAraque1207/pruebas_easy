import React from 'react'


class NavbarRc extends React.Component{
        render(){
            return(
              <div>
                <div class = "container" id = "micocina" >
                    <h1 align = "center" className="my-4">Mis Recetas</h1>
                </div>
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen" target="_self">Principal</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen/myfavorites" target="_self">Favoritos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/mykitchen/myrecipes" target="_self">Mis Recetas</a>
                    </li>
                  </ul>
              </div>
            )
        }
}

export default NavbarRc