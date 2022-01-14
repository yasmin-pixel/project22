var express = require('express');
var router = express.Router();


const users =  [
  { username: 'Alice', id: '1' },
  { username: 'Bob', id: '2' } 
]

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(users)
});

router.post('/', function(req, res, next)  {
  if (req.body.username && req.body.id) {
    res.status(201).json({message: 'user created'});
  } else {
    res.status(400).json({message: 'expected username and id'});
  }
})


router.put('/:id', function(req, res, next)  {
  if (req.body.username && req.body.id) {
    const user = users.find(aUser =>  aUser.id === req.params.id)
    if (user) {
      res.status(200).json({message: 'updated user entry'});
    } else {
      res.status(404).json({message: 'user not found'});
    }
  } else {
    res.status(400).json({message: 'expected username and id'});
  }
})

router.get('/:id', function(req, res, next)  {
    const user = users.find(aUser =>  aUser.id === req.params.id)
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: 'user not found'});
    }
})


router.delete('/:id', function(req, res, next)  {
  
    const user = users.find(aUser =>  aUser.id === req.params.id)
    if (user) {
      res.status(200).json({message: 'deleted user entry'});
    } else {
      res.status(404).json({message: 'user not found'});
    }
  
})

module.exports = router;
