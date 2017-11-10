const path = require('path');
module.exports = {

    //define entry point
    entry: './src/script1.js',

    //defin output point
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
  
     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }

            },
            {
              test    : /\.scss$|.css$/,
              use     : [
                "style-loader",
                "css-loader",
                "sass-loader"
              ]
            }
        ] //loaders
    },
   


};