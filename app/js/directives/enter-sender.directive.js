function enterSender() {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {

            if( event.which === 13){
                scope.$apply(function () {
                    scope.$eval(attrs.enterSender)
                });

                event.preventDefault();
            }

        })
    }
}


angular.module('cbsChat')
.directive('enterSender', [enterSender]);