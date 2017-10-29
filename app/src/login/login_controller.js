myApp.controller('loginController',   ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){


	$rootScope.tituloPagina = "Login";

//	$rootScope.logado = false;

	$rootScope.idVendedor = "";

	$scope.validaAcesso = function(data){

		$http({
		  method  : 'POST',
		  url     :  url_base+"Controller/login_controller.php?function=valida_acesso",
		  data: {
		  		login : $scope.user.login,
		  		 senha: $scope.user.senha,
		        },
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		 }).then(function (retorno) {

		 	if(retorno.data != '"falha_ao_logar"'){
					$rootScope.logado = true;
					$rootScope.exibeBtSair = true;
					$rootScope.idVendedor = retorno.data[0].vendedor_id;
					window.location.href = '#!/home';
		 	}else{
		 		alert('Login e ou Senha inválido(s)!');
		 	}
		 	//console.log(retorno.data);
		 	// colocar um alerta aqui, feedback ao usuario



		 });		


	}

   
}]);