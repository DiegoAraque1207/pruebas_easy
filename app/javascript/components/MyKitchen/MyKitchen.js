import React from 'react'
import FooterPage from '../Structure/Footerpage'
import Header from '../Structure/Header'
import NavbarMK from './MKElements/NavbarMK'
import MyRecipesContent from './MKElements/MyRecipesContent'
import MKLeftMenu from './MKElements/MKLeftMenu'


class MyKitchen extends React.Component{
        render(){
            return(
            <div>
                <Header/>
                <div class = "container-fluid" id = "content">
                    <h1 align = "center" className="my-4"><strong>Mi Cocina</strong></h1>
                    <div id = "fuck" class = "container">
                     <NavbarMK/>
                    </div>
                    <div class = "container">
                        <div class = "row">
                             <div id = "f" className="col-lg-9">
                             <div id ="discovertitle" class = "container">
                                 <h2 id = "myrecontent"><strong>Descubrir</strong></h2>
                             </div>
                             <MyRecipesContent/>  
                             </div> 
                             <div id = "f" className="col-lg-3">
                             <div>.</div>
                             <MKLeftMenu/>
                             </div> 
                        </div>
                    </div>
                </div>
                <FooterPage/>x
            </div>
            )
        }
}

export default MyKitchen