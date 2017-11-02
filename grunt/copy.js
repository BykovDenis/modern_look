module.exports = {
  build: {
    files: [
      {expand: true, cwd: 'src', src: 'fonts/*', dest: 'dest/'},
      {expand: true, cwd: 'src', src: 'img/**/*', dest: 'dest/'},
      {expand: true, cwd: 'src', src: 'js/**/*', dest: 'dest/'},
    ]
  }
};