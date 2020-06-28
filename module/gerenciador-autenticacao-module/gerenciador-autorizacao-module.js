var GerenciadorAutorizacaoModule = angular.module("GerenciadorAutorizacaoModule", []);

GerenciadorAutorizacaoModule.config(function($routeProvider) {

    $routeProvider
        .when("/", {
            controller: "GerenciadorAutorizacaoController",
            templateUrl: "module/gerenciador-autenticacao-module/gerenciador-autorizacao-view/gerenciador-autorizacao-view.html"
        })
        .when("/login", {
            controller: "GerenciadorAutorizacaoController",
            templateUrl: "module/gerenciador-autenticacao-module/gerenciador-autorizacao-view/gerenciador-autorizacao-view.html"
        })
});