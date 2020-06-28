var GerenciadorArtigoModule = angular.module("GerenciadorArtigoModule", []);

GerenciadorArtigoModule.config(function($routeProvider) {

    $routeProvider
        .when("/criar-artigo", {
            controller: "GerenciadorArtigoController",
            templateUrl: "module/gerenciador-artigo-module/gerenciador-artigo-view/gerenciador-artigo-cadastrar-view.html"
        })
        .when("/artigos", {
            controller: "GerenciadorArtigoController",
            templateUrl: "module/gerenciador-artigo-module/gerenciador-artigo-view/gerenciador-artigo-listar-view.html"
        })
        .when("/:anoPublicacao/:mesPublicacao/:codigoArtigo", {
            controller: "GerenciadorArtigoController",
            templateUrl: "module/gerenciador-artigo-module/gerenciador-artigo-view/gerenciador-artigo-detalhar-view.html"
        })

});