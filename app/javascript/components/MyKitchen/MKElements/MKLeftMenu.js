import React from 'react'

class MKLeftMenu extends React.Component{
        render(){
            return(
            <div id = "tabn">
            <h5>Lo que se te ocurra</h5>
            <div id = "tabn" className="input-group">
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                 <div className="input-group-append">
                  <span className="input-group-text">Buscar</span>
                </div>
              </div>
              </div>
            )
        }
}

export default MKLeftMenu
