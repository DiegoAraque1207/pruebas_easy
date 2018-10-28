import React from 'react'
import FooterPage from './Structure/Footerpage'


 class Signup extends React.Component{


    state = {
        mensaje: "",
        id: 0
    }
    constructor(props) {
        super(props)

        this.listenerSignUp = this.listenerSignUp.bind(this)
    }
    listenerSignUp(e){

        if (document.getElementById("inputPassword").value != document.getElementById("inputConfirmPassword").value ){
            alert("la contraseña no coincide")}

        else{


        if (document.getElementById("inputUserame") != null && document.getElementById("inputEmail") != null && document.getElementById("inputPassword") != null){
            const payload = { user: document.getElementById("inputUserame").value, email: document.getElementById("inputEmail").value, pass: document.getElementById("inputPassword").value }

            //alert(document.getElementById("inputEmail").value);
            fetch(`interface/sign_up`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            })
                .then(resp => resp.json())
                .then(data => this.setState(data))
                  //.catch(_ => alert( "Error en el proceso" ))
                .then(() => alert(this.state.mensaje))
                .then(() => console.log(this.state.mensaje))

            return;

        }}
    }


    render(){ return(
                <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-signin flex-row my-5">
                      <div className="card-img-left d-none d-md-flex">
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">Regístrate</h5>
                        <form className="form-signin">
                          <div className="form-label-group">
                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus></input>
                            <label for="inputUserame">Usuario</label>
                          </div>     
                          <div className="form-label-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required></input>
                            <label for="inputEmail">Email </label>
                          </div>            
                          <div className="form-label-group">
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                            <label for="inputPassword">Contraseña</label>
                          </div>                          
                          <div className="form-label-group">
                            <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required></input>
                            <label for="inputConfirmPassword">Confirmar contraseña</label>
                          </div>
            
                          <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.listenerSignUp} > >Registrarme</button>
                          <a className="d-block text-center mt-2 small" href="/sign_in" target="_self">Iniciar sesión</a>
                          <hr className="my-4"></hr>
                          <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Registrarme con Google</button>
                          <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Registrarme con Facebook</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <FooterPage/>
              </div>
            )
        }
}

export default Signup