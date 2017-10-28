myApp.controller('relatorioClienteController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.tituloPagina = "Relatório de Clientes";

	$rootScope.mostrarBtnCad = true;			

	$scope.buscarDadosCliente = function(){
		$http
		.get(url_base+"Controller/cliente_controller.php?function=listar_todos")
		.then(function(data){
				$scope.clientes = data;
		});
	}
	$scope.buscarDadosCliente();



	$scope.cliente = [];



	$scope.listarUm = function(id_listar){

		$http({
			url     :  url_base+"Controller/cliente_controller.php?function=listar_um&id_listar="+id_listar,
			dataType: 'json',
		}).then(function (retorno) {

			opa = new Date(retorno.data.data_cadastro);
			opa.setDate(opa.getDate() + 1);

			$scope.cliente.id_cliente = retorno.data.id_cliente;
			$scope.cliente.nomeFantasia = retorno.data.nome_fantasia;
			$scope.cliente.razaoSocial = retorno.data.razao_social;
			$scope.cliente.cnpj = retorno.data.cnpj;
			$scope.cliente.inscEstadual = retorno.data.insc_estadual;
			$scope.cliente.endereco = retorno.data.endereco;
			$scope.cliente.bairro = retorno.data.bairro;
			$scope.cliente.cidade = retorno.data.cidade;
			$scope.cliente.cep = retorno.data.cep;
			$scope.cliente.uf = retorno.data.uf;
			$scope.cliente.telefoneFixo = retorno.data.telefone_fixo;
			$scope.cliente.dataCadastro = opa;
			$scope.cliente.observacao = retorno.data.observacao;

			$rootScope.mostrarBtnCad = false;
			$rootScope.mostrarBtnEdit = true;			

      	});

	}	
 
}]);