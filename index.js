const server = require('./server');

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\n *** server listening on port ${port} ***\n`));