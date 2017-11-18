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
					 	alert("Cadastrado com sucesso!")
					 });

		$scope.buscarDadosCliente();		

		$scope.cliente.nomeFantasia="";
		$scope.cliente.razaoSocial="";
		$scope.cliente.cnpj="";
		$scope.cliente.inscEstadual="";
		$scope.cliente.endereco="";
		$scope.cliente.bairro="";
		$scope.cliente.cidade="";
		$scope.cliente.cep="";
		$scope.cliente.uf="";
		$scope.cliente.telefoneFixo="";
		$scope.cliente.dataCadastro="";	
		$scope.cliente.dataCadastroExtendida="";			
		$scope.cliente.observacao="";

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
			alert('Deletado com sucesso!');
      	});

		$scope.buscarDadosCliente();
		// atualiza a lista

	}	

	$scope.editaCliente = function(){
					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/cliente_controller.php?function=editar",
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
		 		               observacao: $scope.cliente.observacao,
		 		                id_editar: $scope.cliente.id_cliente
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
					 	console.log(data);
					 	alert("Alterado com sucesso!")
					 });

		$scope.buscarDadosCliente();
		// atualiza a lista

	}		

	$scope.listarUm = function(id_listar){

		$http({
			url     :  url_base+"Controller/cliente_controller.php?function=listar_um&id_listar="+id_listar,
			dataType: 'json',
		}).then(function (retorno) {

			dataCad = new Date(retorno.data.data_cadastro);
			dataCad.setDate(dataCad.getDate() + 1);

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
			$scope.cliente.dataCadastro = dataCad;
			$scope.cliente.observacao = retorno.data.observacao;

			$rootScope.mostrarBtnCad = false;
			$rootScope.mostrarBtnEdit = true;			

      	});

	}	
 
}]);