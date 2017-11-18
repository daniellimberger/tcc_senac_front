myApp.controller('loginController',   ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){


	$rootScope.tituloPagina = "Login";

	$rootScope.idVendedor = "";
	$rootScope.tipoUser = "";



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
					$rootScope.tipoUser = retorno.data[0].tipo_user;
					$rootScope.nomeUser = retorno.data[0].nome;
					$rootScope.sobrenomeUser = retorno.data[0].sobrenome;

					if ($rootScope.tipoUser == 'adm'){

					    $rootScope.menu = [
					        { item: "home"  , link: "/app/#!/home"  , avatar:"icon_empresas"},    
					        { item: "clientes"  , link: "/app/#!/cliente"  , avatar:"icon_empresas"},
					        { item: "vendedores", link: "/app/#!/vendedor" , avatar:"icon_vendedores"},
					        { item: "produto"   , link: "/app/#!/produto"  , avatar:"icon_estoque"},
					        { item: "relatorio", link: "/app/#!/relatorio", avatar:"icon_relatorios"},
					        { item: "pedido"   , link: "/app/#!/pedido", avatar:"icon_pedidos"},
					    ];


					}else{

					    $rootScope.menu = [
					        { item: "home"  , link: "/app/#!/home"  , avatar:"icon_empresas"},    
					        { item: "clientes"  , link: "/app/#!/cliente"  , avatar:"icon_empresas"},
					        { item: "relatorio", link: "/app/#!/relatorio", avatar:"icon_relatorios"},
					        { item: "pedido"   , link: "/app/#!/pedido", avatar:"icon_pedidos"},
					    ];

					}


					window.location.href = '#!/home';
		 	}else{
		 		alert('Login e ou Senha inválido(s)!');
		 	}


		 });		


	}





   
}]);