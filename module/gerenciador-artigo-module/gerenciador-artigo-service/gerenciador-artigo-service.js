GerenciadorArtigoModule.factory("GerenciadorArtigoService", function() {

    var artigoList = [
        // {
        //     codigo: 1,
        //     titulo: "Artigo 001 de 2020",
        //     conteudo: "Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.",
        //     dataPublicacao: "14/06/2020",
        //     diaPublicacao: "14",
        //     numeroMesPublicacao: 6,
        //     mesPublicacao: "Junho",
        //     anoPublicacao: "2020",
        //     autor: "José Quintin",
        // },
        // {
        //     codigo: 2,
        //     titulo: "Artigo 002 de 2020",
        //     conteudo: "Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.",
        //     dataPublicacao: "15/06/2020",
        //     diaPublicacao: "15",
        //     numeroMesPublicacao: 6,
        //     mesPublicacao: "Junho",
        //     anoPublicacao: "2020",
        //     autor: "Hassya Havivah",
        // },
        // {
        //     codigo: 3,
        //     titulo: "Artigo 003 de 2020",
        //     conteudo: "Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim. Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt labore dolore magna aliqua enim.",
        //     dataPublicacao: "16/06/2020",
        //     diaPublicacao: "16",
        //     numeroMesPublicacao: 6,
        //     mesPublicacao: "Junho",
        //     anoPublicacao: "2020",
        //     autor: "José Quintin",
        // }
    ];

    var registrarArtigo = function(artigoParameter) {
        artigoList.push(formatarArtigo(artigoParameter));
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
        return artigoList;
    }

    // FIXME [PLBLOG-XXXXXXXXXXXXXX] {} -- "Criar service utilitaria para manipulacao de Datas Formatadas"
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