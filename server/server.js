const path = require("path");
const routes = require("./routes/api");
const { db,app} = require('./config');
//routes
app.use('/api/test' , require('./routes/testApi'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/pasttrips',require('./routes/pasttripsAPI'));

app.use(routes);

const PORT = process.env.PORT || 3000;

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server listening at http://localhost:3000`);
  });
});