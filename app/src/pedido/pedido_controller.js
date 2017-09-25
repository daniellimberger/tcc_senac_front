myApp.controller('pedidoController',  ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.tituloPagina = "Novo Pedido";

	$scope.pedido = [];

	$scope.pedidoNaoiniciado = true;
	$scope.pedidoIniciado = false;	


	$scope.pedido['nro_pedido'] = "";

	$scope.pedido_itens = "";

	$scope.pedidoItem = {};

	$scope.pedidoItem.valorUnit = 0;
	$scope.pedidoItem.qtdItem = 0;

	$scope.pedidoItem.valorUnitTotal = 0;






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

	$scope.cadastrarPedido = function(){

					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/pedido_controller.php?function=cadastrar",
					  data: {
								  		idCliente : $scope.pedido.idCliente,
							  			idVendedor: '1',
								  		dataPedido: moment($scope.pedido.dataPedido).format('YYYY-MM-DD'),
			  		           dataPrevisaoEntrega: moment($scope.pedido.dataPrevisaoEntrega).format('YYYY-MM-DD'),
			  		                    valorTotal: '0',
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
					 	alert(data.data);

					 	if(data.status == 200){
							$scope.pedidoNaoiniciado = false;
							$scope.pedidoIniciado = true;

							$scope.pedido.nro_pedido = data.data; 
						}
					 	console.log(data);
					 });
	}


	$scope.cadastrarPedidoItem = function(){

					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/pedido_controller.php?function=cadastrar_item",
					  data: {
								  		nro_pedido : $scope.pedido.nro_pedido,
							  			  idProduto: $scope.pedidoItem.idProduto,
							  			    qtdItem: $scope.pedidoItem.qtdItem,
							  			  valorUnit: $scope.pedidoItem.valorUnit,
			  		                 valorUnitTotal: $scope.pedidoItem.valorUnitTotal
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
					 	alert(data.data);

					 	if(data.status == 200){
							//alert(data.data); 
							$scope.buscarDadosPedidoItem();

							$scope.pedidoItem.idProduto = "";
							$scope.pedidoItem.qtdItem = "";
							$scope.pedidoItem.valorUnit = "";
			  		        $scope.pedidoItem.valorUnitTotal = "";



						}
					 	console.log(data);
					 });
	}


	$scope.buscarDadosPedidoItem = function(){
		$http
		.get(url_base+"Controller/pedido_controller.php?function=listar_todos_pedidoItem")
		.then(function(data){
				$scope.pedido_itens = data;
				console.log(data);
		});
	}
	$scope.buscarDadosPedidoItem();	

	$scope.deletaPedidoItem = function(id_deletar){

		$http({
		method  : 'POST',
		url     :  url_base+"Controller/pedido_controller.php?function=deletar_pedido_item",
		data: {
		    	id_deletar        : id_deletar,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert(data.data);
      	});

		$scope.buscarDadosPedidoItem();
		// atualiza a lista
		// poderia usar watch

	}


	$scope.atualizaValorUnit = function(param){
		$scope.pedidoItem.valorUnit = param;
		$scope.pedidoItem.qtdItem = 0;
	    $scope.pedidoItem.valorUnitTotal = 0;
	}

	$scope.atualizaValorProdutoTotal = function(){
		qtd_item = $scope.pedidoItem.qtdItem;
		valor_item = $scope.pedidoItem.valorUnit;

		$scope.pedidoItem.valorUnitTotal = qtd_item * valor_item;
	}

   
}]);