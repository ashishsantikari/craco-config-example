const { whenDev } = require('@craco/craco');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    webpack : {
        plugins: [
            ...whenDev(() => [
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    reportFilename: '../bundle-stats/report.html',
                    openAnalyzer: true,
                    logLevel: 'error',
                }),
            ], []),
        ],
    }
};