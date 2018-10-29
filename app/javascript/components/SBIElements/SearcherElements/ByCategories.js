import React from 'react';
import Select from 'react-select';


class ByCategories extends React.Component{
 
      render() {
        const Vegetables = [
          { label: "Espinaca", value: 1 },
          { label: "Arveja", value: 2 },
          { label: "Maíz", value: 3 },
          { label: "Apio", value: 4 },
          { label: "Zanahoria", value: 5 },
          { label: "Tomate", value: 6 },
        ]
        const Carnes = [
          { label: "Lomo de cerdo", value: 1 },
          { label: "Milanesa", value: 2 },
          { label: "Pata", value: 3 },
          { label: "Mojarra", value: 4 },
          { label: "Bagre", value: 5 },
          { label: "Alas de pollo", value: 6 },
        ]
        const Especias = [
          { label: "Sal", value: 1 },
          { label: "Azucar", value: 2 },
          { label: "Pimienta", value: 3 },
          { label: "Color", value: 4 },
          { label: "Laurel", value: 5 },
          { label: "Tomillo", value: 6 },
        ]
        const Frutas = [
          { label: "Fresa", value: 1 },
          { label: "Pera", value: 2 },
          { label: "Piña", value: 3 },
          { label: "Mango", value: 4 },
          { label: "Feijoa", value: 5 },
          { label: "Níspero", value: 6 },
        ]
        const Carbohidratos = [
          { label: "Arroz", value: 1 },
          { label: "Pasta", value: 2 },
          { label: "Papa", value: 3 },
          { label: "Yuca", value: 4 },
          { label: "Plátano", value: 5 },
          { label: "Batata", value: 6 },
        ]
        const Endulzantes = [
          { label: "Azucar", value: 1 },
          { label: "Miel", value: 2 },
          { label: "Azucar morena", value: 3 },
          { label: "Stevia", value: 4 },
          { label: "Nectar de agave", value: 5 },
        ]
        const Condimentos = [
          { label: "Ketchup", value: 1 },
          { label: "Mayonesa", value: 2 },
          { label: "Mostaza", value: 3 },
          { label: "Vinagre", value: 4 },
          { label: "Salsa BBQ", value: 5 },
        ]
        const Aceites = [
          { label: "Aceite de oliva", value: 1 },
          { label: "Aceite de coco", value: 2 },
          { label: "Aceite de almendras", value: 3 },
          { label: "Agua de rosas", value: 4 },
          { label: "Sidra de manzana", value: 5 },
        ]
        const Salsas = [
          { label: "Salsa de tomate", value: 1 },
          { label: "Pasta de tomate", value: 2 },
          { label: "Pesto", value: 3 },
        ]
        const Legumbres = [
          { label: "Lenteja", value: 1 },
          { label: "Frijol", value: 2 },
          { label: "Garbanzo", value: 3 },
          { label: "Hummus", value: 4 },
          { label: "Guisantes", value: 5 },
        ]
        const Alcohol = [
          { label: "Vino blanco", value: 1 },
          { label: "Cerveza", value: 2 },
          { label: "Champaña", value: 3 },
          { label: "Vino tinto", value: 4 },
          { label: "Brandy", value: 5 },
        ]

        return (
        <div>
         <div id = "de" class = "container-fluid">
          <h6>Vegetales</h6>   
          </div>
          <div>
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  name="colors"
                  options={Vegetables}
                  className="basic-multi-select"
                  classNamePrefix="select"
              />
          </div>
        <div id = "de" class = "container-fluid">
          <h6 >Carnes</h6> 
        </div>  
              <div>
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Carnes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div> 
         <div id = "de" class = "container-fluid">
            <h6>Especias</h6>  
         </div>    
            <div>
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Especias}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div> 
          <div id = "de" class = "container-fluid">
            <h6  >Frutas</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Frutas}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Carbohidratos</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Carbohidratos}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Endulzantes</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Endulzantes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Condimentos</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Condimentos}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Aceites</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Aceites}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Salsas</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Salsas}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>  
            <div id = "de" class = "container-fluid">
            <h6  >Legumbres</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Legumbres}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>    
            <div id = "de" class = "container-fluid">
            <h6  >Alcohol</h6>     
          </div>
            <div id = "selec">
                 <Select
                    isMulti
                    closeMenuOnSelect={false}
                    name="colors"
                    options={Alcohol}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
            <div>.</div>
          </div>    
        );
      }
    }

export default ByCategories 