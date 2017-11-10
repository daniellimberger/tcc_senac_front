myApp.controller('mainController',  ['$scope', '$mdSidenav', '$rootScope',function($scope, $mdSidenav, $rootScope){



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