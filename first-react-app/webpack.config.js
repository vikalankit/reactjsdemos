
const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './index.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8081  
   },  
   module: {  
      rules: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
           }
        }
     ]
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  
