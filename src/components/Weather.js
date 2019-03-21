import React, {Component} from 'react'

class Weather extends Component{
    constructor(props){
        super(props);
        this.state = {
            weatherItems: [{month:'March', day:'20', max: '38', min: '18'}, {month:'March', day:'21', max: '30', min: '20'}, {month:'March', day:'22', max: '33', min: '17'}, {month:'March', day:'23', max: '31', min: '19'}]
        }
    }

      printDetails = () =>{
        //aqui deberia acceder a los parametros, y llamar a la action para dispararla e imprimir max y min
    }
}

export default Weather;
