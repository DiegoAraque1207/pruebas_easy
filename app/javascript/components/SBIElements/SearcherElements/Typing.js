import React from 'react'


class Typing extends React.Component{
        render(){
            return(
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Añadir ingrediente"></input>
                <div class="input-group-append">
                  <button id = "srch" class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </div>    
                </div>
            )
        }
}

export default Typing