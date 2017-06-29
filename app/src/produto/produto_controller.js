myApp.controller('produtoController',  ['$scope', '$rootScope',  function($scope, $rootScope){

	$rootScope.tituloPagina = "Produto";

	$scope.produto = "";
	$scope.marca = "";
	$scope.valor="";

}]);