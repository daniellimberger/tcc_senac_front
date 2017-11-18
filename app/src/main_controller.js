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

    //$rootScope.logado = false;


    if($rootScope.logado != true){
                    $rootScope.logado = false;
                    $rootScope.idVendedor = "";
                    $rootScope.exibeBtSair = false;
                    window.location.href = '#!/login';     
    }

}]);