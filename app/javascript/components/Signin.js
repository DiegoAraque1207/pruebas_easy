import React from 'react'

class Signin extends React.Component {
    /*Para enviar  los datos se debe crear un state en el cual se guardan las variables.
    al cambiar estas variables con el metodo set state se reenderiza automaticamente el componente
    el metodo constructor tambien se debe crear si o si*/
    state = {
        mensaje: "prueba",
        id: 0
    }
    constructor(props) {
        super(props)

        this.listenerSignIn = this.listenerSignIn.bind(this)
    }
    /*este metodo es el que realiza el envio del payload (los parametros que se envia al controlador)
    se debe seguir esta sitaxis)*/
    listenerSignIn(e) {
        if (document.getElementById("inputEmail") != null && document.getElementById("inputPassword") != null) {
            const payload = { email: document.getElementById("inputEmail").value, pass: document.getElementById("inputPassword").value }
            fetch(`sign_in`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
                .then(resp => resp.json())
                .then(data => this.setState(data))
                .then(() => alert(this.state.mensaje))
                .then(() => this.to_kitchen())
            //alert("4 segundos");
            setTimeout(console.log("4 segundos?"),4000);

        }}


to_kitchen(){
    if(this.state.id==true){location.href="MyKitchen";}
}
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card card-login">
                        <div className="card-body">
                            <div className="header-login">
                                <div className="logo">
                                    <img src="https://image.flaticon.com/icons/svg/911/911176.svg" width="80" height="80"></img>
                                </div>
                                <div className="titulo">
                                    <h1><strong>EasyCooking</strong></h1>
                                </div>
                            </div>
                            <h5 className="card-title text-center">Login</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                                    <label htmlFor="inputEmail">Correo</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                                    <label htmlFor="inputPassword">Contraseña</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                    <label className="custom-control-label" htmlFor="customCheck1">Recordar contraseña</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.listenerSignIn}>Iniciar Sesion</button>
                                <hr className="my-4"></hr>
                                <div className="redes">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fa fa-google-plus mr-2"></i>Google</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fa fa-facebook-f mr-2"></i>Facebook</button>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4"></hr>
                                <h6 className="opcion text-center">Si no tienes cuenta</h6>
                                <a className="d-block text-center mt-2 small" href="/sign_up" target="_self">Registrate</a>
                            </form>
                        </div>





                    </div>

                </div>
            </div>
        )
    }
}

export default Signin