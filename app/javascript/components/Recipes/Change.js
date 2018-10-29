import React from 'react'

class Change extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card card-ingresodat">
                            <div class="card-body">
                                <h3 class="card-title text-center  text-white"><strong>Mejora tu receta</strong></h3>
                                <form>
                                    <div class="form-group text-white">
                                        <label for="exampleFormControlInput1">Cambiar nombre</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
                                    </div>
                                    <div class="form-group text-white">
                                        <   div class="form-row">
                                            <div class="form-group text-white col-md-5">
                                                <label for="exampleFormControlInput1">Cambia los ingredientes</label>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <a class="ingred text-left text-white mt-2" href="/input_ingredients" target="_self"><strong>aqui</strong></a>
                                            </div>
                                        </div>                              
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group text-white col-md-3">
                                            <label for="inputDiners">Número de comensales</label>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <select id="inputDiners" class="form-control">
                                                <option selected></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div class="form-group text-white col-md-3">
                                            <label for="inputTime">Tiempo de coccion</label>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <select id="inputTime" class="form-control">
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
                                    <div class="form-group text-white">
                                        <label for="exampleFormControlTextarea1">Mejora la receta:</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                    </div>
                                    <div class="form-group text-white">
                                        <label for="exampleFormControlTextarea1">Recomienda una mejor guarnicion</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card card-ingresoim">
                            <div class="card-body text-center">
                                
                            </div>

                        </div>

                        <form>
                            <div class="form-group text-center">
                                <label for="exampleFormControlFile1"></label>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                            </div>
                        </form>
                        <div class="btnsubir text-right ">
                            <button type="button" class="btn btn-subir btn-lg text-uppercase">Subir receta</button>
                            <button type="button" className="btn btn-subir btn-lg text-uppercase">Eliminar receta</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Change