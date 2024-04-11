const WPP = require('https://github.com/wppconnect-team/wa-js/releases/download/nightly/wppconnect-wa.js')

alert('oi')
WPP.webpack.onReady(function () {
    alert('Ready to use WPPConnect WA-JS');
});