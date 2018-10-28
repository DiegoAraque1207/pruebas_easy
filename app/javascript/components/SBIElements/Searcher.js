import React from 'react'

class Searcher extends React.Component{
        render(){
            return(
                <div id = "d" className="wrapper">
                < div id = "division"  class = "jumbotron">
                    <h3>Construye tu platillo</h3>
                    <p>Elige los ingredientes que desees para brindarte las mejores opciones de comida:</p>
                    <form>
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder=""></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <input type="text" className="form-control" placeholder=""></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <input type="text" className="form-control" placeholder=""></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <button type="button" className="btn btn-primary">Encontrar recetas</button>
                            </div>
                        </div>
                        </form>
                    </div>  
            <section className="columns">     
                <div id = "vegetales" className="column">
                    <h2>Vegetales</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae?</p>
                </div>  
                <div id = "proteinas" className="column">
                    <h2>Proteinas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum.</p>
                </div>
              
              <div id = "carbohidratos" className="column">
                    <h2>Carbohidratos</h2>
                    <p>Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto cum praesentium voluptatibus recusandae?</p>
                </div>
                
            </section>	
            </div>
            )
        }
}

export default Searcher