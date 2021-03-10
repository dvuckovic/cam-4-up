/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const project = require('./package.json');

module.exports = {
    publicPath: '',
    pages: {
        index: {
            entry: 'src/main.js',
            title: `${project.name} - ${project.description}`,
        },
    },
    // chainWebpack: config => {
    //     config.performance
    //         .maxEntrypointSize(317 * 1024);
    // },
};
