const path = require('path');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('/list.html', (req, res) => {
        res.sendFile(path.join(__dirname, 'list.html'));
    });
};
