
module.exports = {
    context : __dirname,
    entry : './scripts/main.js',
    output : {
        path : './dist',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/, 
                exclude : /node_modules/,
                loader: 'babel',
                query : {
                    'presets' : ['es2015']
                }

            }
        ]
    }
}
