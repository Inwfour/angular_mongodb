// coinRoutes.js

var express = require('express');
var diaryRoutes = express.Router(); //set

// Require Item model in our routes module
var Diary = require('../models/Diary'); //set

// Defined store route
diaryRoutes.route('/add').post(function (req, res) { //set
  var diary = new Diary(req.body); //set
   diary.save() //set
    .then(item => {
    res.status(200).json({'diary': 'Diary added successfully'}); //set
    })
    .catch(err => {
    res.status(400).send("unable to save to database"); 
    });
});

// Defined get data(index or listing) route
diaryRoutes.route('/').get(function (req, res) { //set
   Diary.find(function (err, diarys){ //set
    if(err){
      console.log(err);
    }
    else {
      res.json(diarys); //set
    }
  });
});

// Defined edit route
diaryRoutes.route('/edit/:id').get(function (req, res) { //set
  var id = req.params.id;
  Diary.findById(id, function (err, diary){ //set
      res.json(diary); //set
  });
});

//  Defined update route
diaryRoutes.route('/update/:id').post(function (req, res) { //set
   Diary.findById(req.params.id, function(err, diary) { //set
    if (!diary) //set
      return next(new Error('Could not load Document'));
    else { //set
      diary.id = req.body.id;
      diary.password = req.body.password;
      diary.topic = req.body.topic;
      diary.story = req.body.story;
      diary.date = req.body.date;

      dairy.save().then(dairy => { //set
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
diaryRoutes.route('/delete/:id').get(function (req, res) { //set
   Diary.findByIdAndRemove({_id: req.params.id}, function(err, diary){ //set
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = diaryRoutes; //set
