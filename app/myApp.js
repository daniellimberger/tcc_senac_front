 // referência, de onde eu tirei a biblioteca do campo de data 
 // https://github.com/alenaksu/mdPickers //

       var myApp = angular.module("myApp", ["ngMaterial", "ui.router"]); 
 
		myApp.config(function($stateProvider, $urlRouterProvider, $mdIconProvider) {
	    
	   

		// configurando as rotas
	    $urlRouterProvider.otherwise('/home');
	    
	    $stateProvider
	        
	        .state('login', {
	            url: '/login',
	            templateUrl: 'login.html',
	            controller: 'loginController'
	        })
	        .state('home', {
	            url: '/home',
	            templateUrl: 'home.html',
	            controller: 'homeController'
	        })
	        .state('cliente', {
	            url: '/cliente',
	            templateUrl: 'cliente.html',
  				controller: 'clienteController'
	        })   
	        .state('vendedor', {
	            url: '/vendedor',
	            templateUrl: 'vendedor.html',
  				controller: 'vendedorController'
	        })   	           
	        .state('produto', {
	            url: '/produto',
	            templateUrl: 'produto.html',
  				controller: 'produtoController'
	        })   	           
	        .state('relatorio', {
	            url: '/relatorio',
	            templateUrl: 'relatorio.html',
  				controller: 'relatorioController'
	        })  	        
	        .state('relatorio_pedido', {
	            url: '/relatorio_pedido',
	            templateUrl: 'relatorio_pedido.html',
  				controller: 'relatorioPedidoController'
	        })   	           
	        .state('relatorio_produto', {
	            url: '/relatorio_produto',
	            templateUrl: 'relatorio_produto.html',
  				controller: 'relatorioProdutoController'
	        })	 
	        .state('relatorio_cliente', {
	            url: '/relatorio_cliente',
	            templateUrl: 'relatorio_cliente.html',
  				controller: 'relatorioClienteController'
	        })	 	               
	        .state('pedido', {
	            url: '/pedido',
	            templateUrl: 'pedido.html',
  				controller: 'pedidoController'

	        });      	         

		});

		myApp.config(function($mdIconProvider) {
			    $mdIconProvider
 
	      .defaultIconSet("./assets/svg/avatars.svg", 128)
    	  .icon("menu", "./assets/svg/menu.svg", 24)
    	  .icon("icon_empresas", "./assets/svg/ic_store_mall_directory_black_24px.svg", 24)
    	  .icon("icon_vendedores", "./assets/svg/ic_business_center_black_24px.svg", 24)
    	  .icon("icon_estoque", "./assets/svg/ic_dns_black_24px.svg", 24)    	  
    	  .icon("icon_relatorios", "./assets/svg/ic_assessment_black_24px.svg", 24) 
    	  .icon("icon_pedidos", "./assets/svg/ic_content_paste_black_24px.svg", 24)   	  
    	  .icon("icon_add", "./assets/svg/ic_add_circle_outline_black_24px.svg", 24) 
    	  .icon("icon_search", "./assets/svg/ic_search_black_24px.svg", 24)     	    	      	  
    	  .icon("icon_search", "./assets/svg/ic_search_black_24px.svg", 24)     	    	      	      	  
    	  .icon("icon_logout", "./assets/svg/logout.svg", 24)     	    	      	      	  

		});


		// configurando o tema do angular material
		myApp.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('myTheme')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});


myApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});


		// definindo url base, isto serve para que se o sistema mudar de servidor, eu precise alterar somente aqui
		var url_base = "http://localhost:8081/";