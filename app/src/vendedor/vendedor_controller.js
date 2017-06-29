myApp.controller('vendedorController',  ['$scope', '$rootScope',  function($scope, $rootScope){

	$rootScope.tituloPagina = "Cadastro de Vendedor";

	$scope.nome="";
	$scope.sobrenome="";
	$scope.telefoneFixo="";	
	$scope.telefoneCelular="";
	$scope.rg="";
	$scope.cpf="";
	$scope.endereco="";
	$scope.bairro="";
	$scope.cidade="";
	$scope.cep="";
	$scope.uf="";
	$scope.dataCadastro="";
	$scope.observacao="";
   
}]);