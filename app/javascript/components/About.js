import React from 'react'
import FooterPage from './Structure/Footerpage'
import Searcher from './SBIElements/Searcher'


class About extends React.Component{
        render(){
            return(
                <div className= "wrapper">
                    <Searcher/>
                    <FooterPage/>
                </div>            
            )
        }
}

export default About