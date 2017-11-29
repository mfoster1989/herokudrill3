const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
const students =
[{
    'id': 1,
    'firstName': 'Alice',
    'lastName': 'Zephyr',
    'homeTown': 'Seattle'
},{
    'id': 2,
    'firstName': 'Bob',
    'lastName': 'Yellow',
    'homeTown': "Vancouver"
},{
    'id': 3,
    'firstName': 'Claire',
    'lastName': 'Xylitol',
    'homeTown': 'Toledo'
},{
    'id': 4,
    'firstName': 'Daniel',
    'lastName': 'Winston',
    'homeTown': 'Akron'
},{
    'id': 5,
    'firstName': 'Edina',
    'lastName': 'Veritas',
    'homeTown': 'Wichita'
}]

app.use(cors());

function idQuery (array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      return array[i];
    }
  }
  return null
}

app.get('/', function (req, res) {
  res.json(students)
})

app.get('/:id', function (req, res) {
  console.log(req);
  var record = idQuery(students, req.params.id);
  if (!record) {
    res.status(404).json({
        message: 'No record found!'
    });
  }
  res.json({array: record});
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
