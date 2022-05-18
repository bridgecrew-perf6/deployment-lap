const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, '../client')))

// Endpoints
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.js'))
  })

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})