import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Signin from './Signin'
import Signup from './Signup'
// import SearchByIngredients from './SearchByIngredients'
import FormInputIngredients from './FormInputIngredients'
import PlanningFood from './PlanningFood'
import MyKitchen from './MyKitchen/MyKitchen'
import MyFavorites from './MyKitchen/MyFavorites'
import MyRecipes from './MyKitchen/MyRecipes'
import EntryRecipe from './EntryRecipe'
import ChangeRecipe from './ChangeRecipe'



class App extends React.Component{
        render(){
            return(            
             <div>
                 <Switch>
                     <Route exact path = "/" component = {Home} />
                     <Route exact path = "/about" component = {About} />
                     <Route exact path = "/sign_in" component = {Signin} />
                     <Route exact path = "/sign_up" component = {Signup} />
                     {/* <Route exact path = "/sbingredients" component = {SearchByIngredients} /> */}
                     <Route exact path = "/input_ingredients" component = {FormInputIngredients} />
                     <Route exact path = "/week_plan" component = {PlanningFood} />
                     <Route exact path = "/mykitchen" component = {MyKitchen} />
                     <Route exact path = "/mykitchen/myfavorites" component = {MyFavorites} />
                     <Route exact path = "/mykitchen/myrecipes" component = {MyRecipes} />
                     <Route exact path = "/irecipe" component = {EntryRecipe} />
                     <Route exact path = "/crecipe" component = {ChangeRecipe} />
                 </Switch>
             </div>   
             
            )
        }
}

export default App