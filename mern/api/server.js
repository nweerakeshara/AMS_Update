const  express = require('express');
const app = express();
const bodyParser = require('body-parser');
const  cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./DB');
const  businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser:true}).then(
    ()=> {console.log('DB connected')},
    err=>{console.log('Error :' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use('/business', businessRoute);

app.listen(PORT, function () {
    console.log('Server is running on port :', PORT);
});
