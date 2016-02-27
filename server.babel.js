'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as api from './server/api/http';
// import * as eventService from './server/api/service/event';
// import * as uni from './server/app.js';

var app = (0, _express2.default)();
// import socketIO from 'socket.io';

var httpServer = _http2.default.createServer(app);
var port = _config2.default.get('express.port') || 3000;

//var io = socketIO(httpServer);

app.set('views', _path2.default.join(__dirname, 'server', 'views'));
app.set('view engine', 'ejs');

/**
 * Server middleware
 */
app.use(require('serve-static')(_path2.default.join(__dirname, _config2.default.get('buildDirectory'))));
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());

/**
 * API Endpoints
 */
// app.get('/api/0/events', api.getEvents);
// app.post('/api/0/events', api.addEvent);
// app.post('/api/0/events/:id', api.editEvent);
// app.delete('/api/0/events/:id', api.deleteEvent);

// app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'images', 'favicon.ico')));

/**
 * Universal Application endpoint
 */
// app.get('*', uni.handleRender);

// eventService.liveUpdates(io);

httpServer.listen(port);
