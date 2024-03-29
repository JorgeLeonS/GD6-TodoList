const Task = require('../models/Task');

exports.get = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    res.json(tasks);
  });
}

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1){
      Task.find(id).then((task) => res.json(task));
    }else{
      res.redirect('/');
    }
  });
}

/* exports.done = (req, res) => {
  //De la URL
  let id = req.params.id;
  //Del form
  //req.body.id;

  Task.find(id).then((task) =>{
    return Task.markAsDone(task)
  })
  .then((result)=>{
    res.redirect('/');
  });
} */

exports.done = (req, res) => {
  // URL
  let id = req.params.id;
  Task.find(id).then((task) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.markAsDone(task).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  let deleteId = req.params.id;
  Task.delete(deleteId).then(() => {
    if(req.xhr || req.headers.accept.indexOf("json") > -1){
      res.json({id : deleteId});
    }  else {
      res.redirect('/');
    }
  });
}
