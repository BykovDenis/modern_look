module.exports =  {
    bsFiles: {
        src : [
            'dest/css/*.css',
            'dest/*.html'
        ]
    },
    options: {
        watchTask: true,
        server: './dest'
    }
};