import React, { Component } from "react";
import { render } from "react-dom";
import "../css/style.css";
import uuid from "uuid";
import TodoItems from "../components/TodoItems";
import TodoInput from "../components/TodoInput";

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = { allTodos: [] }
    }

    getTodos = () => {
        fetch('/api/todos')
            .then(response => response.json())
            .then(data => this.setState({ allTodos: data }));
    }

    componentDidMount() {
        this.getTodos();
    }

    handleDeleteTodo = (id) => {
        fetch("/api/todos/" + id, {
            method: "DELETE",
        }).then(this.componentDidMount())
    };

    handleCheckTodo = (checkedVal, id) => {
        fetch('/api/todos', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ _id: id, chk: checkedVal }),
        }).then(this.componentDidMount())
    };

    storeTodo = (inputVal) => {
        let newTodo = { _id: uuid.v4(), title: inputVal, chk: false }
        fetch('/api/todos', {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(newTodo)
        }).then(this.componentDidMount())
    };

    render() {
        return (
            <div>
                <TodoInput todoInputValue={this.storeTodo} />
                <TodoItems todos={this.state.allTodos}
                    onChecked={this.handleCheckTodo}
                    onDelete={this.handleDeleteTodo} />
            </div>
        )
    }
}