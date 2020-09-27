import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Todos from "./component/Todos";
import Header from "./component/header/Header";
import About from "./component/pages/About";
import AddTodo from './component/AddTodo';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }))
  }
  //marking a string
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //deleting item
  todoDelete = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      }));


  }

  //addtodo
  AddTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

  }

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  todoDelete={this.todoDelete} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
