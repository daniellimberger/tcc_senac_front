myApp.controller('produtoController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope){

	$rootScope.tituloPagina = "Produto";

	$scope.buscarDadosProduto = function(){
		$http
		.get("http://localhost:8081/Controller/produto_controller.php?function=listar_todos")
		.then(function(data){
				$scope.produtos = data;
				console.log($scope.produtos);
		});
	}

	$scope.buscarDadosProduto();




	$scope.produto = [];

	$scope.cadastraProduto = function(){
		return $http({
					  method  : 'POST',
					  url     :  "http://localhost:8081/Controller/produto_controller.php?function=cadastrar",
					  data: {
					  		nome : $scope.produto.nome,
					  		marca: $scope.produto.marca,
					  		valor: $scope.produto.valor
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 });
					  console.log('obaaaaa');		
	}


	$scope.lala = function(){
		/*$scope.produto.nome = dados.nome;
		$scope.produto.marca = dados.marca;
		$scope.produto.valor = dados.valor;*/
		//$scope.depreciacao.codigo        = dados.codigo;


		$http({
		method  : 'POST',
		url     :  "http://localhost:8081/Controller/produto_controller.php?function=cadastrar",
		data: {
		    	nome        : $scope.produto.nome,
		    	marca       : $scope.produto.marca,
		    	valor       : $scope.produto.valor
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		});


	}
	
}]);