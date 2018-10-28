import React from 'react'
import FooterPage from './Structure/Footerpage'
import Navbar from './Structure/Navbar'
import Header from './Structure/Header'
import IngredientSearch from './HomeElements/IngredientSearch'


class Home extends React.Component{
        render(){
            return(
                <div >
                    <Header/>
                    <Navbar/>
                <div id = "ontent">
                    <IngredientSearch/>
                    <section className="columns">     
                <div id = "vegetales" className="column">
                    <h2>Noticias</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?</p>
                </div>  
                <div id = "proteinas" className="column">
                    <h2>Receter</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum.</p>
                </div> 
              <div id = "carbohidratos" className="column">
                    <h2>Información</h2>
                    <p>Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto cum praesentium voluptatibus recusandae?</p>
                </div> 
            </section>	
            </div>  
                    <FooterPage/>
                </div>
            )
        }
}

export default Home

