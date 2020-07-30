GerenciadorArtigoModule.controller("GerenciadorArtigoDetalharController", function($scope, $location, $routeParams, GerenciadorArtigoService) {

    $scope.artigoList = [];

    function initializer() {
        $scope.carregarArtigosPublicados();
    };

    $scope.carregarArtigosPublicados = function() {
        $scope.artigoList = GerenciadorArtigoService.carregarArtigosPublicados();
        return $scope.artigoList;
    };

    initializer();

});