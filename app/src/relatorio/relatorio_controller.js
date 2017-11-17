myApp.controller('relatorioController',  ['$scope', '$rootScope', function($scope, $rootScope){

	$rootScope.tituloPagina = 'Relatório';

	$scope.relatorio_cliente = function(){
		window.location.href = '#!/relatorio_cliente';
	};

	$scope.relatorio_pedido = function(){
		window.location.href = '#!/relatorio_pedido';
	};	

	$scope.relatorio_produto = function(){
		window.location.href = '#!/relatorio_produto';
	};	
	$scope.relatorio_vendas = function(){
		window.location.href = '#!/relatorio_vendas';
	};	

  
}]);