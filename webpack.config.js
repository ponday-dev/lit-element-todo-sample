module.exports = {
    mode: 'depelopment',
    entry: {
        app: `${__dirname}/src/scripts/index.ts`
    },
    output: {
        path: `${__dirname}/dist/js`
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts[x]?$/,
                exclude: [ /node_modules/ ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
}
