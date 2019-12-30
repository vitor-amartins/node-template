const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { modelInjector, utilsInjector } = require('./helpers/injector');
const { errorHandler, notFoundHandler, requestHandler } = require('./helpers/handler');
const requestLogger = require('./helpers/logger/request-logger');
const removeSensitiveAttributes = require('./helpers/remover/sensitive-attributes');

require('dotenv').config();

require('./database');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ================ INJECTORS ================ //
app.use(modelInjector);
app.use(utilsInjector);

// ================ REMOVER ================ //
app.use(removeSensitiveAttributes);

// ================ AUTHENTICATION ROUTES ================ //
app.use(routes.auth);

// ================ ROUTES ================ //

// ---------------- PEOPLE ---------------- //
app.use(routes.user);
app.use(routes.userRole);

// ---------------- INVALID ROUTE ---------------- //
app.use(notFoundHandler);

// ================ ERROR HANDLER ================ //
app.use(errorHandler);

// ================ LOGS ================ //
app.use(requestLogger);

// ================ REQUEST HANDLER ================ //
app.use(requestHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
