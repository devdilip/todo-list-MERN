import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ToDoList from './TodoApp';

ReactDom.render(
    <ToDoList/>,document.getElementById('to-do-container')
)