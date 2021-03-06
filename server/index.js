/**
 * Created by Shikha on 17/06/17.
 */
import express from "express";
import path from "path";
import open from "open";

import webpack  from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev';


const port = 3000;
const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));


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