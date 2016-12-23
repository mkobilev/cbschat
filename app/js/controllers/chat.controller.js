function chatCtrl() {
    var vm = this;

    vm.text = 'Some text';

}

angular.module('cbsChat', [])
.controller('chatCtrl', [chatCtrl]);

