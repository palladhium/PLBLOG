GerenciadorArtigoModule.factory("GerenciadorArtigoService", function($http) {

    const URL_ARTIGO_SAVE = "http://localhost:9090/artigo/save";
    const URL_ARTIGO_FINDALL = "http://localhost:9090/artigo/findAll";
    const CHAVE_LOCAL_STORAGE = "TB_ARTIGO";

    let codigo = 0;

    var artigoList = [];

    var registrarArtigo = function(artigoParameter) {
        let Artigo = formatarArtigo(artigoParameter);
            Artigo.codigo = codigo + 1;
        return $http.post(URL_ARTIGO_SAVE, Artigo);
    };

    function registrarArtigoLocalStorage(artigoParameter) {
        artigoParameter.codigo = codigo + 1;
        let ArtigoSerialized = serializedArtigo(artigoParameter);
        localStorage.setItem(CHAVE_LOCAL_STORAGE, ArtigoSerialized);
    };

    function serializedArtigo(UsuarioAutenticacaoParameter) {
        return JSON.stringify(UsuarioAutenticacaoParameter);
    };

    function formatarArtigo(artigoParameter) {
        var artigo = {
            codigo: artigoList.length + 1,
            titulo: artigoParameter.titulo,
            conteudo: artigoParameter.conteudo,
            dataPublicacao: new Date(),
            numeroDiaPublicacao: "16",
            numeroMesPublicacao: recuperarNumeroDiaPublicacao(),
            mesPublicacao: "Junho",
            anoPublicacao: "2020",
            autor: "José Quintin",
          }
        return artigo;
    };

    var carregarArtigosPublicados = function() {
        return $http.get(URL_ARTIGO_FINDALL);
    }

    function recuperarArtigosPublicadosLocalStorage() {
        return JSON.parse(localStorage.getItem(CHAVE_LOCAL_STORAGE));
    };

    // FIXME: [PLBLOG-XXXXXXXXXXXXXX] {} -- "Criar service utilitaria para manipulacao de Datas Formatadas"
    function recuperarNumeroDiaPublicacao() {
        var date = new Date();
        // return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        return date.getDay();
    };

    return {
        registrarArtigo: registrarArtigo,
        carregarArtigosPublicados: carregarArtigosPublicados,
    };

});
