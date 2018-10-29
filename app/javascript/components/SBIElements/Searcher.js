import React from 'react'
import Typing from './SearcherElements/Typing'
import ByCategories from './SearcherElements/ByCategories'


class Searcher extends React.Component{

  constructor() {
    super(); 
    this.state = { showSearchBar: false }
    this.state = { showCategories: false }
    this.state = { colored: false}
    this.state = { colored2: false}
  } 

  _showSearchBar = (bool) => {
    this.setState({
      showSearchBar: bool,
      showCategories : !bool,
      colored: bool,
      colored2: !bool
    });
  }

  _showCategories = (bool) => {
    this.setState({
      showCategories: bool,
      showSearchBar : !bool,
      colored2: bool,
      colored: !bool
    });
  }

        render(){
       
            let btn_class = this.state.colored ? "offButton" : "onButton";
            let btn_class2 = this.state.colored2 ? "offButton" : "onButton";

            
        return(
            <div>
              <div>.</div>
               <div id = "si" class = "container-fluid">
              <h5 ><strong>¿Cómo deseas buscar los ingredientes?</strong></h5>   
                </div>
                <div>.</div>
              <div class = "row">
              <div class = "col-lg-6">
              <button className={btn_class} onClick= {this._showSearchBar.bind(null, true)}> Escribir </button>
                </div>
                <div class = "col-lg-6">
                <button className={btn_class2} onClick= {this._showCategories.bind(null, true)}>Categoría</button>
                </div>
                <div>.</div>
                <div id = "j" class = "container">
                { this.state.showSearchBar && (<div><Typing/></div>) }
                { this.state.showCategories && (<div><ByCategories/></div>) }
                </div>
              </div>   
            </div>
            )
        }
}

export default Searcher
