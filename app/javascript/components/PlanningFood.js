import React from 'react'
import Header from './Structure/Header';
import { Button } from '@material-ui/core';

class contenedor extends React.Component{
    render(){

        return(
            <div class="container">
                <h2>Large Modal</h2>
                {/*<!-- Trigger the modal with a button -->*/}
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Large Modal</button>

                {/*<!-- Modal -->*/}
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                        <p>This is a large modal.</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}



class PlanningFood extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cont: Array(7).fill(0),
            lunes: [],
            martes: [],
            miercoles: [],
            jueves: [],
            viernes: [],
            sabado: [],
            domingo: [] };
      }
    renderLista(i, card, num) {
        return <Listas value={i} list={card} ident={num} onClick={() => this.handleClick(i)} />;
      }
    handleClick(val){
        var lista =""
        var temp
        var arr = []
        switch (val){
            case "Lunes":
            if(this.state.cont[0] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.lunes
                temp = {lista: "nueva receta", val: this.state.cont[0] + 1}
                arr.push(temp)
                this.setState({lunes: arr });
                arr = this.state.cont
                arr[0] = this.state.cont[0] + 1
                this.setState({cont: arr })
            break;

            case "Martes":  
            if(this.state.cont[1] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.martes
                temp = {lista: "nueva receta", val: this.state.cont[1] + 1}
                arr.push(temp)
                this.setState({martes: arr });
                arr = this.state.cont
                arr[1] = this.state.cont[1] + 1
                this.setState({cont: arr })
            break;
            case "Miercoles":
            if(this.state.cont[2] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.miercoles
                temp = {lista: "nueva receta", val: this.state.cont[2] + 1}
                arr.push(temp)
                this.setState({miercoles: arr });
                arr = this.state.cont
                arr[2] = this.state.cont[2] + 1
                this.setState({cont: arr })
            break;
            case "Jueves":
            if(this.state.cont[3] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.jueves
                temp = {lista: "nueva receta", val: this.state.cont[3] + 1}
                arr.push(temp)
                this.setState({jueves: arr });
                arr = this.state.cont
                arr[3] = this.state.cont[3] + 1
                this.setState({cont: arr })
            break;
            case "Viernes":
            if(this.state.cont[4] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.viernes
                temp = {lista: "nueva receta", val: this.state.cont[4] + 1}
                arr.push(temp)
                this.setState({viernes: arr });
                arr = this.state.cont
                arr[4] = this.state.cont[4] + 1
                this.setState({cont: arr })
            break;
            case "Sabado":
            if(this.state.cont[5] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.sabado
                temp = {lista: "nueva receta", val: this.state.cont[5] + 1}
                arr.push(temp)
                this.setState({sabado: arr });
                arr = this.state.cont
                arr[5] = this.state.cont[5] + 1
                this.setState({cont: arr })
            break;
            case "Domingo":
            if(this.state.cont[6] == 20){
                alert("maximo de recetas")
                break;
            }
                arr = this.state.domingo
                temp = {lista: "nueva receta", val: this.state.cont[6] + 1}
                arr.push(temp)
                this.setState({domingo: arr });
                arr = this.state.cont
                arr[6] = this.state.cont[6] + 1
                this.setState({cont: arr })
            break;
        }
        return
    }
    render() {
        
        return (
            <div>
                <div>
                    <Header/>
                </div>                
                <div className="col-sm-12" id="board">
                    {this.renderLista("Lunes", this.state.lunes, 0)}
                    {this.renderLista("Martes", this.state.martes)}
                    {this.renderLista("Miercoles", this.state.miercoles)}
                    {this.renderLista("Jueves", this.state.jueves)}
                    {this.renderLista("Viernes", this.state.viernes)}
                    {this.renderLista("Sabado", this.state.sabado)}
                    {this.renderLista("Domingo", this.state.domingo)}
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 " >
                            <button onClick={() => alert("creando pdf (mensaje de prueba)")}>Generar lista de compras</button>
                        </div>
                    </div>
                </div>
            </div>

        )
      } 
}

class Listas extends React.Component{
    rederTarjetas(val, idd){
        return <Tarjetas cards = {val} ide={idd}/>;
    }
    render() {
        return (
            <div id="coll" align="center">{this.props.value}
                <div>
                    {this.rederTarjetas(this.props.list, this.props.ident)}
                </div>
                <div>
                    <button onClick = {this.props.onClick} >Agregar</button>
                </div>    
            </div>
        )
    }
}

class Tarjetas extends React.Component{
    constructor(props) {
        super(props);
        this.state = {tarjetas: [], count: 0};
      }
    nose(temp){
        const lista = temp.map((dato) =>{
            return(
                <div key={dato.val} id="tarjeta" > {dato.lista} 
            
                </div>
            );
        });
        
        return lista;
    }

    render(){
        
        return (
            <div>
                {this.nose(this.props.cards)}
            </div>
            )
    }
}

export default PlanningFood