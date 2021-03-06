var mongoose = require('mongoose')
var User = mongoose.model('Task')
var tasks = require('../controllers/tasks.js')

module.exports = (app) => {

    // Index request to show all users
    app.get('/tasks', tasks.index);

    // Retrieve a specific task by ID
    app.get('/tasks/:id', tasks.show);

    // POST route to create task
    app.post('/tasks/:title/:description/', tasks.create);

    // Update a specific task by ID
    app.patch('/tasks/:id', tasks.update);

    // Delete a specific task by ID
    app.delete('/tasks/:id', tasks.destroy)
}
