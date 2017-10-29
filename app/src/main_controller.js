myApp.controller('mainController',  ['$scope', '$mdSidenav', '$rootScope',function($scope, $mdSidenav, $rootScope){

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


    $scope.logout = function(){
                    $rootScope.logado = false;
                    $rootScope.idVendedor = "";
                    $rootScope.exibeBtSair = false;
                    window.location.href = '#!/login';
    }

    $rootScope.logado = false;


    if($rootScope.logado == false){
                    $rootScope.logado = false;
                    $rootScope.idVendedor = "";
                    $rootScope.exibeBtSair = false;
                    alert("Você precisa estar logado para ter acesso ao painel do sistema!");
                    window.location.href = '#!/login';     
    }

}]);