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
                <div class = "container">
                     <NavbarRc/>
                </div>
                <div class = "container">
                   <div class = "row">
                       <div className="col-lg-3">
                          <MKLeftMenu/>
                       </div> 
                       <div className="col-lg-9">
                          <div>
                              .
                          </div>
                          <MyRecipesContent/>
                       </div>      
                   </div>
                </div>
                <FooterPage/>
            </div>
            )
        }
}

export default MyRecipes