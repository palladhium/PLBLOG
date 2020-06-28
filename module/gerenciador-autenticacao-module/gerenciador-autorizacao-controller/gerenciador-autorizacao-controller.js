GerenciadorAutorizacaoModule.controller("GerenciadorAutorizacaoController", function($scope, $location, GerenciadorAutorizacaoService) {

    $scope.realizarAutenticacaoUsuario = function(UsuarioAutenticacaoParameter) {
        if(isCamposValid(UsuarioAutenticacaoParameter)) {
            GerenciadorAutorizacaoService.realizarAutenticacaoUsuario(UsuarioAutenticacaoParameter);
            $location.path("/artigos");
        }
    };

    function isCamposValid(UsuarioAutenticacaoParameter) {
        if((UsuarioAutenticacaoParameter != undefined) && 
           (UsuarioAutenticacaoParameter.email == "plataforma@plataformalancamento.com.br" && 
            UsuarioAutenticacaoParameter.senha == "plataforma") ||
           (UsuarioAutenticacaoParameter.email == "josequintino@hotmail.com.br" && 
            UsuarioAutenticacaoParameter.senha == "plataforma")) {
           return true; 
        } else {
            alert("Dados Inválidos!");
        }
        return false;
    };

});