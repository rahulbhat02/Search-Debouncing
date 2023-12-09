var  Db = require('./dboperations');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');

var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var  port = 8090;
app.listen(port);
console.log('API is runnning at ' + port);

router.route('/movies/:title').get(async (request, response) => {
    console.log("Request Recieved");

    const data = await Db.getTitle(request.params.title);
    response.json(data);

    console.log("Response Sent");
})