import React from 'react'

class Imagen extends React.Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
        
    }
    fileUploadHeandler = () =>{

    }
    render() {
        return (
            <div className= "Imag">
                <input type = "file" onChange={this.fileSelectedHandler}></input>
                <button onClick={this.fileUploadHeadler}>Subir</button>
            </div>
            
        )
    }
}

export default Imagen