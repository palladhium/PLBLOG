GerenciadorAutorizacaoModule.factory("GerenciadorAutorizacaoService", function() {

    var UsuarioAutenticacaoList = [];

    var UsuarioAutenticacao = {
        codigo: null,
        email: null,
        senha: null,
    };

    const CHAVE_LOCAL_STORAGE = "TB_USUARIO_SISTEMA";

    var codigo = 0;

    var realizarAutenticacaoUsuario = function(UsuarioAutenticacaoParameter) {
        codigo++;
        UsuarioAutenticacaoParameter.codigo = codigo;
        UsuarioAutenticacaoList.push(UsuarioAutenticacaoParameter);
    };

    var realizarAutenticacaoUsuarioLocalStorage = function(UsuarioAutenticacaoParameter) {
        UsuarioAutenticacaoParameter.codigo = codigo + 1;
        let UsuarioAutenticacaoSerialized = serializedAutenticacaoUsuarioSerialized(UsuarioAutenticacaoParameter);
        UsuarioAutenticacaoList.push(UsuarioAutenticacaoSerialized);
        localStorage.setItem(CHAVE_LOCAL_STORAGE, UsuarioAutenticacaoSerialized);
        recuperarUsuarioLogado();
    };

    function serializedAutenticacaoUsuarioSerialized(UsuarioAutenticacaoParameter) {
        return JSON.stringify(UsuarioAutenticacaoParameter);
    };

    function deserializarAutenticacaoUsuarioDeserialized() {
        return JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE));
    };

    var recuperarUsuarioLogado = function() {
       return deserializarAutenticacaoUsuarioDeserialized();
    };

    recuperarUsuarioLogado();

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
        realizarAutenticacaoUsuarioLocalStorage: realizarAutenticacaoUsuarioLocalStorage,
    };

});