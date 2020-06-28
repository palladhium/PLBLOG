GerenciadorAutorizacaoModule.factory("GerenciadorAutorizacaoService", function() {

    var UsuarioAutenticacaoList = [];
    var UsuarioAutenticacao = {
        codigo: null,
        email: null,
        senha: null,
    };
    var codigo = 0;


    var realizarAutenticacaoUsuario = function(UsuarioAutenticacaoParameter) {
        codigo++;
        UsuarioAutenticacaoParameter.codigo = codigo;
        UsuarioAutenticacaoList.push(UsuarioAutenticacaoParameter);
    };

    var recuperarUsuarioLogado = function(codigoUsuario) {
        for( let indexX = 0 ; indexX < UsuarioAutenticacaoList.length ; indexX++ ) {
            if(UsuarioAutenticacaoList[indexX].codigo = codigoUsuario) {
                return UsuarioAutenticacao;
                break;
            }
        }
    };

    return {
        realizarAutenticacaoUsuario : realizarAutenticacaoUsuario,
        recuperarUsuarioLogado: recuperarUsuarioLogado,
    };

});