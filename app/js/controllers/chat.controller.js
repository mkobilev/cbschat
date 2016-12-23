function chatCtrl(ChatService) {
    var vm = this;

    vm.messages = ChatService.getMessages();
    vm.shownMessages = ChatService.shownMessages();


    vm.sendMessage = function () {
        var message = {
            text: vm.newMessage
        }

        if ( vm.newMessage != '' ) {
            ChatService.sendMessage(message);
            vm.newMessage = '';
        } else {
            alert('Введиите сообщение!');
        }


    }

}

angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', chatCtrl]);

