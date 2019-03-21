import React, {Component} from 'react'
import {Button} from '@material-ui/core'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            h1: "Bienvenido",
            h2: "Weather App",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange =()=>{
        if(this.state.h1==="Bienvenido"){
            this.setState = {
                h1: "Weather App"
            }
        }else{
            this.setState ={
                h1: "Bienvenido"
            }
        }

        if(this.state.h2==="Weather App"){
            this.setState ={
                h2: "Bievenido"
            }
        }else{
            this.setState ={
                h2:"Weather App"
            }
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.h1}</h1>
                <pr/>
                <h1>{this.state.h2}</h1>
                <pr/>
                <button onClick={this.handleChange}> Intercalar </button>
            </div>
        )
    }
}

export default Home;