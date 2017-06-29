myApp.controller('mainController',  ['$scope', '$mdSidenav',function($scope, $mdSidenav){

    $scope.menu = [
        { item: "home"  , link: "/app/#!/home"  , avatar:"icon_empresas"},    
        { item: "clientes"  , link: "/app/#!/cliente"  , avatar:"icon_empresas"},
        { item: "vendedores", link: "/app/#!/vendedor" , avatar:"icon_vendedores"},
        { item: "produto"   , link: "/app/#!/produto"  , avatar:"icon_estoque"},
        { item: "relatorio", link: "/app/#!/relatorio", avatar:"icon_relatorios"},
        { item: "pedido"   , link: "/app/#!/pedido", avatar:"icon_pedidos"},
    ];

    // recebe parametro pra abrir o menu quando o tamanho da janela for medium
    $scope.toggleLeft = buildToggler('left');

    // nao preciso deste    
//    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

		console.log("teste main controller");	

}]);