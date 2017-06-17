/**
 * Created by Shikha on 17/06/17.
 */
import express from "express";
import path from "path";
import open from "open";
const port = 3333;
const app = express();


app.get('*', function(req, res) {
    //console.log("reaching here don't");
    try {
        res.sendFile(path.join( __dirname, './index.html'));
    } catch(e) {
        console.log(e);
    }
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});