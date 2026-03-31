import React, { Component } from "react"

class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos : [],
        }
    }
        componentDidMount(){
        fetch("https://api.themoviedb.org/3/trending/movie/{time_window}")
            .then(response => response.json())
            .then(data=> this.setState(
                {datos:data.results}
            ))
            .catch(error => console.log(error))
    }

    render(){
        return(
            <>
           <section>
            <h1>Peliculas Populares</h1>
            
           </section>
           </>
        )
    }
}