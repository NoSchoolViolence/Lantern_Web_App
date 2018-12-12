import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Results from '../results/results';
import ROUTES from "../routes";


class Search extends Component {
  constructor(props){
    super(props)

    // list "terms" holds all entered search terms, except for the ones that are removed
    // "name" is to hold the label for directions
    this.state = {
      name: 'Enter you noticed',
      terms: [],
      showComponentResults: false,
      showComponentTerms: true
    }
  
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addTerm = this.addTerm.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.term = this.term.bind(this);
    this.submitPage = this.submitPage.bind(this);
  
  }

  // this function is to clear the default behavior of "form" component
  handleSubmit(event){
    event.preventDefault()
    //event.target.name(event)
  }

  // this function is to set the state for state variable "term" with the entered value in the text field
  term(event) {
    this.setState({term:event.target.value})
  }

  // this function is to add the entered term into the list "terms"
  addTerm(event) {
    if (!this.state.term) return
    const terms = this.state.terms
    terms.push(this.state.term)
    this.setState({terms:terms, term:''})
  }

  // this function is to remove a term from the list "terms"
  removeTerm(index, event) {
    const terms = this.state.terms
    terms.splice(index, 1)    
    this.setState({terms})
  }

  submitPage(){
    this.setState({
      showComponentResults: true,
      showComponentTerms: false
    });
   //return <Results data={this.state.terms} />;
  }



  render(){
    const terms = (this.state.terms).map((term,index)=>(
      <Col sm={3}>
        {term} <button name="remove" onClick={event=>this.removeTerm(index,event)}>x</button>
      </Col>
    ))


    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          
          <div>
            <form  onSubmit={this.handleSubmit}>
              <input value={this.state.term} onChange={this.term}/>
              <button type="add" onClick={this.addTerm}>Add</button>
              <div>
              <button type="submit" onClick={this.submitPage}>Submit</button>
              {this.state.showComponentResults ?
                <Results data={this.state.terms} />:
                null
              }
              </div>
            </form>
          </div>
            <Container>
            <Row>
            {this.state.showComponentTerms ? terms : null}
            
              {this.state.showComponentTerms ? this.state.term && this.state.term : null}
            </Row>
            </Container>
            
        </div>
        
      </div>
    )
  }
}

export default Search;