import React from 'react'

class PrepSteps extends React.Component{
        render(){
            return(
                <div className="wrapper">
                    <div className="form-group">
                      <label for="comment">Pasos de preparación:</label>
                     <textarea className="form-control" rows="5" id="comment"></textarea>
                    </div>
                    </div>
            )
        }
}

export default PrepSteps