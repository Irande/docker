const express = require("express");
const app = express();
app.get("/", (req, res)=> {
    return res.json({"Connection_status": "Connected", "code": 200});
});

app.listen(9800, () => {
    console.log("app running on http://127.0.0.1:9800")
});