import React from 'react'
import FooterPage from '../Structure/Footerpage'
import Header from '../Structure/Header'
import NavbarRc from './MKElements/NavbarRc'
import MyRecipesContent from './MKElements/MyRecipesContent'
import MKLeftMenu from './MKElements/MKLeftMenu'


class MyRecipes extends React.Component{
        render(){
            return(
                <div>
                <Header/>
                <div class = "container-fluid" id = "content">
                <h1 align = "center" class="my-4"><strong>Mis Recetas</strong></h1>
                <div class = "container">
                     <NavbarRc/>
                </div>
                <div class = "container">
                   <div class = "row">
                       <div id = "f" class="col-lg-3">
                          <MKLeftMenu/>
                       </div> 
                       <div id = "f" class="col-lg-9">
                          <div>
                              .
                          </div>
                          <MyRecipesContent/>
                       </div>      
                   </div>
                </div>
                </div>
                <FooterPage/>
            </div>
            )
        }
}

export default MyRecipes