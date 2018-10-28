import React from 'react'
import Header from './Structure/Header';
import Entry from './Recipes/Entry';


class EntryRecipe extends React.Component {
    render() {
        return (
            <div id="main">
                <Header/>
                <Entry/>
            </div>  
            
        )
    }
}

export default EntryRecipe