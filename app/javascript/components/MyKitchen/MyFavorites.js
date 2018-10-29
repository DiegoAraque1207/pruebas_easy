import React from 'react'
import FooterPage from '../Structure/Footerpage'
import Header from '../Structure/Header'
import NavbarFv from './MKElements/NavbarFv'
import MyFavoritesContent from './MKElements/MyFavoritesContent'
import MKLeftMenu from './MKElements/MKLeftMenu'


class MyIngredients extends React.Component{
        render(){
            return(
                <div>
                    <Header/>
                    <div class = "container-fluid" id = "content">
                    <h1 align = "center" class="my-4"><strong>Mis Favoritos</strong></h1>
                    <div class = "container">
                         <NavbarFv/>
                    </div>
                    <div class = "container">
                       <div class = "row">
                           <div id = "f" class="col-lg-3">
                              <MKLeftMenu/>
                           </div> 
                           <div id = "f" class="col-lg-9">
                              <MyFavoritesContent/>
                           </div>      
                       </div>
                    </div>
                    </div>
                    <FooterPage/>
                </div>
            )
        }
}

export default MyIngredients