const http = require('http');

const server = http.createServer((req, res) => {
    
    const currentTime = new Date().toISOString();
    res.write('<html><body>');
    res.write('<h1>PRO690-Fin-sampleApp</h1>');
    res.write(`${currentTime}`);
    res.write('</body></html>');
    
    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
