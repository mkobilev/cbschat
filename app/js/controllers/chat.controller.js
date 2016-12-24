function chatCtrl(ChatService, $firebaseAuth) {
    var vm = this;
    var auth = $firebaseAuth();

    vm.messages = ChatService.getMessages();
    vm.shownMessages = ChatService.shownMessages();


    vm.sendMessage = function () {

        if(vm.author != null) {
            var message = {
                authorName: vm.author.displayName,
                authorPhoto: vm.author.photoURL,
                text: vm.newMessage,
                authorId: vm.author.uid
            };
        } else {
            alert("Сначала зарегистрируйтеь!");
        }

        if ( vm.newMessage != '' ) {
            ChatService.sendMessage(message);
            vm.newMessage = '';
        } else {
            alert('Введиите сообщение!');
        }

    };

    vm.login = function () {
        auth.$signInWithPopup('google')
    };

    vm.logout = function () {
        auth.$signOut();
    };


    auth.$onAuthStateChanged(function (authData) {
        vm.author = authData
        console.log(authData)
    })






}

angular.module('cbsChat')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);

