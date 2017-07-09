 // https://github.com/alenaksu/mdPickers //

         var myApp = angular.module("myApp", ["ngMaterial", "ui.router"]); 
 
		myApp.config(function($stateProvider, $urlRouterProvider, $mdIconProvider) {
	    
	    $urlRouterProvider.otherwise('/home');
	    
	    $stateProvider
	        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('home', {
	            url: '/home',
	            templateUrl: 'home.html',
	            controller: 'homeController'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
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



    	  

		});

		myApp.config(function($mdThemingProvider) {
		  $mdThemingProvider.theme('myTheme')
		    .primaryPalette('blue-grey')
		    .accentPalette('grey');
		});


		var url_base = "http://localhost:8081/";