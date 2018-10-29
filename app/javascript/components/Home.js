import React from 'react'
import FooterPage from './Structure/Footerpage'
import Navbar from './Structure/Navbar'
import Header from './Structure/Header'
import Searcher from './SBIElements/Searcher'
import MyRecipesContent from './MyKitchen/MKElements/MyRecipesContent'


class Home extends React.Component{
        render(){
            return(
                <div >
                    <Header/>
                <div id = "coho" class = "container-fluid">
                <h1 align = "center" class="my-4"><strong>Easy Cooking</strong></h1>
                    <div class = "container">
                        <div class = "row">
                             <div id = "f" class="col-lg-3"> 
                                <Searcher/>  
                             </div>
                             <div id = "f" class="col-lg-9">  
                             <div>.</div>
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

export default Home

