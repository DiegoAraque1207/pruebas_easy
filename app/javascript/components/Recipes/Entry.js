import React from 'react'


import Select from 'react-select';
import Modal from 'react-modal';



const scaryAnimals = [
  { label: "Tomate", value: 1 },
  { label: "Pechuga", value: 2 },
  { label: "Papas", value: 3 },
  { label: "Arroz", value: 4 },
  { label: "Zanahoria", value: 5 },
  { label: "Carne de res", value: 6 },
];

const medidas = [
    {label: "1/16", value: 0.0625},
    {label: "1/8", value: 0.125},
    {label: "1/4", value: 0.25},
    {label: "1/2", value: 0.5},
    {label: "1", value: 1},
    {label: "2", value: 2},
    {label: "3", value: 3},
    {label: "4", value: 3},
    {label: "5", value: 5},
    {label: "6", value: 6},
    {label: "7", value: 7},
    {label: "8", value: 8},
    {label: "9", value: 9},
    {label: "10", value: 10},
    {label: "11", value: 11},
    {label: "12", value: 12},
    {label: "13", value: 13},
    {label: "14", value: 14},
    {label: "15", value: 15},
    {label: "16", value: 16},
    {label: "17", value: 17},
    {label: "18", value: 18},
    {label: "19", value: 19},
    {label: "20", value: 20},
];

var listt = [];
var ident = 0, ingre ="", medi="", cantid =""
var data = {ident, ingre, medi, cantid}
var id = 0;

function logChange_in(val) {
    data.ingre = val.label
}

function logChange_me(val) {
    data.cantid = val.label
}

function logChange_can() {
    if (document.getElementById("canti") != null){
        data.medi = document.getElementById("canti").value; 
    }
}

function logChange_id() {
    data.ident = data.ident + 1;
    listt.push(data)
    data = null
    console.log("datos  ",listt)
    data = {ident, ingre, medi, cantid}
}


class App extends React.Component{
    state = {
        selectedOption: "",
        selectedOption_me: "",
        lod: 0,
    }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        logChange_in(selectedOption);       
      }
      handleChange_me = (selectedOption) => {
        this.setState({ selectedOption });
        logChange_me(selectedOption);       
      }

      opinionSalud = () => {
        console.log("hola gente")
        return;
      }

    

    render(){

        const { selectedOption } = this.state.selectedOption;
        const { selectedOption_me } = this.state.selectedOption_me;

        return(
            <div className="app">
                <div className="container" id="cont">
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="sel1" id="select_ingredient">Ingrediente:</label>
                            <Select value={selectedOption} options={scaryAnimals} onChange={this.handleChange} id="sel_ingre" />
                        </div>
                            
                        <div className="col-sm-6">
                            <label htmlFor="Cantidad" id="catidad_label">Cantidad:</label>    
                            <Select value={selectedOption_me} options={medidas} onChange={this.handleChange_me} id="sel_cant"/>
                        </div>                        
                        <TablaIngredientes datas={data} id="tabla_ingre" />
                    </div>               
                </div>
            </div>
        )
    }
}
    
class TablaIngredientes extends React.Component{

    constructor(props) {
        super(props);
        this.state = {registros: []};
        this.someMethod = this.someMethod.bind(this)
        this.otherMethod = this.otherMethod.bind(this)
      }
    
    someMethod() {
       this.otherMethod()
       
    }

    otherMethod() {
        console.log(data)
        if(data.ingre == "" &&  data.cantid == "" && data.ident == ""){
            alert("Por favor ingrese todos los campos")
        }else{
            this.setState({ registros:  this.state.registros.concat([this.props.datas]) });
            document.getElementById("canti").value =""           
            logChange_id();            
        }        
    }

