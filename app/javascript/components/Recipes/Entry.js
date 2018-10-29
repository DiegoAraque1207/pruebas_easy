import React from 'react'



class Entry extends React.Component {

    subirReceta(){

        var nombre_receta = document.getElementById("exampleFormControlInput1").value
        var receta = document.getElementById("exampleFormControlTextarea1").value
        var guarnicion =  document.getElementById("exampleFormControlTextarea1").value
        var num_comensales = document.getElementById("inputDiners").value
        var tiempo =document.getElementById("inputTime").value*15


        if(nombre_receta=="", receta==""){
            alert("Dale un nombre a receta y describela")}
        else{alert(nombre_receta)

            fetch(`/recipes`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({nombre: nombre_receta, receta: receta, guaricion: guarnicion, num_comensales: num_comensales, tiempo: tiempo})
            }).then(() =>location.href="/mykitchen/myrecipes");

        }



    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-ingresodat">
                            <div className="card-body">
                                <h3 className="card-title text-center  text-white"><strong>Agrega tu receta</strong></h3>
                                <form>
                                    <div className="form-group text-white">
                                        <label for="exampleFormControlInput1">Dale un nombre</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                                    </div>
                                    <div className="form-group text-white">
                                        <   div className="form-row">
                                            <div className="form-group text-white col-md-6">
                                                <label for="exampleFormControlInput1">Selecciona los ingredientes</label>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <a className="ingred text-left text-white mt-2" href="/input_ingredients" target="_self"><strong>aqui</strong></a>
                                            </div>
                                        </div>                              
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group text-white col-md-3">
                                            <label for="inputDiners">Número de comensales</label>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <select id="inputDiners" className="form-control">
                                                <option selected></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="form-group text-white col-md-3">
                                            <label for="inputTime">Tiempo de coccion</label>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <select id="inputTime" className="form-control">
                                                <option selected></option>
                                                <option value="1">15 minutos</option>
                                                <option value="2">30 minutos</option>
                                                <option value="3">45 minutos</option>
                                                <option value="4">60 minutos</option>
                                                <option value="5">75 minutos</option>
                                                <option value="6">90 minutos</option>
                                                <option value="7">105 minutos</option>
                                                <option value="8">120 minutos</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group text-white">
                                        <label for="exampleFormControlTextarea1">Ingresa la receta:</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                    </div>
                                    <div className="form-group text-white">
                                        <label for="exampleFormControlTextarea1">Recomienda una guarnicion</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card card-ingresoim">
                            <div className="card-body text-center">
                                
                            </div>

                        </div>

                        <form>
                            <div className="form-group text-center">
                                <label for="exampleFormControlFile1"></label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                            </div>
                        </form>
                        <div className="btnsubir text-right ">
                            <button type="button" className="btn btn-subir btn-lg text-uppercase" onClick={this.subirReceta}>Subir receta</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Entry