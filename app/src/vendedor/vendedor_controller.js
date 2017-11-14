myApp.controller('vendedorController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope, $mdDateLocale){

	$rootScope.tituloPagina = "Cadastro de Vendedor";

	$rootScope.mostrarBtnCad = true;			


	$scope.buscarDadosVendedor = function(){
		$http
		.get(url_base+"Controller/vendedor_controller.php?function=listar_todos")
		.then(function(data){
				$scope.vendedores = data;
		});
	}
	$scope.buscarDadosVendedor();

	$scope.vendedor = ({ // preenchendo os campos para teste da funcao de cadastro
						      nome: '', 
						 sobrenome: '',
						        rg: '',
				               cpf: '',
                      telefoneFixo: '',				               
                   telefoneCelular: '',	                    
			              endereco: '',
				            bairro: '',
				            cidade: '',
				               cep: '',
				                uf: '',
                      dataCadastro: new Date(),
                              tipo: '',
		                     login: '',
		                     senha: '',
	                    observacao: ''
					  });



	$scope.cadastraVendedor = function(){
					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/vendedor_controller.php?function=cadastrar",
					  data: {
					  		      nome : $scope.vendedor.nome,
					  		  sobrenome: $scope.vendedor.sobrenome,
					  		         rg: $scope.vendedor.rg,
				  		            cpf: $scope.vendedor.cpf,
				           telefoneFixo: $scope.vendedor.telefoneFixo,
				        telefoneCelular: $scope.vendedor.telefoneCelular,
					  	       endereco: $scope.vendedor.endereco,
				  		     	 bairro: $scope.vendedor.bairro,
					  		     cidade: $scope.vendedor.cidade,
			  		                cep: $scope.vendedor.cep,
				  		             uf: $scope.vendedor.uf,			  		                
			  		       dataCadastro: moment($scope.vendedor.dataCadastro).format('YYYY-MM-DD'),
			  		               tipo: $scope.vendedor.tipo,
				  		          login: $scope.vendedor.login,
				  		          senha: $scope.vendedor.senha,
 		  		       	     observacao: $scope.vendedor.observacao
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
    					console.log(data);
					 });

		$scope.buscarDadosVendedor();		

		// limpa os campos do formulário
		$scope.vendedor.nome="";
		$scope.vendedor.sobrenome="";
		$scope.vendedor.rg="";
		$scope.vendedor.cpf="";
		$scope.vendedor.telefoneFixo="";
		$scope.vendedor.telefoneCelular="";
		$scope.vendedor.endereco="";
		$scope.vendedor.bairro="";
		$scope.vendedor.cidade="";
		$scope.vendedor.cep="";
		$scope.vendedor.dataCadastro="";	
		$scope.vendedor.tipo="";
		$scope.vendedor.login="";
		$scope.vendedor.senha="";
		$scope.vendedor.observacao="";

	}

	$scope.deletaVendedor = function(id_deletar){

		$http({
		method  : 'POST',
		url     :  url_base+"Controller/vendedor_controller.php?function=deletar",
		data: {
		    	id_deletar        : id_deletar,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert('deletou');
      	});

		$scope.buscarDadosVendedor();
		// atualiza a lista

	}


	$scope.editaVendedor = function(){
					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/vendedor_controller.php?function=editar",
					  data: {



					  		      nome : $scope.vendedor.nome,
					  		  sobrenome: $scope.vendedor.sobrenome,
					  		         rg: $scope.vendedor.rg,
				  		            cpf: $scope.vendedor.cpf,
				           telefoneFixo: $scope.vendedor.telefoneFixo,
				        telefoneCelular: $scope.vendedor.telefoneCelular,
					  	       endereco: $scope.vendedor.endereco,
				  		     	 bairro: $scope.vendedor.bairro,
					  		     cidade: $scope.vendedor.cidade,
			  		                cep: $scope.vendedor.cep,
				  		             uf: $scope.vendedor.uf,			  		                
			  		       dataCadastro: moment($scope.vendedor.dataCadastro).format('YYYY-MM-DD'),
 		  		       	     observacao: $scope.vendedor.observacao,
 		  		       	           tipo: $scope.vendedor.tipo,
	 		  		       	      login: $scope.vendedor.login,
	 		  		       	      senha: $scope.vendedor.senha,
		 		              id_editar: $scope.vendedor.id_vendedor
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
					 	console.log(data);
					 	alert("Alterado com sucesso!")
					 });

					 $scope.buscarDadosVendedor();
					 // atualiza a lista


	}	





		$scope.listarUm = function(id_listar){

		$http({
			url     :  url_base+"Controller/vendedor_controller.php?function=listar_um&id_listar="+id_listar,
			dataType: 'json',
		}).then(function (retorno) {

			dataCad = new Date(retorno.data.data_cadastro);
			dataCad.setDate(dataCad.getDate() + 1);

			$scope.vendedor.nome = retorno.data.nome;
			$scope.vendedor.sobrenome = retorno.data.sobrenome;
			$scope.vendedor.rg = retorno.data.rg;
			$scope.vendedor.cpf = retorno.data.cpf;
			$scope.vendedor.telefoneFixo = retorno.data.telefone_fixo;
			$scope.vendedor.telefoneCelular = retorno.data.telefone_celular;
			$scope.vendedor.endereco = retorno.data.endereco;
			$scope.vendedor.bairro = retorno.data.bairro;
			$scope.vendedor.cidade = retorno.data.cidade;
			$scope.vendedor.cep = retorno.data.cep;
			$scope.vendedor.uf = retorno.data.uf;	  		                
			$scope.vendedor.dataCadastro = dataCad;
			$scope.vendedor.observacao = retorno.data.observacao;
			$scope.vendedor.tipo = retorno.data.tipo;
			$scope.vendedor.login = retorno.data.login;
			$scope.vendedor.senha = retorno.data.senha;
			$scope.vendedor.id_vendedor = retorno.data.id_vendedor;

			$rootScope.mostrarBtnCad = false;
			$rootScope.mostrarBtnEdit = true;			

      	});

	}	





   
}]);