myApp.controller('relatorioProdutoController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope){

	$rootScope.tituloPagina = "Relatório de Produtos";

	$scope.voltar = function(){
		window.location.href = '#!/relatorio';
	};

	$scope.buscarDadosProduto = function(){
		$http
		.get(url_base+"Controller/produto_controller.php?function=listar_todos")
		.then(function(data){
				$scope.produtos = data;
				console.log($scope.produtos);
		});
	}
	$scope.buscarDadosProduto();


	$scope.buscarDadosMarca = function(){
		$http
		.get(url_base+"Controller/marca_controller.php?function=listar_todos")
		.then(function(data){
				$scope.marcas = data;
				console.log($scope.marcas);				
		});
	}
	$scope.buscarDadosMarca();
	
}]);