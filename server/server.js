const path = require("path");
const routes = require("./routes/api");
const { app} = require('./config');


app.use(routes);

const PORT = process.env.PORT || 3000;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server listening at http://localhost:3000`);
  });
});