GerenciadorArtigoModule.controller("GerenciadorArtigoController", function($scope, $location, $routeParams, GerenciadorArtigoService, GerenciadorAutorizacaoService) {

    $scope.artigo = {};
    $scope.artigoList = [];

    function initializer() {
        carregarArtigosPublicados();
    };

    $scope.registrarArtigo = function(artigoParameter) {
        var promise = GerenciadorArtigoService.registrarArtigo(artigoParameter);
            promise.then(function(response) {
              $location.path("/artigos");
            });
            promise.catch(function(error) {
              window.alert("Erro ao tentar Salvar o Artigo!");
              console.log("Erro ao tentar Salvar o Artigo!");
            });
    };

    function carregarArtigosPublicados() {
        var artigoFormatadoList = [];
        var promise = GerenciadorArtigoService.carregarArtigosPublicados();
            promise.then(function(response) {
                $scope.artigoList = response.data;
            });
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
