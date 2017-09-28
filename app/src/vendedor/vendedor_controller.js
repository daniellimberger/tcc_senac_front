myApp.controller('vendedorController',  ['$scope', '$http','$rootScope',  function($scope, $http, $rootScope, $mdDateLocale){



	$rootScope.tituloPagina = "Cadastro de Vendedor";

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
 		  		       	     observacao: $scope.vendedor.observacao
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
    					console.log(data);
					 });

		$scope.buscarDadosVendedor();		

		// limpa os campos do formulário
		$scope.nome="";
		$scope.sobrenome="";
		$scope.rg="";
		$scope.cpf="";
		$scope.telefoneFixo="";
		$scope.telefoneCelular="";
		$scope.endereco="";
		$scope.bairro="";
		$scope.cidade="";
		$scope.cep="";
		$scope.dataCadastro="";	
		$scope.observacao="";

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





   
}]);