
const express = require('express'); // Server
const port = 80;

var Moment = require('moment'); // Time and date
const templates = require("./modules/templates.js") // Templates
const views = require("./modules/views.js") // Views
const tools = require("./modules/tools.js") // Functions
var path = require('path');
var bodyParser = require('body-parser');

// Set liquid templating
var ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// Routes
// Ignore Favicon
app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", function(req, res) {
  // Home page - render all merchants and high level information

  // For each file in merchants
});

app.get("/:merchant_id", function(req, res) {
  // High level information on the merchant (status, revenue etc)
  try {
    var mom = require('./merchants/' + req.params.merchant_id + ".json"); // mom = Merchant Object Model
    res.render("index.ejs", {"merchant" : mom });
  } catch(e) {
    console.error("Debug: error finding merchant file. Error: ", e);
    res.send("Could not find merchant file with name -  " + req.params.merchant_id);
  }
});

app.post("/save/:merchant_id", function(req, res) {
  // Save the merchant information
  // var merchant_json = JSON.parse(req.body);
  tools.saveFile(req.body, req.params.merchant_id);
  res.send(200)
});



app.listen(port, () => console.log('Service listening on %s !', port));
