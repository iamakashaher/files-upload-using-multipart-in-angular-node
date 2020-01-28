const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
        message: 'file upload successfully'
    })
})

app.listen(port, () => console.log(`server started on port ${port}`))