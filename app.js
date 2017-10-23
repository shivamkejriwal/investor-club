// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

const publicFolder = 'dist';
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, publicFolder)));

// Connect Middleware
app.use('/api/stocks', require('./apis').stocks);
app.use('/api/watchlists', require('./apis').watchlists);
app.use('/api/fundamentals', require('./apis').fundamentals);
app.use('/api/companyProfiles', require('./apis').companyProfiles);


// Serve Index File
app.use('/', function (req, res) {
  return res.sendFile(path.join(__dirname, `${publicFolder}/index.html`));
});


if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
