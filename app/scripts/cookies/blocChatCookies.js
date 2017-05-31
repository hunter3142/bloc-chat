(function() {
	function BlocChatCookies($cookies, $uibModal) {
    	var currentUser = $cookies.get('username');
    	if (!currentUser || currentUser === '') {
      		$uibModal.open({
      			templateUrl: '/templates/usernameModal.html',
      			controller: 'UsernameModalCtrl as usernameModal',
      			backdrop: 'static'
      		})
    	}
  	}

  	angular
    	.module('blocChat')
    	.run(['$cookies', '$uibModal', BlocChatCookies]);
})();