import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './list';
import Selected from './selected';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pokemon: {},
        selected: false
    };

    this.setPokemon = this.setPokemon.bind(this);
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  setPokemon(data) {
    this.setState({pokemon: data});
  }

  selectPokemon(url) {
    axios.get(url)
        .then(data => {
            this.setState({selected: data.data });
        })
        .catch(err => {
            console.err(err);
        });
  }

  render() {
    return (
        <div>
            Pokemon
            <PokemonList 
                source={this.state.pokemon.results} 
                handleClick={this.selectPokemon} />
            { this.state.selected 
                ? <Selected pokemon={this.state.selected} /> 
                : '' 
            }
        </div>
    ); 
  }

  componentDidMount() {
    axios.get(`http://pokeapi.co/api/v2/pokemon/`)
        .then(data => {
            this.setPokemon(data.data);
        })
        .catch(err => {
            console.err(err);
        })
  }
}

export default Pokemon;
