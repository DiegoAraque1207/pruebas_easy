import React from 'react'

class IngredientSearch extends React.Component{
        render(){
            return(
                <div>
                    < div id = "division"  className = "jumbotron">
                    <h3>Construye tu platillo</h3>
                    <p>Elige los ingredientes que desees para brindarte las mejores opciones de comida:</p>
                    <form>
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" placeholder="City"></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="State"></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <input type="text" className="form-control" placeholder="Zip"></input>
                            </div>
                            <h1>+</h1>
                            <div className="col">
                            <button type="button" className="btn btn-primary">Encontrar recetas</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>            
            )
        }
}

export default IngredientSearch