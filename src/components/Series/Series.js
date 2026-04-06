import React, { Component } from 'react';
import Serie from '../Serie/Serie'

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            cantidad: 4 
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=3f1682dada002836e815351506ac3816")
            .then(res => res.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(err => console.log(err));
    }

    cargarMas() {
        this.setState({
            cantidad: this.state.cantidad + 4
        });
    }

    render(){
        return(
            <>
                <h2 className="alert alert-primary">Series</h2>
                <section className="row cards" id="movies">
                        {this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.filter((serie, idx) => idx < this.state.cantidad).map((serie) => (<Serie key={serie.id} data={serie} />))}
                </section>
               <button className="btn-ver-todas" onClick={() => this.cargarMas()}>Cargar más</button>
            </>
        )
    }
}

export default Series;