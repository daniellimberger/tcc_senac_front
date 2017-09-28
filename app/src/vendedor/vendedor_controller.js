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
						      nome: 'Ligiano', 
						 sobrenome: 'Azzi',
						        rg: '00.000.000/0001-10',
				               cpf: '007.836.980-03',
                      telefoneFixo: '51 3468-9000',				               
                   telefoneCelular: '51 9305.6977',	                    
			              endereco: 'Rua Sete Povos, 78',
				            bairro: 'Nossa Sra. das Graças',
				            cidade: 'Canoas',
				               cep: '94920-170',
				                uf: 'RS',
                      dataCadastro: new Date(),
	                    observacao: 'nada a declarar'
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