    render(){

    return(
        <div className="container">
            <div className="row" id="tabla_i">
                <div className="col-sm-4" id="label_button">   
                    <div className="row">
                        <label htmlFor="sel2" id="select_medida">Medida:</label>
                    </div>
                    <div className="row">
                        <input type="text" className="quantity" id="canti" size="10" onChange={logChange_can}/>
                    </div>
                    <div className="row" id="btn-agregar">
                        <button type="button" className="btn btn-primary" onClick = {this.someMethod} >Agregar</button>
                    </div>
                </div>   

                <div className="col-sm-8" id="tabla">  
                    <table className = "table" >
                        <thead id ="cabeza_t">
                            <tr>
                                <th id = "font" scope="col">Ingrediente</th>
                                <th id = "font" scope="col">Cantidad</th>
                                <th id = "font" scope="col">Medida</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <Columns/>
                    </tbody>
                    </table>            
                </div>
            </div>
        </div>
        )
    }
    
}

class Columns extends React.Component{
    render(){
        const lista = listt.map((dato, id) => 
        <tr key= {id}>
        <td id = "font_i">{dato.ingre}</td>
        <td id = "font_i">{dato.cantid}</td>
        <td id = "font_i">{dato.medi}</td>
        <td>
        <button onClick={()=> alert('Eliminar?') } className="btn btn-primary" id="btn_usar">Del</button>
        </td>
        </tr>
        )
        return (lista)
    }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#main')
 
class Contenedor extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    this.setState({modalIsOpen: true})
}

  openModal() {
    this.setState({modalIsOpen: true});
    
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'lightseagreen';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Aqui</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        //   contentLabel="Example Modal"
        ariaHideApp={false}

        >
            <h2 ref={subtitle => this.subtitle = subtitle}>Ingresa los ingredientes</h2>
               
            <div className="container">
                <App/>
            </div>
            <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}


class Entry extends React.Component {
 
    render() {
        return (
            <div className="container" id="root">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-ingresodat">
                            <div className="card-body">
                                <h3 className="card-title text-center  text-white"><strong>Agrega tu receta</strong></h3>
                                <form>
                                    <div className="form-group text-white">
                                        <label htmlFor="exampleFormControlInput1">Dale un nombre</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""></input>
                                    </div>
                                    <div className="form-group text-white">
                                        <   div className="form-row">
                                            <div className="form-group text-white col-md-6">
                                                <label htmlFor="exampleFormControlInput1">Selecciona los ingredientes</label>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <Contenedor/>
                                            </div>
                                        </div>                              
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group text-white col-md-3">
                                            <label htmlFor="inputDiners">Número de comensales</label>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <select defaultValue="Select" id="inputDiners" className="form-control">
                                                <option defaultValue></option>
                                                <option value="1">2</option>
                                                <option value="2">4</option>
                                                <option value="3">6</option>
                                                <option value="4">8</option>
                                            </select>
                                        </div>
                                        <div className="form-group text-white col-md-3">
                                            <label htmlFor="inputTime">Tiempo de coccion</label>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <select defaultValue="Select" id="inputTime" className="form-control">
                                                <option defaultValue></option>
                                                <option value="1">15 minutos</option>
                                                <option value="2">20 minutos</option>
                                                <option value="3">30 minutos</option>
                                                <option value="4">40 minutos</option>
                                                <option value="5">45 minutos</option>
                                                <option value="6">50 minutos</option>
                                                <option value="7">60 minutos</option>
                                                <option value="8">75 minutos</option>
                                                <option value="9">90 minutos</option>
                                                <option value="10">95 minutos</option>
                                                <option value="11">120 minutos</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group text-white">
                                        <label htmlFor="exampleFormControlTextarea1">Ingresa la receta:</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                                    </div>
                                    <div className="form-group text-white">
                                        <label htmlFor="exampleFormControlTextarea1">Recomienda una guarnicion</label>
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
                                <label htmlFor="exampleFormControlFile1"></label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                            </div>
                        </form>
                        <div className="btnsubir text-right ">
                            <button type="button" className="btn btn-subir btn-lg text-uppercase">Subir receta</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Entry