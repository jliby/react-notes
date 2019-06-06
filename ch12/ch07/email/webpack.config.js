module.exports = {
 entry: './jsx/app.jsx', //defines the file that will consolidate all the files.
 output: {
     path: __dirname + '/js', //path for bundled files
     filename: 'bundle.js' 
 },
 devtool: '#sourcemap', //tool used for 
 stats: {
    colors: true,
    reasons: true
 },
 module: {
     loaders: [
         {test: /\.css$/, loader: "style-loader!css-loader "},  //assigns the css file for injection
         {
             test: /\.jsx?$/,
             exclude: /(node_modules)/,
             loaders: ['babel-loader']
         }
     ]

 }
}