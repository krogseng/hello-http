// get the server started
const server = require('../lib/http-server');
const PORT = process.env.PORT;

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on: ', PORT);
});