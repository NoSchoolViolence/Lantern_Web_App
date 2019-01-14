import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Results from '../results/results';
import dataTerms from '../data/terms';

class Search extends Component {
  constructor(props){
    super(props)

    // list "terms" holds all entered search terms, except for the ones that are removed
    // "name" is to hold the label for directions
    this.state = {
      name: 'Enter the behaviors you noticed',
      terms: [],
      showComponentResults: false,
      showComponentTerms: true
    }
  
    
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.addTerm = this.addTerm.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.term = this.term.bind(this);  
  }

  // this function is to set the state for state variable "term" with the entered value in the text field
  term(event) {
    this.setState({ term: event.target.value })
  }

  // this function is to add the entered term into the list "terms"
  addTerm(event) {
    event.preventDefault();
    if (!this.state.term) return
    const loweredTerm = this.state.term.toLowerCase().trim();

    // To check if the entered term exists in our database.

    if (!dataTerms.includes(loweredTerm)) {
      alert('that term does not exist in our database');
      event.target[0].value = '';
      return;
    }

    // resetting the state to inclues the new array of terms to display from.

    const terms = this.state.terms;
    terms.push(loweredTerm);
    this.setState({
      terms:terms,
      term:'',
      showComponentResults: true
      })
  }

  // this function is to remove a term from the list "terms"
  removeTerm(index, event) {
    const terms = this.state.terms
    terms.splice(index, 1)    
    this.setState({terms})
  }
  

  render(){
    const terms = (this.state.terms).map((term,index)=>(
      <Col sm={3} key={index}>
        {term} <button name="remove" onClick={ event => this.removeTerm(index, event) }>x</button>
      </Col>
    ))


    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          
          <div>
            <form onSubmit={this.addTerm}>
              <input value={this.state.term} onChange={this.term}/>
              <button type="add">Add</button>
            </form>
            {/* Displays Terms */}
            
            <Container>
            <Row>
            {this.state.showComponentTerms ? terms : null}
            
              {this.state.showComponentTerms ? this.state.term && this.state.term : null}
            </Row>
            </Container>
            
            {/* Displays Results */}
            {this.state.showComponentResults ? <Results terms={this.state.terms.join(', ')} /> : null}
          </div>
            
        </div>
        
      </div>
    )
  }
}

export default Search;