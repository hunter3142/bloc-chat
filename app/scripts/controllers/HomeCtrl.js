(function() {
	function HomeCtrl(Room, $uibModal) {
		this.rooms = Room.all;
		this.openModal = function() {
			$uibModal.open({
				templateUrl: 'newRoom.html',
				controller: 'ModalCtrl',
				controllerAs: 'modal',
			});
		};
   	}

   	angular
		.module('blocChat')
       	.controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();