GerenciadorAutorizacaoModule.controller("GerenciadorAutorizacaoController", function($scope, $location, GerenciadorAutorizacaoService) {

    $scope.realizarAutenticacaoUsuario = function(UsuarioAutenticacaoParameter) {
        if(isCamposValid(UsuarioAutenticacaoParameter)) {
            GerenciadorAutorizacaoService.realizarAutenticacaoUsuario(UsuarioAutenticacaoParameter);
            $location.path("/artigos");
        }
    };

    $scope.realizarAutenticacaoUsuarioLocalStorage = function(UsuarioAutenticacaoParameter) {
        if(isCamposValid(UsuarioAutenticacaoParameter)) {
            GerenciadorAutorizacaoService.realizarAutenticacaoUsuarioLocalStorage(UsuarioAutenticacaoParameter);
            $location.path("/artigos");
        }
    };

    function isCamposValid(UsuarioAutenticacaoParameter) {
        if((UsuarioAutenticacaoParameter != undefined) && 
           (UsuarioAutenticacaoParameter.email == "plataforma@plataformalancamento.com.br" && 
            UsuarioAutenticacaoParameter.senha == "plataforma") ||
           (UsuarioAutenticacaoParameter.email == "josequintino@hotmail.com.br" && 
            UsuarioAutenticacaoParameter.senha == "plataforma") ||
            (UsuarioAutenticacaoParameter.email == "02735025144" && 
             UsuarioAutenticacaoParameter.senha == "plataforma")) {
           return true; 
        } else {
            alert("Dados Inválidos!");
        }
        return false;
    };

});