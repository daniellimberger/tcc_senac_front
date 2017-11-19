myApp.controller('produtoController',  ['$scope', '$http','$rootScope', '$mdDialog', '$state',  function($scope, $http, $rootScope, $mdDialog, $state){

	$rootScope.tituloPagina = "Produto";

	$rootScope.mostrarBtnCad = true;			


	$scope.buscarDadosProduto = function(){
		$http
		.get(url_base+"Controller/produto_controller.php?function=listar_todos")
		.then(function(data){
				$scope.produtos = data;

		});
	}
	$scope.buscarDadosProduto();


	$scope.buscarDadosMarca = function(){
		$http
		.get(url_base+"Controller/marca_controller.php?function=listar_todos")
		.then(function(data){
				$scope.marcas = data;
				console.log($scope.marcas);				
		});
	}
	$scope.buscarDadosMarca();





	$scope.produto = [];

	$scope.cadastraProduto = function(){
		$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/produto_controller.php?function=cadastrar",
					  data: {
					  		nome : $scope.produto.nome,
					  		marca: $scope.produto.marca,
					  		valor: $scope.produto.valor
					        },
					        
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 });

		$scope.buscarDadosProduto();
		$scope.produto.nome = "";
		$scope.produto.marca = "";
		$scope.produto.valor = "";



	}


	$scope.deletaProduto = function(id_deletar){


		$http({
		method  : 'POST',
		url     :  url_base+"Controller/produto_controller.php?function=deletar",
		data: {
		    	id_deletar        : id_deletar,
		    },
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)		
		}).then(function (data) {
			alert('Deletado com sucesso!');
      	});

		$scope.buscarDadosProduto();
		// atualiza a lista
		// poderia usar watch

	}


	$scope.editaProduto = function(){
					$http({
					  method  : 'POST',
					  url     :  url_base+"Controller/produto_controller.php?function=editar",
					  data: {
					  			 	 nome : $scope.produto.nome,
					  		         marca: $scope.produto.marca,
					  		         valor: $scope.produto.valor,
		 		                 id_editar: $scope.produto.id_produto
					        },
					  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					 }).then(function (data) {
					 	console.log(data);
					 	alert("Alterado com sucesso!")
					 });

					 	$scope.buscarDadosProduto();



	}		





	$scope.listarUm = function(id_listar){

		$http({
			url     :  url_base+"Controller/produto_controller.php?function=listar_um&id_listar="+id_listar,
			dataType: 'json',
		}).then(function (retorno) {


			$scope.produto.id_produto = retorno.data.id_produto;
			$scope.produto.nome = retorno.data.nome;
			$scope.produto.marca = retorno.data.marca;
			$scope.produto.valor = retorno.data.valor;


			$rootScope.mostrarBtnCad = false;
			$rootScope.mostrarBtnEdit = true;			

      	});

	}	


$scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'produto_cria_marca.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };	

  	function DialogController($scope, $mdDialog) {
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    $scope.cancel = function() {
	      $mdDialog.cancel();
	    };

	    $scope.answer = function(answer) {
			$http({
				method  : 'POST',
				url     :  url_base+"Controller/marca_controller.php?function=cadastrar_marca",
				data: {
						nome : $scope.novaMarca
				    },
				    
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
			}).then(function (retorno) {

				 $state.reload();

		 	});		



	      $mdDialog.hide(answer);
	      // cadastrar
	    };
  	}


	
}]);