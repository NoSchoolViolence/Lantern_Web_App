import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state={todos:[]};
  }
  
  save(e) {
    if(e.keyCode === 13){
    var todos = [...this.state.todos];
    todos.push(this.newText.value);
    this.setState({todos});
    }
  }

  render(){
      return(
          <div className="list">
            <h1> TO-DO List</h1>
            <input type="text" ref={(ip) => {this.newText = ip}} onKeyDown={this.save.bind(this)}/>
            <button onClick={this.save.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
            </button>
            <ul>
              {this.state.todos.map(function(todo) {
                    return <li>{todo}</li>
               })}
              
            </ul>
          </div>
      )
  }

/*   getInitialState(){
    return {
      todos: []
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {value:''}

    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  } 

  save() {
    var todos = [...this.state.todos];
    todos.push(this.state.value);
    console.log(todos)
    this.setState({todos});
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  /* keyPress(e){
    if(e.keyCode === 13){
      this.save()
      console.log('value', e.target.value);
      // put the login here
    }
  } */

  /* render() {
    return (
      <div className="App">
        <form>
          <label>
            Enter comma separated behavior terms: 
              <br/>
              <input type="text" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} name="search" fullWidth={true}/>
          </label>
          <br/> 
          <input type="submit" value="Search" />
          
          
          <input
            name="Public"
            type="checkbox"
          />Public
        </form>
      </div>
    );  
  } */
}

export default Search;