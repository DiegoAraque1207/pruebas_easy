import React from 'react'
import Header from './Structure/Header';
import Change from './Recipes/Change';


class ChangeRecipe extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Change/>
            </div>  
            
        )
    }
}

export default ChangeRecipe