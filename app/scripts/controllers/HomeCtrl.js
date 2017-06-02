(function() {
	function HomeCtrl(Room, Message, $cookies, $uibModal) {
		this.selectedRoom = null;
		this.rooms = Room.all;
		this.updateRoom = function(room) {
			this.selectedRoom = room;
			this.messages = Message.getByRoomId(this.selectedRoom.$id);
		};
		this.openModal = function() {
			$uibModal.open({
				templateUrl: '/templates/addRoomModal.html',
				controller: 'ModalCtrl as modal'
			});
		};

		this.sendMessage = function(content) {
			Message.send($cookies.get('username'), content, this.selectedRoom.$id);
		}
   	}

   	angular
		.module('blocChat')
       	.controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl])
})();