import React from 'react'


class NavbarFv extends React.Component{
        render(){
            return(
              <div>
                    <h1 align = "center" className="my-4">Mis Favoritos</h1>
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link" href="/mykitchen" target="_self">Principal</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/mykitchen/myfavorites" target="_self">Favoritos</a>
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