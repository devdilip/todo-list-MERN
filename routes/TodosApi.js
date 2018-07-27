var express = require("express");
var router = express.Router();

const Todos = require("../models/todos")

// Fetch All Data
router.get("/todos", function (req, res, next) {
  Todos.getTotalTodos(function (err, todoList) {
    res.json(todoList)
  })
})

// Save todos
router.post("/todos", function (req, res, next) {
  Todos.create(req.body).then(function (data) {
    res.send(data);
  })
})

// Delete todos
router.delete("/todos/:id", function (req, res) {
  Todos.findByIdAndRemove({ _id: req.params.id }).then(function (data) {
    res.send(data);
  })
})

// Update todo
router.put("/todos", function (req, res) {
  Todos.findByIdAndUpdate(req.body._id, { chk: req.body.chk },
    function (err) {
      if (err) {
        res.send(err);
        return;
      }
      res.send({ data: "Todo has been Updated..!!" });
    });
})

module.exports = router