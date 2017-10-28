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

    $scope.pedidoItem.valorUnitDesconto = 0;

    $scope.totalPedido = 0;

    $scope.somaPedido = function(valorLinha){
    	$scope.totalPedido = parseFloat($scope.totalPedido) + parseFloat(valorLinha);
    }


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

					 	if(data.status == 200){
							$scope.pedidoNaoiniciado = false;
							$scope.pedidoIniciado = true;

							$scope.pedido.nro_pedido = data.data;
							alert($scope.pedido.nro_pedido); 
					

						}

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

					 	if(data.status == 200){
							//alert(data.data); 
							$scope.buscarDadosPedidoItem();

							$scope.pedidoItem.idProduto = "";
							$scope.pedidoItem.qtdItem = "";
							$scope.pedidoItem.valorUnit = "";
			  		        $scope.pedidoItem.valorUnitTotal = "";

							$scope.buscarDadosPedidoItem($scope.pedido.nro_pedido);	

						}
					 });
	}

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



	$scope.aplicaDescontoItem = function(percentual_desconto){
	

			desc = percentual_desconto;

			valor_unitario = parseFloat($scope.pedidoItem.valorUnitTotal);

			valor_a_descontar = valor_unitario * (desc/100);

			valor_apos_desconto = valor_unitario - valor_a_descontar;


			$scope.pedidoItem.valorUnitTotal = parseFloat(valor_apos_desconto);


	}

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

	}


	// zerando os valores para obrigar o usuario a repor os valores
	$scope.atualizaValorUnit = function(param){
		$scope.pedidoItem.valorUnit = param;
		$scope.pedidoItem.qtdItem = 0;
	    $scope.pedidoItem.valorUnitTotal = 0;
	    $scope.pedidoItem.valorUnitDesconto = 0;
	}

	$scope.atualizaValorProdutoTotal = function(){
		qtd_item = $scope.pedidoItem.qtdItem;
		valor_item = $scope.pedidoItem.valorUnit;

		$scope.pedidoItem.valorUnitTotal = qtd_item * valor_item;
	}










	$scope.buscarDadosPedidoRel = function(){

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
	$scope.buscarDadosPedidoRel();


	$scope.fecharPedido = function(){

		var htmlMail = document.getElementById("ConteudoMail").innerHTML;

		$http({
		method  : 'POST',
		url     : "http://www.ligiano.info/tcc_daniel/Controller/pedido_controller_web.php",
		data: {
		    	html_pedido        : htmlMail,
		    },	
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert(data.data);
      	});

	}

	$scope.buscaNomeCliente = function(){
		var id_listar = $scope.pedido.idCliente;

		$http({
			url     :  url_base+"Controller/cliente_controller.php?function=listar_um&id_listar="+id_listar,
			dataType: 'json',
		}).then(function (retorno) {

			$scope.nome_cliente_email = retorno.data.nome_fantasia;

		});


		// no ng-change roda a funcao nuscaNomeCliente, 
	}





















   
}]);