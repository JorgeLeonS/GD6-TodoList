const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.post('/tasks', tasksController.store);

router.get('/tasks/getTasks', tasksController.get)

router.post('/tasks/:id/done', tasksController.done);

router.delete('/tasks/:id/delete', tasksController.delete);



module.exports = router;
