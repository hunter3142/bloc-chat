(function() {
	function ModalCtrl(Room, $uibModalInstance) {
		this.ok = function(roomName) {
			Room.add(roomName);
			$uibModalInstance.close();
		};
		this.cancel = function() {
			$uibModalInstance.close();
		}
   	}

   	angular
       	.module('blocChat')
       	.controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();