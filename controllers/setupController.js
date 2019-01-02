let Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        //seed the database
        let starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttahcment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttahcment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttahcment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });

    })

}