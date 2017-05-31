(function() {
	function UsernameModalCtrl($cookies, $uibModal, $uibModalInstance) {
		this.ok = function(username) {
			if (!username || username === '' || username === undefined) {
				$uibModal.open({
      				templateUrl: '/templates/usernameModal.html',
      				controller: 'UsernameModalCtrl as usernameModal',
      				backdrop: 'static'
      			})
			};
			$cookies.put('username', username);
			$uibModalInstance.close();
		};
   	}

   	angular
       	.module('blocChat')
       	.controller('UsernameModalCtrl', [ '$cookies', '$uibModal', '$uibModalInstance', UsernameModalCtrl]);
})();