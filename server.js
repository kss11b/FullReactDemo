const express = require("express");
const os = require("os");
const app = express();
const ejs = require('ejs')
const apiRouter = express.Router()

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.get("/", (req, res) =>
  res.render('index', {})
);


app.use('/public', express.static('public'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', `${__dirname}/public`);

app.use('/api', apiRouter);


app.listen(8080, () => console.log("Listening on port 8080!"));
