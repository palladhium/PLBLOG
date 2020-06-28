GerenciadorAutorizacaoModule.factory("GerenciadorAutorizacaoService", function() {

    var UsuarioAutenticacaoList = [];

    var UsuarioAutenticacao = {
        codigo: null,
        email: null,
        senha: null,
    };

    // FIXME [PLBLOG-XXXXXXXXXXXXXX]
    const CHAVE_LOCAL_STORAGE = "TB_USUARIO_SISTEMA";

    var codigo = 0;

    var realizarAutenticacaoUsuario = function(UsuarioAutenticacaoParameter) {
        codigo++;
        UsuarioAutenticacaoParameter.codigo = codigo;
        UsuarioAutenticacaoList.push(UsuarioAutenticacaoParameter);
    };

    // FIXME [PLBLOG-XXXXXXXXXXXXXX]
    var realizarAutenticacaoUsuarioLocalStorage = function(UsuarioAutenticacaoParameter) {
        UsuarioAutenticacaoParameter.codigo = codigo + 1;
        let UsuarioAutenticacaoSerialized = serializedAutenticacaoUsuarioSerialized(UsuarioAutenticacaoParameter);
        UsuarioAutenticacaoList.push(UsuarioAutenticacaoSerialized);
        localStorage.setItem(CHAVE_LOCAL_STORAGE, UsuarioAutenticacaoSerialized);
        recuperarUsuarioLogado();
    };

    // FIXME [PLBLOG-XXXXXXXXXXXXXX]
    function serializedAutenticacaoUsuarioSerialized(UsuarioAutenticacaoParameter) {
        return JSON.stringify(UsuarioAutenticacaoParameter);
    };

    // FIXME [PLBLOG-XXXXXXXXXXXXXX]
    function deserializarAutenticacaoUsuarioDeserialized() {
        return JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE));
    };

    // FIXME [PLBLOG-XXXXXXXXXXXXXX]
    var recuperarUsuarioLogado = function() {
        console.log(deserializarAutenticacaoUsuarioDeserialized());
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