import React from 'react'


class MyRecipesContent extends React.Component{
        render(){
            return(
          <div id = "myrecontent">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title text center">
                    <a href="#">Pollo al vapor</a>
                  </h4>
                  <h5>Info util de cabecera</h5>
                  <p className="card-text">Descripción breve de la receta que demuestra explicación de la misma</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Pizza hawaiana</a>
                    </h4>
                  <h5>Fácil</h5>
                  <p className="card-text">La pizza debe ser realizada de manera rápida y económica </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Salmón al ajillo</a>
                  </h4>
                  <h5>Dificultad media</h5>
                  <p className="card-text">El salmón debe ser crudo para de esta manera poder agregar los ingredientes conforme se avanza</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Four</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Five</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item Six</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>
                    
           </div>
          </div>

            )
        }
}

export default MyRecipesContent