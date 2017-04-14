var express = require('express')
var app = express()

app.use(express.static('htmls'));
app.use(express.static('scripts'));

app.get('/home', function (req, res) {
  res.send('Hello World - Dennis!');
})

app.listen(3500, function () {
  console.log('Example app listening on port 3500!')
})