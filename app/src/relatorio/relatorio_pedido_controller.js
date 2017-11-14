myApp.controller('relatorioPedidoController',  ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.tituloPagina = "Relatório de Pedidos";


	$scope.voltar = function(){
		window.location.href = '#!/relatorio';
	};


	$scope.buscarDadosCliente = function(){
		$http
		.get(url_base+"Controller/cliente_controller.php?function=listar_todos")
		.then(function(data){
				$scope.clientes = data;
				console.log($scope.clientes);				
		});
	}
	$scope.buscarDadosCliente();

	$scope.buscarDadosProduto = function(){
		$http
		.get(url_base+"Controller/produto_controller.php?function=listar_todos")
		.then(function(data){
				$scope.produtos = data;
				console.log($scope.produtos);				
		});
	}
	$scope.buscarDadosProduto();


	$scope.buscarDadosPedido = function(){

		$http({
		method  : 'POST',
		url     :  url_base+"Controller/pedido_controller.php?function=listar_todos_pedido",
		data: {
		    	nro_pedido        : 'teste',
		    },	
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			$scope.pedidos = data;
      	});
	}
	$scope.buscarDadosPedido();


	$scope.buscarDadosPedidoItem = function(){

		$http({
		method  : 'POST',
		url     :  url_base+"Controller/pedido_controller.php?function=listar_todos_pedidoItem",
		data: {
		    	nro_pedido        : $scope.pedido.nro_pedido,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			$scope.pedido_itens = data;
      	});
	}

	$scope.buscarDadosVendedor = function(){
		$http
		.get(url_base+"Controller/vendedor_controller.php?function=listar_todos")
		.then(function(data){
				$scope.vendedores = data;
		});
	}
	$scope.buscarDadosVendedor();	

   
}]);
