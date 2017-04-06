var express = require('express')
var app = express()

app.use(express.static('htmls'));

app.get('/home', function (req, res) {
  res.send('Hello World - Dennis!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})