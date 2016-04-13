(function() {
    angular
        .module('cosmetApp')
        .filter('addHtmlLineBreaks', addHtmlLineBreaks);

    function addHtmlLineBreaks () {
        return function (text) {
            if(text !== undefined) {
                return text.replace(/\n/g, '<br/>');
            }
        };

    }
})();