module.exports = {

    // �����
    options: {
        limit: 3
    },

    // ������ ����������
    devFirst: [
        'clean',
        'jshint',
    ],
    devSecond: [
        'jade',
        'sass:dev',
        'uglify',
        'copy',
    ],

    // ���������������� ������
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'jade',
        'sass:prod',
        'uglify',
        'copy',
    ],

    browserSync: [
        'browsersync',
        'watch'
    ],

    // ������ �����������
    imgFirst: [
        'imagemin'
    ]
};