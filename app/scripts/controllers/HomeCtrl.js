(function() {
	function HomeCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		this.selectedRoom = 
		this.openModal = function() {
			$uibModal.open({
				templateUrl: '/templates/addRoomModal.html',
				controller: 'ModalCtrl as modal'
			});
		};
   	}

   	angular
		.module('blocChat')
       	.controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();