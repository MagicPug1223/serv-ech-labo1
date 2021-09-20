const http = require('http');
const querystring = require('query-string')
function AccessControlConfig(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
}
function Prefligth(req, res) {
    if (req.method === 'OPTIONS') {
        console.log('preflight CORS verifications');
        res.end();
        // request handled
        return true;
    }
    // request not handled
    return false;
}

const server = require('http').createServer((req, res) => {
    AccessControlConfig(res);
    if (!Prefligth(req, res)) {
        // do something else with request
        console.log(req.url)
        let reqInfo = { url: req.url, method: req.method, contentType: req.headers['content-type'] }
        res.writeHead(200, { "Content-Type": "application/json" })
        if (req.method == 'GET') {
            res.end(JSON.stringify(reqInfo))
        }
        else {
            if (req.method == 'POST') {
                let body = []
                req.on('data', chunk => {
                    body.push(chunk)
                }).on('end', () => {
                    try {
                        if (req.headers['content-type'] === "application/json") {
                            reqInfo.body = JSON.parse(body)
                        }
                        if (req.headers['content-type'] === "application/x-www-form-unlencoded") {
                            reqInfo.body = querystring.parse(body.toString())
                        }
                        else {
                            reqInfo.body = body.toString()
                        }
                        res.end(JSON.stringify(reqInfo))
                    } catch (error) {
                        console.log(error)
                    }
                })
            }
        }
    }
});
// const server = http.createServer((req, res) => {


// });
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
