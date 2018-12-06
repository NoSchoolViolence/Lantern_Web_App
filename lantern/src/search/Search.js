import React, { Component } from 'react';


class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Enter the behaviors you noticed',
      tasks: []
    }
  
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.task = this.task.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
    //event.target.name(event)
  }
  task(event) {
    this.setState({task:event.target.value})
  }
  addTask(event) {
    if (!this.state.task) return
    const tasks = this.state.tasks
    tasks.push(this.state.task)
    this.setState({tasks:tasks, task:''})
  }
  removeTask(index, event) {
    const tasks = this.state.tasks
    tasks.splice(index, 1)    
    this.setState({tasks})
  }
  render(){
    const tasks = (this.state.tasks).map((task,index)=>(
      <li>
        {task} <button name="removeTask" onClick={event=>this.removeTask(index,event)}>x</button>
      </li>
    ))
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          
          <div>
            <form  onSubmit={this.handleSubmit}>
              <input value={this.state.task} onChange={this.task}/>
              <button type="add" onClick={this.addTask}>Add</button>
            </form>
          </div>
          <ul>
            {tasks}
            {
              this.state.task &&
              <li>{this.state.task}</li>
            }
          </ul>
        </div>
      </div>
    )
  }
 /*  constructor(props) {
    super(props);
    this.state={
      todos:[],
      count: 0,
    };

    this.removeString = this.removeString.bind(this);
    this.save = this.save.bind(this);
    this.handleClickIndex = this.handleClickIndex.bind(this);
  }

 
  
  save(e) {
  
    if(e.keyCode === 13){
    var count = this.state.count + 1;
    this.setState({count:count});
    var item = {value: this.newText.value}

    var todos = [...this.state.todos];
    todos.push(item);
    this.setState({todos: todos});
    
    // Resets the textbox after "enter"
    this.newText.value ="";
    }

    
    
  }

  removeString(key) {
    //var todos = [...this.state.todos];

    
    
    //todos.splice( todos.indexOf(todo), 1 );
    /* var groupKey =  todo.groupKey;
    if (todos.hasOwnProperty(groupKey)){
      todos.pop();
    } 
    
   this.setState({todos:this.state.todos.filter((key, _) => key !== key)});
  }

 /*  removeString(key, value){
    
   
  }  



  submit(e){



  }

  handleClickIndex(index, event){
    eval(this[event.target.name]).bind(this)(index, event)
  }
  
  removeTask(index, event) {
    const tasks = this.state.todos
    tasks.splice(index, 1)    
    this.setState({todos:tasks})
  }

  render(){
      return(
          <div className="list">
            <h1> TO-DO List</h1>
            <input type="text" ref={(ip) => {this.newText = ip}} onKeyDown={this.save}/>
            <button  name="removeTask" onClick={this.submit.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
            </button>
            <ul>
              {this.state.todos.map((value, index) => {
                    return <button key = {index} onClick={(e) => this.removeTask.bind(this, index)} className="btn btn-primary glyphicon glyphicon-floppy-saved">{value}</button>
               })}
              
            </ul> 
          </div>
      )
  }
 */
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