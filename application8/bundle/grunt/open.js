module.exports = function (grunt, config) {
    var path = require('path'),
        url = 'http://' + grunt.option('host') + ':' + grunt.option('port');

    if (grunt.file.exists(path.join(config.bundle.target, 'index.html'))) {
        url += '/' + config.bundle.id + '/index.html';
    } else {
        url += '/standardlib/index.html#/' + config.bundle.id;
    }

    if (config.bundle.id === 'standardlib' && grunt.option('application-id')) {
        url += '#/' + grunt.option('application-id');
    }

    return {
        app: {
            path: url
        }
    };
};