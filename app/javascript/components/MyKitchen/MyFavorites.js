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
                    <div class = "container">
                         <NavbarFv/>
                    </div>
                    <div class = "container">
                       <div class = "row">
                           <div className="col-lg-3">
                              <MKLeftMenu/>
                           </div> 
                           <div className="col-lg-9">
                              <MyFavoritesContent/>
                           </div>      
                       </div>
                    </div>
                    <FooterPage/>
                </div>
            )
        }
}

export default MyIngredients