'use strict';

/**
 * @author Diego Hideky <diegohideky@gmail.com>
 */

let express = require('express')
  , path    = require('path')
  , app     = express()
  , port    = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, _ => {
  console.log(`App running on port ${port}`);
});
