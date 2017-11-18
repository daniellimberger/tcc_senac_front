myApp.controller('relatorioVendasController',  ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.tituloPagina = "Relatório de Produtos Vendidos";


	$scope.cliente = "";
	$scope.periodo_inicio = "";
	$scope.periodo_fim = ""; 



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



	$scope.atualizaRelatorio = function(){


		$http({
		method  : 'POST',
		url     :  url_base+"Controller/vendas_controller.php?function=listar_todos_pedido",
		data: {
				idCliente		  : $scope.cliente,
		    	periodoInicio     : moment($scope.periodo_inicio).format('YYYY-MM-DD'),
		    	periodoFim		  : moment($scope.periodo_fim).format('YYYY-MM-DD')
		    },	
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			$scope.produtos_vendidos = data;
      	});
	}
	$scope.atualizaRelatorio();



   
}]);
