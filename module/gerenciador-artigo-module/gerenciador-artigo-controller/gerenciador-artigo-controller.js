GerenciadorArtigoModule.controller("GerenciadorArtigoController", function($scope, $location, $routeParams, GerenciadorArtigoService, GerenciadorAutorizacaoService) {

    $scope.artigo = {};
    $scope.artigoList = [];

    function initializer() {
        carregarArtigosPublicados();
    };

    $scope.registrarArtigo = function(artigoParameter) {
        GerenciadorArtigoService.registrarArtigo(artigoParameter);
        $location.path("/artigos");
    };

    function carregarArtigosPublicados() {
        $scope.artigoList = GerenciadorArtigoService.carregarArtigosPublicados();
        return $scope.artigoList;
    };

    $scope.redirecionarPaginaNovoArtigo = function() {
        $location.path("/criar-artigo");
    };

    $scope.redirecionarPaginaDetalharArtigo = function(artigoParameter) {
        $location.path(artigoParameter.anoPublicacao + "/" + artigoParameter.numeroMesPublicacao + "/" + artigoParameter.codigo);
    };

    initializer();

});