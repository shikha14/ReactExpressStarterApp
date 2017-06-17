/**
 * Created by Shikha on 17/06/17.
 */


import path from 'path'


export default {
    devtools: 'eval-source-map',
    entry: [
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                ],
                loaders: ['babel' ]
            }
        ]
    },
    resolve: {
        extentions: [ '', '.js' ]
    }
}