myApp.controller('clienteController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope, $mdDateLocale){



	$rootScope.tituloPagina = "Cadastro de Cliente";

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
	$scope.opas = [];


	$scope.cadastraCliente = function(){
					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/cliente_controller.php?function=cadastrar",
					  data: {
					  		nomeFantasia : $scope.cliente.nomeFantasia,
					  		  razaoSocial: $scope.cliente.razaoSocial,
					  		         cnpj: $scope.cliente.cnpj,
				  		     inscEstadual: $scope.cliente.inscEstadual,
				  		         endereco: $scope.cliente.endereco,
					  		       bairro: $scope.cliente.bairro,
					  		       cidade: $scope.cliente.cidade,
				  		         	  cep: $scope.cliente.cep,
					  		           uf: $scope.cliente.uf,
			  		         telefoneFixo: $scope.cliente.telefoneFixo,
			  		         dataCadastro: moment($scope.cliente.dataCadastro).format('YYYY-MM-DD'),
		 		    dataCadastroExtendida: $scope.cliente.dataCadastro,
		 		               observacao: $scope.cliente.observacao

					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
    					//console.log(moment($scope.cliente.dataCadastro).format('YYYY-MM-DD'));
    					alert( moment($scope.cliente.dataCadastro).format('YYYY-MM-DD'));
    					alert( $scope.cliente.dataCadastro );
    					console.log(data);
					 });

		$scope.buscarDadosCliente();		

		$scope.nomeFantasia="";
		$scope.razaoSocial="";
		$scope.cnpj="";
		$scope.inscEstadual="";
		$scope.endereco="";
		$scope.bairro="";
		$scope.cidade="";
		$scope.cep="";
		$scope.uf="";
		$scope.telefoneFixo="";
		$scope.dataCadastro="";	
		$scope.dataCadastroExtendida="";			
		$scope.observacao="";

	}

	$scope.deletaCliente = function(id_deletar){


		$http({
		method  : 'POST',
		url     :  url_base+"Controller/cliente_controller.php?function=deletar",
		data: {
		    	id_deletar        : id_deletar,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert('deletou');
      	});

		$scope.buscarDadosCliente();
		// atualiza a lista
		// poderia usar watch

	}	

	$scope.editaCliente = function(id_editar){

alert(id_editar);
console.log(id_editar);
/*		$http({
		method  : 'POST',
		url     :  url_base+"Controller/cliente_controller.php?function=deletar",
		data: {
		    	id_deletar        : id_deletar,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert('deletou');
      	});

		$scope.buscarDadosCliente();
		// atualiza a lista
		// poderia usar watch
*/
	}		

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

		//$scope.buscarDadosCliente();
		// atualiza a lista
		// poderia usar watch
	}	



   
}]);