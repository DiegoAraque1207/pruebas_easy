import React from 'react'
import Header from './Structure/Header';
import Searcher from './SBIElements/Searcher'
import Footerpage from './Structure/Footerpage'
import PrepSteps from './SBIElements/PrepSteps'




class SearchByIngredients extends React.Component{
        render(){
            return(
                <div>
                    <Header/>
                    <Searcher/>
                    <PrepSteps/>
                    <Footerpage/>
                </div>            
            )   
        }
}

export default SearchByIngredients