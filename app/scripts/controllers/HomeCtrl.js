(function() {
	function HomeCtrl(Room, Message, $uibModal) {
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
   	}

   	angular
		.module('blocChat')
       	.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl])
})();