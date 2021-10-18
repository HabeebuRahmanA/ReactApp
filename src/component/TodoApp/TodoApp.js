import React, { Component } from "react";
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });

    console.log(this.state.input);
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;
    allItems.push(input);
    this.setState({ items: allItems,
        input:""
     });
  };

  deleteItem = key =>{
      const allItems = this.state.items
      allItems.splice(key,1)
      this.setState({
          items:allItems
      })
  }

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <h2> TodoApp</h2>
        <form className="input-section" onSubmit={this.storeItems}>
          <input type="text" onChange={this.handleChange} value={input} />
          <button>Add</button>
        </form>
        <ul>
          {/*  <li >
                       item1
                       <i className="fa fa-trash" aria-hidden="true"></i>

                   </li> */}
          {items.map((data, index) => (
            <li key={index}>
              {" "}
              {data}
              <i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteItem(index)} ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
