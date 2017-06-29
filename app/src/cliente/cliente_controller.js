myApp.controller('clienteController',  ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.tituloPagina = "Cadastro de Cliente";

	$scope.nomeFantasia="";
	$scope.razaoSocial="";
	$scope.cnpj="";
	$scope.inscEstadual="";
	$scope.endereco="";
	$scope.bairro="";
	$scope.cidade="";
	$scope.cep="";
	$scope.uf="";
	$scope.dataCadastro="";
	$scope.observacao="";

   
}]);