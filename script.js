const movies = [
    { 
        title: 'Um Sonho de Liberdade',
        genre: 'Drama',
        year: 1994,
        summary: 'Dois homens presos se unem ao longo de vários anos, encontrando consolo e redenção eventual atrás de atos de decência comum.',
        image: 'https://media.gazetadopovo.com.br/2022/04/15182712/usdl.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Amazon Prime Video', 'Google Play Filmes', 'Adoro Cinema', 'Apple TV'] 
    },

    { 
        title: 'À Procura da Felicidade', 
        genre: 'Drama', 
        year: 2006,
        summary: 'Um vendedor em dificuldades assume a custódia de seu filho enquanto está prestes a iniciar uma carreira profissional que mudará sua vida.',
        image: 'https://i2.wp.com/www.konteudos.com.br/blog/wp-content/uploads/2020/06/exemplo-comportamento-empreendedor.gif?resize=640%2C325&ssl=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'GloboPlay', 'Microsoft Store', 'Amazon Prime Vídeo', 'Max']
    },
    { 

        title: 'A Lista de Schindler', 
        genre: 'Drama',
        year: 1993,
        summary: 'Na Polônia ocupada pelos nazistas durante a Segunda Guerra Mundial, Oskar Schindler gradualmente se preocupa com sua força de trabalho judia depois de testemunhar sua perseguição pelos nazistas.', 
        image: 'https://f.i.uol.com.br/fotografia/2019/04/24/15561442425cc0e0728387b_1556144242_3x2_md.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Amazon Prime Video', 'Google Play Filmes', 'iTunes', 'Apple TV']
    },

    { 
        title: 'À Espera de um Milagre', 
        genre: 'Drama',
        year: 1999,
        summary: 'A vida dos guardas do corredor da morte muda após um preso aparentemente milagroso chegar',
        image: 'https://www.pensarcontemporaneo.com/content/uploads/2019/10/Michael_Clarke_Duncan.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Amazon Prime Vídeo', 'Disney+', 'Popcornflix', 'Google Play Movies', 'Microsoft Store', 'FilmStruck']
    },

    { 
        title: 'O Menino do Pijama Listrado',
        genre: 'Drama',
        year: 2008,
        summary: 'Durante a Segunda Guerra Mundial, Bruno, um garoto de oito anos, e sua família saem de Berlim para residir próximo a um campo de concentração, onde seu pai acaba de se tornar comandante. Infeliz e solitário, ele vagueia fora de sua casa e certo dia encontra Shmuel, um menino judeu de sua idade. Embora a cerca de arame farpado do campo os separem, os meninos começam uma amizade proibida.',
        image: 'https://fanfm.com.br/wp-content/uploads/2020/03/screenshot-osegredo.com_.br-2020.03.10-11-02-20.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'GloboPlay', 'Prime Vídeo' ]

    },

    { 
        title: 'Meninas Não Choram',
        genre: 'Drama',
        year: 2024,
        summary: 'Pipa, 16 anos, é fã de futebol feminino e o destaque do time da escola. Popular e com um futuro promissor, ela vê os seus planos interrompidos com o diagnóstico de leucemia e uma internação. Mas a jornada no hospital é marcada pela amizade de Beca.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/05/14/1265795058-56af28271bbfa02248b56c91a0664c9e.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']

    },

    { 
        title: 'Minha Culpa',
        genre: 'Drama',
        year: 2023,
        summary: 'Noah deixa sua cidade, namorado e amigas para se mudar para a mansão do novo marido da mãe. Lá conhece seu novo meio-irmão, Nick, e suas personalidades não batem desde o início. Mas a atração que sentem um pelo outro cresce imensamente.',
        image: 'https://midias.agazeta.com.br/2023/06/06/filme-minha-culpa-da-amazon-prime-video-1759843-article.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Youtube']

    },

    { 
        title: 'Sempre ao Seu Lado',
        genre: 'Drama',
        year: 2009,
        summary: 'Professor universitário encontra na estação de trem um filhote de cachorro da raça akita, conhecida por sua lealdade. O cão passa a acompanhá-lo até a estação de trem e esperar sua volta. Até que um acontecimento inesperado altera sua vida.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/23/1016342424-23115945214176.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Globo Play', 'Prime Vídeo', 'Apple TV']

    },

    { 
        title: 'Milagre na Cela 7',
        genre: 'Drama',
        year: 2019,
        summary: 'Memo, um pastor de ovelhas com deficiência mental, vive com sua filha e avó em uma vila na costa turca do mar Egeu. Um dia, sua vida é virada de cabeça para baixo quando a filha do comandante morre e Memo é acusado do assassinato e condenado à morte.',
        image: 'https://ofuxico.com.br/img/upload/noticias/2020/05/19/milagre_na_cela_7_divulgacao_netflix_378154_36.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Google Play']

    },

    { 
        title: 'O Quarto de Jack',
        genre: 'Drama',
        year: 2015,
        summary: 'Joy e seu filho Jack vivem isolados em um quarto. O único contato que ambos têm com o mundo exterior é a visita periódica do Velho Nick, o homem que os mantém em cativeiro. Joy faz o possível para tornar suportável a vida no local. Quando seu filho completa cinco anos, ela decide elaborar um plano de fuga. Com a ajuda de Jack, ela tenta enganar Nick para retornar à realidade e apresentar um novo mundo a seu filho.',
        image: 'https://zh.rbsdirect.com.br/imagesrc/17954535.jpg?w=700',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Globo Play', 'Prime Vídeo', 'Papo de Cinema']

    },

    { 
        title: 'Intocáveis',
        genre: 'Drama',
        year: 2011,
        summary: 'Um milionário tetraplégico contrata um homem da periferia para ser o seu acompanhante, apesar de sua aparente falta de preparo. No entanto, a relação que antes era profissional cresce e vira uma amizade que mudará a vida dos dois.',
        image: 'https://favodomellone.com.br/wp-content/uploads/2015/03/Intoc%C3%A1%C3%ADveis-abre-blog.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Globo Play', 'Prime Vídeo', 'Apple TV']

    },

    { 
        title: 'A Culpa é das Estrelas',
        genre: 'Drama',
        year: 2014,
        summary: 'Hazel Grace Lancaster e Augustus Waters são dois adolescentes que se conhecem em um grupo de apoio para pacientes com câncer. Por causa da doença, Hazel sempre descartou a ideia de se envolver amorosamente, mas acaba cedendo ao se apaixonar por Augustus. Juntos, eles viajam para Amsterdã, onde embarcam em uma jornada inesquecível.',
        image: 'https://spdm.org.br/wp-content/uploads/2015/07/k2_items_src_cfaddfc2bf2e9424ee07b2e09e36451f.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Google Play', 'Prime Vídeo']

    },

    { 
        title: 'Como eu era Antes de Você',
        genre: 'Drama',
        year: 2016,
        summary: 'De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.',
        image: 'https://s2.glbimg.com/1B4lLlAetwpvvN7ZQPjks7bCO_U=/620x465/s.glbimg.com/jo/g1/f/original/2016/06/09/mebeforeyou1.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Google Play', 'Prime Vídeo', 'Amazon', 'Apple TV']

    },

    { 
        title: 'Extraordinário',
        genre: 'Drama',
        year: 2017,
        summary: 'Auggie Pullman é um garoto que nasceu com uma deformidade facial e precisou passar por 27 cirurgias plásticas. Aos 10 anos, ele finalmente começa a frequentar uma escola regular, como qualquer outra criança, pela primeira vez. No quinto ano, ele precisa se esforçar para conseguir se encaixar em sua nova realidade.',
        image: 'https://veja.abril.com.br/wp-content/uploads/2017/05/extraordinc3a1rio.png?w=720&h=440&crop=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Globoplay', 'Filmelier', 'Google Play']

    },

    { 
        title: 'Batman',
        genre: 'Ação', 
        year: 1989,
        summary: 'O cavaleiro das trevas de Gotham City começa sua guerra contra o crime com seu primeiro grande inimigo sendo o vilão maníaco conhecido como o Coringa.',
        image: 'https://assets.papelpop.com/wp-content/uploads/2022/02/the-batman.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'HBO Max', 'Amazon Prime Vídeo', 'Adoro Cinema', 'Google Play Filmes', 'Kanopy']
    },

    { 
        title: 'Duro de Matar', 
        genre: 'Ação',
        year: 1988,
        summary: 'Um policial de Nova York visita sua esposa em Los Angeles em um arranha-céu corporativo em véspera de Natal e é pego em uma situação de refém com terroristas.',
        image: 'https://www.rbsdirect.com.br/filestore/6/0/6/1/7/2/4_31de17589d14711/4271606_76853cdd415d175.jpg?w=700',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'Google Play Filmes', 'Apple TV', 'Disney+', 'Filmelier', 'Popcornflix']
    },

    { 
        title: 'Gladiador', 
        genre: 'Ação',
        year: 2000,
        summary: 'Um ex-general romano busca vingança contra o imperador corrupto que matou sua família e o enviou à escravidão.',
        image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/07/paul-mescal-gladiador-e1720448237478.png?w=717',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Amazon Prime Vídeo', 'Criterion Channel', 'Adoro Cinema', 'Popcornflix', 'Crackle']
    },

    { 
        title: 'Velocidade Máxima', 
        genre: 'Ação',
        year: 1994,
        summary: 'Um jovem policial deve impedir que uma bomba exploda em um ônibus da cidade, mantendo sua velocidade acima de 50mph.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/08/833743225-a8029b11aa7e64779b86c838f89afade.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'Disney+', 'Filmelier', 'Google Play Filmes', 'HBO Max']
    },

    { 
        title: 'Furiosa: Uma Saga Mad Max', 
        genre: 'Ação',
        year: 2024,
        summary: 'A jovem Furiosa cai nas mãos de uma grande horda de motoqueiros liderada pelo senhor da guerra Dementus. Varrendo Wasteland, eles encontram a Cidadela, presidida pelo Immortan Joe. Enquanto os dois tiranos lutam pelo domínio, Furiosa logo se vê em uma batalha ininterrupta para voltar para casa.',
        image: 'https://rollingstone.uol.com.br/media/_versions/2024/05/ingressos-para-furiosa-uma-saga-mad-max-ja-estao-a-venda-foto-divulgacaowarner-bros-pictures_widelg.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo']
    },

    { 
        title: 'De Volta ao Jogo', 
        genre: 'Ação',
        year: 2014,
        summary: 'John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança.',
        image: 'https://cinepop.com.br/wp-content/uploads/2014/11/CinePOp-4.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Prime Vídeo', 'Google Play']
    },

    { 
        title: 'O Livro de Eli', 
        genre: 'Ação',
        year: 2010,
        summary: 'Trinta anos depois da guerra ter dizimado o mundo, um guerreiro solitário chamado Eli caminha por horizontes arruinados dando esperança para os que restaram. Apenas um outro homem compreende o poder de um livro que Eli carrega e está determinado a se apoderar dele. Apesar de Eli preferir a paz, ele arriscará a sua vida para proteger a sua carga preciosa, pois precisa cumprir o seu destino de ajudar a restaurar a humanidade.',
        image: 'https://media.gazetadopovo.com.br/2010/03/619e7b7cde31dfd5db376b4818a6e9c4-gpMedium.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Youtube', 'Prime Vídeo']
    },

    { 
        title: 'Atirador', 
        genre: 'Ação',
        year: 2007,
        summary: 'O atirador Marksman Bob Lee Swagger deixa o exército e desaparece sem deixar rastros. Ele volta para impedir o assassinato do Presidente dos Estados Unidos, mas é enganado e passa a ser perseguido como criminoso.',
        image: 'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2024/03/24115934/atirador.jpg?resize=606%2C355&ssl=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Youtube', 'Google Play', 'Filmelier']
    },

    { 
        title: 'Parker', 
        genre: 'Ação',
        year: 2013,
        summary: 'Parker, um ladrão que segue uma rígida ética profissional, é traído por seus comparsas que o roubam e o abandonam à beira da morte. Ele decide se vingar de todos aqueles que o passaram para trás e conta com uma parceira para executar seu plano.',
        image: 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2013/3/70080/original/parker2.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Diamond Films', 'Youtube', 'Google Play', 'TecMundo']
    },

    { 
        title: 'Esquadrão Suicida', 
        genre: 'Ação',
        year: 2016,
        summary: 'Um time dos mais perigosos e encarcerados supervilões são contratados por uma agência secreta do governo, para combater uma poderosa entidade. No entanto, quando eles percebem que não foram escolhidos apenas para ter sucesso, mas também por sua óbvia culpa quando inevitavelmente falharem, terão que decidir se vale a pena ou não continuar correndo risco de morte.',
        image: 'https://s2.glbimg.com/Nu9BnFBgIKxcvw0IXGTc1efCle8=/smart/e.glbimg.com/og/ed/f/original/2016/08/04/margot-robbie.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Amazon Prime Vídeo', 'Google Play', 'Dilmelier', 'HBO Max']
    },

    { 
        title: 'Anjos da Noite', 
        genre: 'Ação',
        year: 2003,
        summary: 'Os vampiros mantém uma batalha e uma antiga rivalidade com um grupo de lobisomens. Quando um estudante de medicina mortal é ameaçado, uma vampira tenta protegê-lo e evitar que uma nova raça híbrida seja criada.',
        image: 'https://cinepop.com.br/wp-content/uploads/2018/09/anjosdanoite1.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Youtube', 'Dailymotion']
    },

    { 
        title: 'O Predador - A Caçada', 
        genre: 'Ação',
        year: 2022,
        summary: 'Em 1719, uma habilidosa guerreira Comanche tenta proteger seu povo de um predador alienígena altamente evoluído que caça humanos por esporte. Ela luta contra a natureza, colonizadores perigosos e essa criatura misteriosa para manter sua tribo segura.',
        image: 'https://cinepop.com.br/wp-content/uploads/2022/07/predador-a-cacada-1.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Disney +', 'Star +', 'Google Play', 'Apple TV']
    },

    { 
        title: 'As Crônicas de Nárnia', 
        genre: 'Ação',
        year: 2005,
        summary: 'Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/08/03/909641977-5e8f9baf9d9c258c4dfd47bbb7e87544.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Disney +', 'Prime Vídeo', 'Canais Globo']
    },
     
    { title: 'Rainha do Gelo', 
    genre: 'Ação',
    year: 2016,
    summary: 'Freya é traída por sua irmã Ravenna e decide se retirar. Dotada de poderes capazes de congelar seus inimigos, Freya ensina seus jovens soldados a nunca se apaixonar. Quando Eric e Sara descumprem a regra, a rainha faz de tudo para detê-los.',
    image: 'https://s2.glbimg.com/2GzRRa52Y5eykc4P4Vsh4diNeIU=/620x465/s2.glbimg.com/5CNeO4raTf3mX1sFM-enICJqP_I=/s.glbimg.com/jo/g1/f/original/2016/04/13/cacador_rainha_gelo-810x569.jpg',
    imageSize: { width: '100px', height: 'auto'},
    rating: 4,
    sites: ['Prime Vídeo', 'Telecine', 'Google Play']
},

    { 
        title: 'Horas de Desespero', 
        genre: 'Ação',
        year: 2015,
        summary: 'Uma família norte-americana se muda para o sudeste asiático em meio a um golpe de estado que poderá custar suas vidas.',
        image: 'https://www.rbsdirect.com.br/imagesrc/17680193.jpg?w=700',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Youtube', 'Prime Vídeo', 'Google Play', 'Apple TV']
    },

    { 
        title: 'Titanic', 
        genre: 'Romance',
        year: 1997,
        summary: 'A bordo do luxuoso transatlântico, Rose (Kate Winslet), uma jovem da alta sociedade, se sente pressionada com a vida que leva. Ao conhecer Jack (Leonardo DiCaprio), um artista pobre e aventureiro, os dois se apaixonam. Mas eles terão que enfrentar um desafio ainda maior que o preconceito social com o destino trágico do navio.',
        image: 'https://seriesbrasil.com.br/wp-content/uploads/2020/12/titanic.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Disney +', 'Amazon Prime Vídeo', 'Google Play']
    },

    { 
        title: 'Como Se Fosse A Primeira Vez', 
        genre: 'Romance',
        year: 2019,
        summary: 'O veterinário Henry Roth não pensa em relacionamentos estáveis. Mesmo assim, ele se apaixona por Lucy, uma garota que tem perda de memória recente devido a um acidente que sofreu anos atrás. Agora, Henry decide fazer de tudo para conquistar o coração de sua amada dia após dia.',
        image: 'https://seriesbrasil.com.br/wp-content/uploads/2020/12/Como-Se-Fosse-A-Primeira-Vez.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Apple TV', 'Amazon Prime Vídeo']
    },

    { 
        title: 'A  Proposta', 
        genre: 'Romance',
        year: 2009,
        summary: 'Ameaçada de ser deportada para o Canadá, Margaret (Sandra Bullock) alega que está noiva de seu funcionário Andrew (Ryan Reynolds). Ele concorda com a farsa em troca de uma promoção, mas, para a história ser consistente, ele precisa apresentá-la à sua família, no Alaska, e é aí que todo o plano corre o risco de ir por água abaixo.',
        image: 'https://seriesbrasil.com.br/wp-content/uploads/2020/12/A-Proposta.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Disney +', 'Apple TV', 'Amazon', 'Prime Vídeo', 'Rakuten TV']
    },

    { 
        title: 'Antes do Amanhecer', 
        genre: 'Romance',
        year: 1995,
        summary: 'Um jovem americano e uma jovem mulher francesa se conhecem em Viena, onde passam uma noite explorando a cidade e conhecendo um ao outro.',
        image: 'https://i.ytimg.com/vi/qxmkl7498-Y/sddefault.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['HBO Max', 'Amazon Channel', 'Amazon Prime Vídeo', 'FilmStruck', 'Google Play Movies']
    },

    { 
        title: 'Cidade dos Anjos', 
        genre: 'Romance',
        year: 1998,
        summary: 'Um anjo na Terra, que se apaixona por uma cirurgião cardíaca, considera se deseja renunciar à sua imortalidade e se tornar humano.',
        image: 'https://www.oficialhostgeek.com.br/wp-content/uploads/2018/12/cidadedosanjos21.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Disney Plus', 'Claro Vídeo', 'Amazon Prime Vídeo', 'Looke']
    },

    
    { 
        title: 'Continência no Amor', 
        genre: 'Romance',
        year: 2022,
        summary: 'Uma cantora se casa por conveniência com um militar que está prestes a ir para a guerra, mas uma tragédia transforma esse relacionamento de fachada em realidade.',
        image: 'https://portalpopline.com.br/wp-content/uploads/2022/11/continencia-ao-amor-2.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Netflix', 'Adoro Cinema']
    },

    { 
        title: 'Doce Novembro', 
        genre: 'Romance', 
        year: 2001,
        summary: 'Um homem workaholic e uma mulher de espírito livre se encontram e se apaixonam, embora o relacionamento tenha uma condição que vai contra suas normas.',
        image: 'https://media.fstatic.com/9_FpeMeUc6nvhTDOht_uPs0etZU=/640x480/smart/filters:format(webp)/media/movies/photos/2016/02/doce-novembro_t2517_NTjFjeR.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Apple TV', 'Amazon Vídeo', 'Adoro Cinema', 'Submarino', 'Rede Canais']
    },
    
    { 
        title: 'Como se fosse a Primeira Vez', 
        genre: 'Romance',
        year: 2004,
        summary: 'Um veterinário que se apaixona por uma mulher com perda de memória a curto prazo deve convencê-la todos os dias que eles estão juntos.',
        image: 'https://todocanal.oportaln10.com.br/wp-content/uploads/2021/08/filme-como-se-fosse-a-primeira-vez.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'Netflix', 'Google Play', 'Adoro Cinema', 'Apple TV']
    },

    { 
        title: 'Através da Minha Janela',
        genre: 'Romance',
        year: 2022,
        summary: 'Raquel é apaixonada pelo seu vizinho, Ares, um rapaz frio que vive em um mundo completamente diferente do seu. No entanto, o acaso acaba unindo os dois, que se veem envolvidos em uma trama de desejo e amor.',
        image: 'https://static.wixstatic.com/media/fe6907_59281cfe029c46c6a3dd66762b74c01e~mv2.jpg/v1/fill/w_640,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fe6907_59281cfe029c46c6a3dd66762b74c01e~mv2.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Dailymotion', 'TokyVideo']
    },

    { 
        title: 'Crepúsculo: Amanhecer',
        genre: 'Romance',
        year: 2008,
        summary: 'Isabella Swan é uma adolescente normal, fruto de um divórcio. Bella, como gosta de ser chamada, estava acostumada a viver com a sua mãe em Phoenix, mas com o trabalho de jogador de beisebol profissional de seu padrasto, ter uma rotina se tornava cada vez mais complicado. Com isso, Bella decide então morar com seu pai em Forks com o objetivo de terminar o ensino médio com mais estabilidade e também de passar mais tempo com ele.',
        image: 'https://s2.glbimg.com/fV2NSDBjtns7erAvURxHwMXE9CQ=/s.glbimg.com/og/rg/f/original/2015/07/09/amanhecer-606.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Amazon']
    },

    { 
        title: 'A Escolha',
        genre: 'Romance', 
        year: 2016,
        summary: 'Travis é um jovem que não acredita em relacionamentos, até que Gabby se muda para a casa ao lado. Ela o instiga logo de cara e os dois acabam se entregando a uma relação que nenhum deles esperava que acontecesse.',
        image: 'https://cdn.ome.lt/xJ2maeknl6yNvflRT67Mn53N488=/fit-in/1070x750/smart/filer_public/7f/26/7f2685fa-88e9-4a84-a8bc-d455ef6cd2c4/a-escolha-02.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Prime Vídeo', 'Google Play', 'Apple TV']
    },

    { 
        title: 'Loucas pra Casar',
        genre: 'Romance',
        year: 2015,
        summary: 'Malu, 40 anos, tinha a vida perfeita até se apaixonar por Samuel, o homem ideal. Após três anos de namoro com ele, nada de pedido de casamento. Um dia, ela percebe que estão faltando camisinhas no estoque dele. Desconfiada, Malu contrata um detetive particular e descobre que Samuel tem, não só uma, mas duas amantes. Resta saber quem ele vai levar para o altar: Malu, Lúcia, uma dançarina de boate, ou Maria, uma religiosa fanática.',
        image: 'https://smartgirls.com.br/wp-content/uploads/2014/12/loucas-pra-casar.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix', 'Globo Play', 'Google Play']
    },
    
    { 
        title: 'Morando com o Crush',
        genre: 'Romance',
        year: 2024,
        summary: 'Morando com o Crush é uma hilariante comédia romântica dirigida por Hsu Chien Hsin, que narra as atribulações de Luana (Giulia Benite) e Hugo (Vitor Figueiredo), dois colegas de escola que secretamente nutrem uma paixão um pelo outro. No entanto, manter seus sentimentos escondidos torna-se uma tarefa desafiadora quando Antônia (Carina Sacchelli), mãe de Hugo, e Fábio (Marcos Pasquim), pai de Luana, decidem iniciar um relacionamento e morar juntos. A vida amorosa de Antônia e Fábio compartilha uma curiosa semelhança: ambos têm lutado com a sorte no amor desde que a esposa de Fábio faleceu. A partir desse ponto, Luana e Hugo são obrigados a dividir o mesmo teto, enquanto tentam lidar com a presença constante de seus pais e o crescente interesse romântico um pelo outro. Com uma mistura de situações cômicas e momentos de doçura, Morando com o Crush promete arrancar risadas enquanto mostra que o amor pode florescer nos lugares mais inesperados.',
        image: 'https://br.web.img3.acsta.net/r_640_360/img/45/3d/453d419663b69b6a07101f8b08b224ca.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Pobreflix', 'Prime Vídeo']
    },

    { 
        title: 'Para Sempre',
        genre: 'Romance',
        year: 2012,
        summary: 'Paige e Leo são felizes recém-casados, mas um acidente deixa Paige em coma. Quando ela acorda, não reconhece Leo, tem problemas de relacionamento com os pais e se sente atraída pelo ex-noivo. Mas Leo está determinado a reconstruir seu casamento.',
        image: 'https://queridojeito.com/wp-content/uploads/2012/11/Frases-Para-Sempre.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Prime Vídeo', 'Youtube', 'Google Play Filmes' ]
    },

    { 
        title: 'Nerve - Um Jogo Sem Regras',
        genre: 'Romance',
        year: 2016,
        summary: 'A estudante Vee, pressionada pelos amigos, decide participar do jogo online Nerve, que faz desafios reais aos seus jogadores. Porém, o jogo toma um rumo assustador e, ao chegar no estágio final, Vee precisa tomar decisões que irão determinar o seu futuro.',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2016/11/nerve6.jpeg?quality=70&strip=info&w=558&w=636',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix', 'Telecine', 'Google Play Filmes', 'Amazon Prime Vídeo', 'Youtube' ]
    },

    { 
        title: 'As Branquelas', 
        genre: 'Comédia',
        year: 2004,
        summary: 'Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras.',
        image: 'https://midias.correiobraziliense.com.br/_midias/png/2021/10/01/675x450/1_pasted_image_0__2_-6896675.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Netflix', 'Google Play', 'Globo Play', 'Apple TV']
    }, 

    { 
        title: 'De Repente 30 ', 
        genre: 'Comédia',
        year: 2004,
        summary: 'Jenna Rink é uma garota que está descontente com sua própria idade. Em seu 13º aniversário, ela faz um pedido: virar adulta. O pedido milagrosamente se torna realidade e, no dia seguinte, Jenna acorda com 30 anos de idade.',
        image: 'https://www.rbsdirect.com.br/filestore/6/7/9/2/5/9/4_ea90b430dbf0716/4952976_bbb08d8891b6cbb.jpg?w=700',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Netflix', 'Filmelier', 'Tech Tudo', 'Apple TV']
    }, 

    { 
        title: 'O Mentiroso', 
        genre: 'Comédia',
        year: 1997,
        summary: 'O inescrupuloso advogado de Los Angeles Fletcher Reede ama o filho Max, mas a sua incapacidade de manter promessas e as mentiras compulsivas que conta causam problemas entre os dois e a ex-mulher Audrey. Cansado das mentiras do pai, Max faz um desejo antes de soprar as velinhas do seu bolo de aniversário: ele quer que o pai só diga a verdade nas próximas 24 horas. Quando o pedido de Max se torna realidade, o mundo de Fletcher começa a se transformar em um caos.',
        image: 'https://www.justwatch.com/images/backdrop/176309243/s640/o-mentiroso-compulsivo/o-mentiroso-compulsivo',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Telecine', 'Google Play', 'Apple TV']
    }, 

    { 
        title: 'Maldita Sorte', 
        genre: 'Comédia',
        year: 2007,
        summary: 'Amaldiçoado desde a infância, o dentista Charlie Kagan não consegue encontrar a mulher certa. Pior ainda, ele descobre que cada uma de suas ex-namoradas encontra o verdadeiro amor com o homem que ela conhece depois que seu relacionamento com Charlie termina. Ao ouvir sobre a reputação de Charlie, mulheres formam fila para um encontro rápido. Porém quando Charlie conhece a mulher de seus sonhos, ele procura uma maneira de quebrar a maldição para não perdê-la para o próximo homem que aparecer.',
        image: 'https://br.web.img3.acsta.net/r_640_360/videothumbnails/187/675/18767586_20131001195832989.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Prime Vídeo', 'Netflix', 'Google Play', 'Toky Vídeo', 'Apple TV']
    }, 

    { 
        title: 'O diabo veste Prada', 
        genre: 'Comédia',
        year: 2006,
        summary: 'Uma jovem mulher tentando começar sua carreira na revista de moda de maior prestígio é submetida à tirania de sua chefe exigente.',
        image: 'https://rollingstone.uol.com.br/media/_versions/anne_hathaway_em_p_diabo_veste_prada_reproducao_widelg.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Disney+', 'Amazon Prime Vídeo', 'Google Play', 'JustWatch', 'Apple TV']
    }, 

    { 
        title: 'Escola de Rock', 
        genre: 'Comédia',
        year: 2003,
        summary: 'Um músico desempregado e desesperado se passa por professor substituto em uma escola particular rigorosa e forma uma banda de rock com seus alunos.',
        image: 'https://monkeybuzz.com.br/wp-content/uploads/2013/04/escola-de-rock-filme.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Google Play Movies', 'Apple TV', 'Amazon Vídeo', 'Microsoft Store']
    },

    { 
        title: 'Relatos Selvagens', 
        genre: 'Comédia',
        year: 2014,
        summary: 'O filme reúne seis histórias de vingança vividas por personagens que são confrontados com situações que os deixam à beira de perder o controle.',
        image: 'https://www.cineset.com.br/wp-content/uploads/2014/09/Relatos-salvajes-ricardo-darin.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Max', 'Amazon Channel', 'Apple TV', 'Amazon Vídeo', 'Google Play Movies']
    },

    { 
        title: 'Superbad: É hoje', 
        genre: 'Comédia',
        year: 2007,
        summary: 'Dois amigos nerds e inseparáveis tentam fazer uma última festa antes de se formarem no ensino médio, com o objetivo de perder a virgindade.',
        image: 'https://br.web.img3.acsta.net/r_640_360/videothumbnails/14/03/25/16/27/032821.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Amazon Prime Vídeo', 'Apple TV', 'Adoro Cinema', 'Max', 'Mercado Pay']
    },

    { 
        title: 'Se beber, Não Case', 
        genre: 'Comédia',
        year: 2009,
        summary: 'Três amigos acordam em Las Vegas após uma despedida de solteiro selvagem sem memória da noite anterior e com o noivo desaparecido.',
        image: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2018/01/Se-Beber-N%C3%A3o-Case-The-Hangover-1.jpg',
        rating: 4,
        imageSize: { width: '100px', height: 'auto'},
        sites: [ 'Prime Vídeo', 'Adoro Cinema', 'Filmelier' ]
    },

    { 
        title: 'Apertem os Cintos, o Piloto Sumiu!', 
        genre: 'Comédia',
        year: 1980,
        summary: 'Um ex-piloto de guerra com medo de voar deve garantir que um avião aterrisse em segurança depois que a tripulação fica incapacitada.',
        image: 'https://cenasdecinema.com/wp-content/uploads/2018/05/Apertem-os-cintos_destaque.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'Google Play', 'Apple TV', 'Pluto TV', 'Rede Canais', 'Adoro Cinema']
    },

    {
        title: 'Minha Mãe é uma Peça',
        genre: 'Comédia',
        year: 2013,
        summary: 'Dona Hermínia é uma senhora de meia-idade, divorciada do marido, que a trocou por uma mulher mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano. Um dia, após descobrir que eles a consideram chata, ela resolve sair de casa sem avisar ninguém, deixando todos preocupados. Dona Hermínia decide visitar a querida tia Zélia para desabafar suas tristezas atuais e recordar os bons tempos do passado.',
        image: 'https://www.pjf.mg.gov.br/noticias/arquivo/01%2007%20Minha%20mae%20uma%20peca_173114.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Amazon Prime Vídeo', 'Globoplay', 'Apple TV']
    },

    {
        title: 'Como Perder um Homem em 10 Dias',
        genre: 'Comédia',
        year: 2003,
        summary: 'Ben é um publicitário que aposta com o chefe que faz qualquer mulher se apaixonar por ele em dez dias. Se conseguir, será o responsável por uma cobiçada campanha de diamantes. Andie é uma jornalista que, por causa de uma matéria, está decidida a infernizar a vida de qualquer homem que se aproximar. Os dois se conhecem em um bar e escolhem um ao outro como alvo de seus planos totalmente opostos.',
        image: 'https://observatoriodatv.uol.com.br/wp-content/uploads/2017/06/Globo-exibe-o-filme-Como-Perder-Um-Homem-Em-Dez-Dias-na-Sess%C3%A3o-da-Tarde.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Apple TV', 'TokyVídeo' ]
    },

    {
        title: 'O Amor é Cego',
        genre: 'Comédia',
        year: 2001,
        summary: 'A história gira em torno de Hal, que aceitou o conselho de seu pai moribundo e namora apenas as formas da perfeição física feminina. Porém tudo muda após Hal ter um encontro inesperado com um guru, Tony Robbins. Intrigado pela superficialidade de Hal, Robbins o hipnotiza para que ele veja a beleza que existe mesmo em mulheres menos atraentes fisicamente.',
        image: 'https://www.justwatch.com/images/backdrop/242985198/s640/o-amor-e-cego/o-amor-e-cego',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Disney +', 'Google Play', 'Rede Canais', 'GoFilmes', 'Filmow', 'Cineplayers' ]
    },

    { 
        title: 'O Exorcista', 
        genre: 'Terror',
        year: 1973,
        summary: 'Quando uma jovem garota é possuída por uma entidade misteriosa, sua mãe pede a ajuda de dois padres para salvá-la.',
        image: 'https://i.ytimg.com/vi/96RCGOaNuCM/sddefault.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Apple TV+', 'Amazon Prime Vídeo', 'Google Play Store', 'Netflix', 'Kotas']
    },

    { 
        title: 'O Chamado', 
        genre: 'Terror',
        year: 2002,
        summary: 'Uma jornalista investiga uma fita de vídeo misteriosa que parece causar a morte de qualquer um que a assista em uma semana.',
        image: 'https://www.rbsdirect.com.br/imagesrc/35725700.jpg?w=700',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: ['HBO Max', 'Youtube', 'Apple TV', 'Amazon Prime Vídeo']
    },

    { 
        title: 'A Bruxa de Blair', 
        genre: 'Terror',
        year: 1999,
        summary: 'Três estudantes de cinema desaparecem após viajar para uma floresta para filmar um documentário sobre uma lenda local, deixando apenas suas filmagens para trás.',
        image: 'https://veja.abril.com.br/wp-content/uploads/2016/09/entretenimento-filme-a-bruxa-de-blair-20160913-03.jpg?quality=90&strip=info&w=720&h=440&crop=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'Adoro Cinema', 'JustWatch', 'Pluto TV', 'Cinema em Cena']
    },

    { 
        title: 'Corra', 
        genre: 'Terror', 
        year: 2017,
        summary: 'Um jovem afro-americano visita a propriedade da família de sua namorada branca, onde descobre a verdade sinistra por trás de uma série de desaparecimentos recentes.',
        image: 'https://cdn.brasildefato.com.br/media/cad26c4b7fa3ff435ee4619bcb5bd104.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Google Play', 'Adoro Cinema', 'Filmelier', 'Amazon Prime Vídeo']
    },

    { 
        title: 'Halloween: A Noite do Terror', 
        genre: 'Terror', 
        year: 1978,
        summary: 'Michael Myers escapa de uma instituição psiquiátrica e retorna à sua cidade natal para perseguir e matar mais vítimas na noite de Halloween.',
        image: 'https://br.web.img2.acsta.net/r_640_360/videothumbnails/14/09/06/03/10/331836.jpg',
        imageSize: { width: '100px', height: 'auto'},        
        rating: 4,
        sites: ['Amazon Prime Vídeo', 'GloboPlay', 'Looke', 'Netmovies', 'Paramount+']
    },

    { 
        title: 'Jogos Mortais X',
        genre: 'Terror',
        year: 2023,
        summary: 'Esperando por uma cura milagrosa, o adoecido John Kramer viaja para o México para um procedimento médico arriscado e experimental. Mas ao chegar no destino, se depara com um ambiente macabro, e descobre que toda a operação é uma farsa para enganar pessoas já vulneráveis. Agora armado com um novo propósito, o infame serial killer usa armadilhas insanas e engenhosas para virar o jogo contra os vigaristas, relembrando o motivo de ser conhecido como o terrível vilão Jigsaw.',
        image: 'https://t2.tudocdn.net/678013?w=824&h=494',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Adoro Cinema', 'Prime Vídeo', 'Cinépolis', 'Apple TV']
    },

    { 
        title: 'Ouija 2',
        genre: 'Terror',
        year: 2016,
        summary: 'Doris é uma menina solitária e sua mãe finge se comunicar com espíritos. Certo dia, a garota usa um tabuleiro de Ouija para contato com o falecido pai e uma série de seres malignos se apoderam de seu corpo.',
        image: 'https://www.engeplus.com.br/cache/noticia/0103/0103680/ouija-a-origem-do-mal-e-a-estreia-da-semana.jpg?t=20161020170942',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix', 'Adoro Cinema', 'Prime Vídeo']
    },

    { 
        title: 'Coraline e o Mundo Secreto', 
        genre: 'Terror',
        year: 2009,
        summary: 'Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.',
        image: 'https://i0.wp.com/retipatia.com/wp-content/uploads/2020/07/coraline-e-o-mundo-secreto-04.jpg?resize=790%2C443&ssl=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo', 'Google Play', 'Apple TV', 'Adoro Cinema']
    },

    { 
        title: 'A Noiva-Cadáver', 
        genre: 'Terror',
        year: 2005,
        summary: 'As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.',
        image: 'https://cinepop.com.br/wp-content/uploads/2017/10/unset.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo', 'Google Play', 'Apple TV', 'Adoro Cinema']
    },

    { 
        title: 'Invocação do Mal', 
        genre: 'Terror',
        year: 2013,
        summary: 'Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.',
        image: 'https://files.tecnoblog.net/wp-content/uploads/2021/03/ordem-cronologica-invocacao-do-mal-11-e1616528460327.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo', 'Google Play', 'Filmelier', 'Toky Vídeo', 'Apple TV']
    },

    { 
        title: 'A Freira', 
        genre: 'Terror',
        year: 2018,
        summary: 'Presa em um convento na Romênia, uma freira comete suicídio. Para investigar o caso, o Vaticano envia um padre assombrado e uma noviça prestes a se tornar freira. Arriscando suas vidas, a fé e até suas almas, os dois descobrem um segredo profano e se confrontam com uma força do mal que toma a forma de uma freira demoníaca e transforma o convento em um campo de batalha.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/09/01/490418360-8d2dc4639340851bc27f72984f9b0d1a.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Prime Vídeo', 'Google Play', 'PlayPilot']
    },

    { 
        title: 'O Telefone Preto', 
        genre: 'Terror',
        year: 2021,
        summary: 'Finney Shaw, de 13 anos, é sequestrado por um sádico assassino mascarado e mantido em um porão à prova de som. Até que um telefone desconectado na parede começa a tocar, e ele logo descobre que pode ouvir as vozes das vítimas anteriores do maníaco.',
        image: 'https://bocadoinferno.com.br/wp-content/uploads/2022/07/O-Telefone-Preto-2022-1.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo', 'Google Play', 'Apple TV', 'Claro TV']
    },

    { 
        title: 'M3GAN', 
        genre: 'Terror',
        year: 2022,
        summary: 'M3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança. Uma robótica brilhante dá a sua jovem sobrinha um protótipo M3GAN, mas a máquina logo se torna violenta.',
        image: 'https://i.ytimg.com/vi/oehunbLkc-A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAf8tQE56cehyf9KFV2m1iCX7WZYg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Prime Vídeo', 'Google Play', 'Apple TV']
    },
    
    { 
        title: 'Caso 39', 
        genre: 'Terror',
        year: 2009,
        summary: 'Uma assistente social chamada Emily (Renée Zellweger) quer tirar uma menina de dez anos (Jodelle Ferland) da casa onde mora, porque os pais da menina são abusivos. Entretanto, quando ela ganha a guarda da criança, ela descobre que existem mais segredos rondando a vida da menina.',
        image: 'https://s2.glbimg.com/vJn5Z0lIq85r8SqzGXuBsOwa7S1IaOpvEZfKrbM7c69Ioz-HdGixxa_8qOZvMp3w/s.glbimg.com/og/rg/f/original/2012/11/14/filme7.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Youtube', 'Apple TV', 'Google Play Filmes', 'Filmow', 'TokyVídeo', 'PlayPilot']
    },
    
    { 
        title: 'Five Nights at Freddys - O Pesadelo Sem Fim',
        genre: 'Terror',
        year: 2023,
        summary: 'No Freddy Fazbears Pizza, robôs animados fazem a festa das crianças durante o dia. Mas, quando chega a noite, eles se transformam em assassinos psicopatas.',
        image: 'https://t.ctcdn.com.br/qYKzJEJ1kOpjNnbEkX3D6JkQuxo=/640x360/smart/i814785.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Google Play', 'Amazon Prime', 'Youtube', 'Telecine', 'Pobre TV' ]
    },

    { 
        title: 'Obsessão',
        genre: 'Suspense',
        year: 2018,
        summary: 'Frances é uma jovem cuja mãe acabou de falecer. Ela se muda para Manhattan e, cheia de problemas com o pai, faz uma amizade improvável com Greta, viúva e bem mais velha que ela. As duas se tornam melhores amigas, mas as atenções de Greta se mostram muito mais sinistras do que Frances imaginava.',
        image: 'https://www.cineset.com.br/wp-content/uploads/2019/06/Obsess%C3%A3o-Cr%C3%ADtica-Isabelle-Huppert.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: ['Amazon Prime Vídeo', 'Netflix', 'Google Play', 'PlayPilot']
    },


    { 
        title: 'A Mulher na Janela',
        genre: 'Suspense',
        year: 2021,
        summary: 'Anna Fox mora sozinha em uma casa que um dia abrigou sua família feliz. Separada do marido e da filha e sofrendo de uma fobia que a mantém reclusa, ela passa os dias bebendo vinho, assistindo filmes antigos e conversando com estranhos na internet. Quando uma nova família se muda para a casa do outro lado do parque, Anna fica obcecada por aquela vida perfeita. Até que certa noite, bisbilhotando com sua câmera, ela vê algo que',
        image: 'https://cinepop.com.br/wp-content/uploads/2021/05/a-mulher-na-janela-1.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: ['Netflix', 'AdoroCinema', 'Rede Canais']
    },

    { 
        title: 'A Teia',
        genre: 'Suspense',
        year: 2024,
        summary: 'Sofrendo de perda de memória, um ex-detetive de homicídios tenta resolver um assassinato brutal do qual não consegue se lembrar. À medida que reúne evidências de uma investigação de uma década, ele logo descobre segredos em seu passado esquecido.',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2024/05/pag-4-A-TEIA-CREDITO-IMAGEM-FILMES.jpg.jpg?quality=70&strip=info&w=720&h=440&crop=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Cine POP', 'Filmerlier', 'Pime Vídeo', 'Youtube Premium', 'Apple TV' ]
    },

    { 
        title: 'O Silêncio dos Inocentes',
        genre: 'Suspense',
        year: 1991,
        summary: 'A agente do FBI, Clarice Starling (Jodie Foster) é ordenada a encontrar um assassino que arranca a pele de suas vítimas. Para entender como ele pensa, ela procura o periogoso psicopata, Hannibal Lecter (Anthony Hopkins), encarcerado sob a acusação de canibalismo.',
        image: 'https://rollingstone.uol.com.br/media/_versions/silence-of-the-lambs-reprod_widelg.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Prime Vídeo', 'AdoroCinema', 'Google Play', 'Claro']
    },

    { 
        title: 'A Morta Ouve',
        genre: 'Suspense',
        year: 2016,
        summary: 'A autora Maddie Toung (Kate Siegel) vive uma vida isolada desde que perdeu sua audição quando era adolescente, se colando em um mundo de total silêncio.Porém, quando um rosto mascarado de um assassino psicótico aparece em sua janela, Maddie precisa ir além dos seus limites físicos e mentais para conseguir sobreviver.',
        image: 'https://cinemacao.com/wp-content/uploads/2016/06/6G76Epw.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Disney Plus', 'Looke', 'Claro Vídeo', 'Amazon Prime Vídeo']    
    },

    { 
        title: 'O Mundo Depois de Nós',
        genre: 'Suspense',
        year: 2023,
        summary: 'Amanda e Clay alugam uma casa de luxo para passar alguns dias tranquilos longe da cidade grande com seus filhos. Mas uma catástrofe misteriosa vira o país de ponta cabeça. G.H. e Ruth batem à sua porta afirmando que são os donos originais da mansão e pedem abrigo no lugar.',
        image: 'https://veja.abril.com.br/wp-content/uploads/2023/12/ABRE-FILME-LEAVE-THE-WORLD-BEHIND-11.jpg.jpg?quality=90&strip=info&w=720&h=440&crop=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix', 'AdoroCinema']
    },

    { 
        title: 'Ilha do Medo',
        genre: 'Suspense',
        year: 2010,
        summary: 'Nos anos 1950, a fuga de uma assassina leva o detetive Teddy Daniels e seu parceiro a investigarem o seu desaparecimento de um quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se inicia e o agente terá que enfrentar seus próprios medos.',
        image: 'https://gossipgados440724198.wordpress.com/wp-content/uploads/2020/09/7672781c-bbec-4513-85d5-64e3c0145995.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Google Play', 'Adoro Cinema']
    },

    { 
        title: 'A Garota no Trem',
        genre: 'Suspense',
        year: 2016,
        summary: 'Arrasada por seu recente divórcio, Rachel vive fantasiando sobre um casal aparentemente perfeito que mora em uma casa pela qual seu trem passa todos os dias. Certo dia, ela presencia algo estranho e começa sua própria investigação.',
        image: 'https://alemdolivro.com/wp-content/uploads/2016/11/a-garota-no-trem-filme-1.jpg?w=723&h=407',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Amazon Prime Vídeo', 'GloboPlay', 'Apple TV']
    },

    { 
        title: 'Destinos à Deriva',
        genre: 'Suspense',
        year: 2023,
        summary: 'Grávida, sozinha e perdida no mar, uma mulher foge de um país totalitário. No entanto, ela acaba ficando presa em um contêiner que navega à deriva. Mesmo com medo, ela decide lutar pela sua vida e por seu bebê.',
        image: 'https://semanario.com.br/wp-content/uploads/2023/11/20230928-destinos-a-deriva-papo-de-cinema-banner3.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    { 
        title: 'Herança',
        genre: 'Suspense',
        year: 2020,
        summary: 'O que acontece quando o patriarca de uma família rica e poderosa morre repentinamente, deixando para sua viúva e filha um legado secreto que ameaça destruir suas vidas? Após a morte do pai, a herdeira de uma poderosa família nova-iorquina começa a desvendar segredos sombrios que ameaçam destruir sua vida e revelar a verdade por trás de sua fortuna.',
        image: 'https://www.revistabula.com/wp/wp-content/uploads/2024/04/HerancaRoubada-610x350.webp',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix']
    },

    { 
        title: 'Número 23',
        genre: 'Suspense',
        year: 2007,
        summary: 'Um homem encontra um livro obscuro sobre o número 23 e inicia uma jornada sombria. À medida que ele se torna cada vez mais obcecado com o conteúdo, ele se convence de que o livro é baseado em sua vida. Para o seu desespero, ele descobre ainda que graves consequências estão armazenadas para o principal personagem da obra.',
        image: 'https://www.justwatch.com/images/backdrop/195646469/s640/numero-23/numero-23',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Amazon Prime Vídeo', 'Google Play Filmes', 'Youtube']
    },

    { 
        title: 'Janela Secreta',
        genre: 'Suspense',
        year: 2004,
        summary: 'Durante o processo de um divórcio litigioso de sua esposa, o escritor Mort Rainey se muda para sua cabana remota em Nova York para ficar sozinho. Tentando recuperar sua saúde mental, Rainey tem a infelicidade de ser encontrado por John Shooter, um agricultor que afirma que Rainey plagiou o seu trabalho. Primeiramente, Rainey ignora as acusações, mas Shooter não desaparece e se torna cada vez pior em sua busca por vingança.',
        image: 'https://br.web.img3.acsta.net/r_640_360/videothumbnails/195/344/19534412_2013081419010547.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Prime Vídeo', 'Youtube', 'Google Play Filmes', 'Cineplayers', 'Bora Flix', 'Cinema10']
    },

    { 
        title: 'Fragmentado',
        genre: 'Suspense',
        year: 2016,
        summary: 'Kevin possui 23 personalidades distintas e consegue alterná-las quimicamente em seu organismo apenas com a força do pensamento. Um dia, ele sequestra três adolescentes que encontra em um estacionamento. Vivendo em cativeiro, elas passam a conhecer as diferentes facetas de Kevin e precisam encontrar algum meio de escapar.',
        image: 'https://ohoje.com/public/imagens/fotos/amp/2bd7aad266168f2070d55c3e3ad7476c.jpg.webp',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Globo Play', 'Prime Vídeo', 'Apple TV']
    },

    { 
        title: 'Fair Play',
        genre: 'Suspense',
        year: 2023,
        summary: 'Uma promoção inesperada em um fundo de investimentos competitivo leva o relacionamento de um casal ao limite, ameaçando muito mais do que seu recente noivado.',
        image: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWapjoEpLy8i4El1gLfuoIG3e4qbg_m7G_z8Xi9Oi42EGUKHrVGHyn5xKK9YhP3Ksym_1ML_GMVzW2saMqY_AsWHuyDQstkl8DihVV7ZyBHUgPFcF63WtSnn0Q.jpg?r=567',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix', 'Prime Vídeo']
    },

    { 
        title: 'Colega de Quarto',
        genre: 'Suspense',
        year: 2011,
        summary: 'Sara, uma jovem estudante de design de Iowa, chega à faculdade em Los Angeles e fica ansiosa para se enturmar e conhecer a cidade grande. Sua companheira de quarto, a milionária Rebecca, está mais do que ansiosa para ajudar Sara e ensinar-lhe sobre a região. As duas se tornam próximas, mas quando Sara começa fazer novos amigos no campus, Rebecca torna-se ressentida. Alarmada, Sara vai morar com seu namorado, o que faz o comportamento de Rebecca ficar ainda mais violento.',
        image: 'https://s2.glbimg.com/kaEvwm3k15wCIA-HlzzWrLQPvC8=/s.glbimg.com/og/rg/f/original/2014/05/22/colega_de_quarto_princ.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Max', 'Prime Vídeo', 'Google Play Filmes', 'Apple TV', 'PlayPilot' ]
    },

    { 
        title: 'Bird Box',
        genre: 'Ficção Científica',
        year: 2018,
        summary: 'Entidades misteriosas invadem a Terra com sua terrível presença. Aqueles que as veem, se matam instantaneamente. O mundo entra em colapso, mas uma mãe luta para encontrar um lugar seguro para viver com seus filhos.',
        image: 'https://tm.ibxk.com.br/ms/images/highlights/000/047/930/45249.jpg?ims=750x',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix']
    },

    {
        title: 'Planeta dos Macacos: O Confronto',
        genre: 'Ficção Científica',
        year: 2014,
        summary: 'Dez anos após seu último embate, um grupo de humanos sobrevivente de uma praga mortal ameaça a crescente nação de macacos geneticamente evoluídos de César. Ambos os lados são levados a uma guerra que pode determinar definitivamente a espécie dominante da Terra.',
        image: 'https://www.correiodopovo.com.br/image/contentid/policy:1.1171168:1678273721/340209.JPG?a=3%3A2&$p$a=020f3e3',
        imageSize: { width: '100px', height: 'auto' },
        rating: 4,
        sites: ['Prime Vídeo', 'Apple TV', 'Google Play', 'Disney+']
    },

    { 
        title: 'Divergente',
        genre: 'Ficção Científica',
        year: 2014,
        summary: 'Na futurística cidade de Chicago, ao completar 16 anos, Beatrice precisa escolher entre as diferentes facções em que a cidade está dividida. Cada uma representa um valor diferente e, ao contrário de sua família, a jovem opta pela facção dos destemidos, a Audácia. Ela então se torna Tris e inicia uma jornada para afastar seus medos e descobrir quem realmente é. Durante essa jornada, acaba conhecendo o jovem Quatro, um rapaz experiente que tem o dom de intrigá-la e de encantá-la ao mesmo tempo.',
        image: 'https://files.tecnoblog.net/wp-content/uploads/2021/03/ordem-dos-filmes-divergente-1-e1616629431608.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Prime Vídeo', 'Apple TV', 'Google Play', 'AdoroCinema']
    },

    { 
        title: 'Maze Runner: Prova de Fogo',
        genre: 'Ficção Científica',
        year: 2015,
        summary: 'Depois de escapar do labirinto, Thomas e os garotos que o acompanharam em sua fuga encontram uma realidade bem diferente: a superfície da Terra foi queimada pelo Sol e eles precisam lidar com criaturas disformes chamadas Cranks.',
        image: 'https://www.tvpop.com.br/wp-content/uploads/2021/09/maze-runner-prova-de-fogo-domingo-maior-globo-foto-reproducao-tvpop.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Netflix', 'Prime Vídeo', 'Disney+', 'Google Play']
    },

    { 
        title: 'Avatar',
        genre: 'Ficção Científica',
        year: 2009,
        summary: 'No exuberante mundo alienígena de Pandora vivem os Navi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Navi, Esta paixão leva Jake a lutar pela sobrevivência de Pandora.',
        image: 'https://www.correiodopovo.com.br/image/contentid/policy:1.935920:1679263295/Avatar.PNG.PNG?a=3%3A2&$p$a=e8e0119',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: ['Disney+', 'Google Play', 'AdoroCinema']
    },

    { 
        title: 'Jurassic Park',
        genre: 'Ficção Científica',
        year: 1993,
        summary: 'Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça.',
        image: 'https://assets.planne.com.br/apps/0JQKWOZOYII/images/high/kDt0OYNQNIR15VIx768PdiEI0UkmzlnKYKNQypjy.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: ['Prime Vídeo', 'Netflix', 'Google Play', 'AdoroCinema']
    },

    { 
        title: 'Jogos Vorazes',
        genre: 'Ficção Científica',
        year: 2012,
        summary: 'Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso. A jovem Katniss Everdeen, do Distrito 12, confia na habilidade de caça e na destreza com o arco, além dos instintos aguçados, nesta competição mortal.',
        image: 'https://files.tecnoblog.net/wp-content/uploads/2021/01/jogos-vorazes-ordem-1-e1611788453521.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo' ]
    },

    { 
        title: 'Além da Morte',
        genre: 'Ficção Científica',
        year: 2017,
        summary: 'Cinco estudantes de medicina enfrentam as consequências de engatilhar experiências de quase morte.',
        image: 'https://pipocanamadrugada.com.br/site/wp-content/uploads/2017/10/Alem-da-Morte-capa.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix', 'Apple TV', 'Google Play']
    },
    
    { 
        title: 'A 5ª Onda',
        genre: 'Ficção Científica',
        year: 2016,
        summary: 'Uma série de ataques alienígenas cada vez mais letais deixa a maior parte da Terra dizimada. Separada da família, a adolescente Cassie tenta desesperadamente encontrar seu irmão mais novo antes que a quinta onda de ataque extermine a humanidade.',
        image: 'https://fonesepaginasamarelas.wordpress.com/wp-content/uploads/2015/09/cassie-a-5-onda.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix', 'Prime Vídeo',  'Apple TV', 'Google Play']
    },

    { 
        title: 'Vingadores: Ultimato',
        genre: 'Ficção Científica',
        year: 2019,
        summary: 'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.',
        image: 'https://sm.ign.com/ign_br/screenshot/default/blob_cqrh.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo',  'Disney +']
    },
    
    { 
        title: 'O Quarto Secreto',
        genre: 'Ficção Científica',
        year: 2018,
        summary: 'A recém-casada Elizabeth chega com seu marido, o brilhante cientista Henry, a sua magnífica casa. Henry explica que tudo agora pertence a ela, exceto um quarto em que ele a proíbe de entrar.',
        image: 'https://br.web.img3.acsta.net/medias/nmedia/18/85/23/49/19778500.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix', 'Apple TV', 'Google Play', 'Filmelier', 'GoFilmes' ]
    },

    { 
        title: 'O Projeto Adam',
        genre: 'Ficção Científica',
        year: 2022,
        summary: 'Um viajante do tempo volta ao ano de 2022 por acidente e acaba se encontrando com seu eu mais novo. Juntos, e sendo caçados por forças do futuro, os dois embarcam em uma missão para consertar a linha temporal e salvar seus entes queridos.',
        image: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcFmDXW0NdsI6ojKoYj4JvUlzclzGvLEw8P0-kWtnx91D_pbt4JgVpQ1ysMJ--ObIDJRe3UNlCvcN1gaU8ebKdtUHGPaeema1Jade5H81-LJp1TVfoH3Riqubw.jpg?r=278',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix']
    },

    { 
        title: 'Oppenheimer',
        genre: 'Ficção Científica',
        year: 2023,
        summary: 'O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.',
        image: 'https://www.matinaljornalismo.com.br/wp-content/uploads/2023/07/oppenheimer_foto-universal-720x475.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo']
    },

    { 
        title: 'Transformers: O Início',
        genre: 'Ficção Científica',
        year: 2024,
        summary: 'Transformers: O Início mostrará os autobots para uma nova aventura épica. Os maiores rivais da franquia um dia foram melhores amigos, quase irmãos, com uma grande ligação. O longa mostrará a história original do Optimus Prime e do Megatron que mudaram o destino do Cyberton para sempre.',
        image: 'https://www.papodecinema.com.br/wp-content/uploads/2024/04/20240424-transformers-o-inicio-papo-de-cinema-800.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Google Play' ]
    },

    { 
        title: 'Dune',
        genre: 'Ficção Científica',
        year: 2021,
        summary: 'O enredo, passado num futuro distante, acompanha a trajetória de Paul Atreides, o jovem descendente de uma importante família. Sua missão é viajar até Arrakis, um planeta deserto e repleto de perigos, em busca de uma substância essencial para a vida humana.',
        image: 'https://t.ctcdn.com.br/tn6ypmsxt5PeyqJnhtz1gwGjD04=/640x360/smart/i519759.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Google Play Filmes', 'Max', 'Amazon Prime Video', 'Claro TV+' ]
    },

    { 
        title: 'Suzume',
        genre: 'Anime',
        year: 2022,
        summary: 'Uma garota de 17 anos chamada Suzume descobre uma porta misteriosa nas montanhas, e logo outras começam a aparecer por todo o Japão. Quando abertas, elas trazem desastre e destruição, e apenas Suzume pode fechá-las novamente.',
        image: 'https://tribunademinas.com.br/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-15.12.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    { 
        title: 'O Menino e a Garça',
        genre: 'Anime',
        year: 2023,
        summary: 'Mahito, um menino de 12 anos, luta para se estabelecer em uma nova cidade após a morte de sua mãe. Quando uma garça falante conta para Mahito que sua mãe ainda está viva, ele entra em uma torre abandonada em busca dela, o que o leva para outro mundo.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/01/19/125345728-2f13ccd50796b9fd4e0ab4ed8d7001ed.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    { 
        title: 'One Piece Film: Red',
        genre: 'Anime',
        year: 2022,
        summary: 'Luffy e sua equipe assistem a um show onde a cantora Uta não é outra senão a filha de Shanks.',
        image: 'https://cinepop.com.br/wp-content/uploads/2022/10/ONE-PIECE-FILM-RED-CAPA-2.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Crunchroll']
    },

    { 
        title: 'Black Clover',
        genre: 'Anime',
        year: 2017,
        summary: 'Num mundo onde magia é tudo, Asta e Yuno são abandonados em uma igreja no mesmo dia. Enquanto Yuno possui poderes mágicos excepcionais, Asta é a única pessoa do mundo todo desprovida desse dom. Aos quinze anos, ambos recebem grimórios - livros mágicos que amplificam os poderes do detentor. Asta recebe um raro grimório de anti-magia, capaz de negar e repelir os feitiços do oponente. Dois opostos que nutrem uma rivalidade amigável, Yuno e Asta estão prontos para encarar os mais difíceis desafios para conquistar seu sonho em comum: tornar-se o Rei dos Feiticeiros. Desistir não é opção!',
        image: 'https://tm.ibxk.com.br/2024/06/18/18091008205045.jpg?ims=750x',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Prime Vídeo', 'Crunchroll', 'My Animes List']
    },

    { 
        title: 'Overlord',
        genre: 'Anime',
        year: 2015,
        summary: 'Um jovem está preso em um videogame como um rei guerreiro e parte para fazer deste novo mundo seu próprio império.',
        image: 'https://a.storyblok.com/f/178900/750x422/320067ca9a/overlord-the-sacred-kingdom.jpg/m/filters:quality(95)format(webp)',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Crunchroll', 'My Animes List']
    },


    { 
        title: 'Boruto: Naruto the Movie',
        genre: 'Anime',
        year: 2015,
        summary: 'Vários anos após o fim da Guerra Shinobi, o filho de Naruto, Boruto, está prestes a entrar nos exames Chûnin ao lado de Sarada Uchiha e do misterioso Mitsuki.',
        image: 'https://ovicio.com.br/wp-content/uploads/boruto-131958.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Animes ROLL', 'Narutopedia', 'Globo Play', 'Prime Vídeo']
    },

    { 
        title: 'O Imaginário',
        genre: 'Anime',
        year: 2023,
        summary: 'Amanda e Rudger, seu amigo imaginário, vivem altas aventuras. Mas eles acabam se separando e Rudger precisa enfrentar sozinho uma ameaça misteriosa.',
        image: 'https://i0.wp.com/anmtv.com.br/wp-content/uploads/2024/06/o-imaginario.jpg?resize=800%2C399&ssl=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 3,
        sites: [ 'Netflix' ]
    },

    { 
        title: 'The Last Naruto: O Filme',
        genre: 'Anime',
        year: 2014,
        summary: 'Hanabi Hyuuga, a irmã mais nova de Hinata, é sequestrada por Toneri Ootsutsuki. Naruto Uzumaki une forças para ajudar a irmã caçula de seu novo amor, mas suas habilidades são postas à prova quando perde sua forma mais poderosa.',
        image: 'https://i.ytimg.com/vi/bDcjMHWO5WY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvbOWchm8UFYXKZZRCne3uEdolkg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    { 
        title: 'O Castelo Animado',
        genre: 'Anime',
        year: 2004,
        summary: 'Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha. Desesperada, ela embarca em uma odisseia em busca do mago Howl, um misterioso feiticeiro que pode ajudá-la a reverter o feitiço.',
        image: 'https://s2.glbimg.com/fNztWlA3cJyMEeUwHujsXEcD2kE=/e.glbimg.com/og/ed/f/original/2020/01/20/viagem-chihiro.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    {  
        title: 'Princesa Mononoke',
        genre: 'Anime',
        year: 1997,
        summary: 'Um príncipe, em busca de uma cura, luta em uma guerra entre a mata e uma colônia mineira. Nesta aventura ele conhece Mononoke.',
        image: 'https://coisasdojapao.com/wp-content/uploads/2018/11/princesa-mononoke-curiosidades_opt.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Prime Vídeo', 'Rede Canais']
    },

    { 
        title: 'Vidas ao Vento',
        genre: 'Anime',
        year: 2013,
        summary: 'Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida. Durante a busca pela realização deste objetivo, ele conhece Naoko, uma jovem encantadora por quem se apaixona. No entanto, Naoko fica profundamente doente, sem saber se sobreviverá, e os planos de Jiro podem estar prestes a mudar.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaC4m7ZT94wYMWF34qk7b4xiJ6FQ0K9-JMoIdxkzad7HEZk5iEczm7_vKITjTmK4HrodE0QCLdBgrGVJE1EE3VBnKcSMYdmFW-jSpbbQonREzseZUn0D06XrRdTaHg-_Yd0IyzwIUqG3g/s1600/The-Wind-Rises.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Rede Canais', 'Amazon', 'MUBI']
    },

    { 
        title: 'O Castelo no Céu',
        genre: 'Anime',
        year: 1986,
        summary: 'Sheeta, uma jovem órfã que possui um colar misterioso se une ao mineiro Pazu para procurar uma lendária cidade flutuante. Mas a dupla é perseguida por gananciosos piratas aéreos.',        
        image: 'https://bolsanerd.home.blog/wp-content/uploads/2020/02/o-filme-o-castelo-no-cc3a9u-1000x600-1.jpg?w=736',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Apple TV', 'Youtube']
    },

    { 
        title: 'Demon Slayer: Kimetsu no Yaiba',
        genre: 'Anime',
        year: 2019,
        summary: 'Demon Slayer é um anime que se passa no Japão, durante o período Taisho. Ele apresenta Tanjiro Kamado, um jovem bondoso que vendia carvão para viver, até o dia em que um demônio invade a sua casa, mata com requintes de crueldade os seus pais e amaldiçoa a sua irmã Nezuko.',
        image: 'https://sm.ign.com/ign_br/screenshot/default/kimetsu-no-yaiba_jc8q.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Crunchyroll' ]
    },

    { 
        title: 'My Hero Academia',
        genre: 'Anime',
        year: 2014,
        summary: 'Um adolescente normal que salvou um valentão recebe um superpoder incrível e passa a frequentar uma escola para treinmaneto de heróis',
        image: 'https://kanto.legiaodosherois.com.br/w750-h450-k1/wp-content/uploads/2022/06/legiao_wANKuMCDJWze.jpg.webp',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Crunchyroll' ]
    },

    { 
        title: 'Boruto: Naruto Next Generations',
        genre: 'Anime',
        year: 2017,
        summary: 'Uzumaki Boruto, filho de Uzumaki Naruto, o Sétimo Hokage, se inscreveu na Academia Ninja para aprender a ser um verdadeiro ninja. Os outros estudantes o ignoram por ser "apenas o filho do Hokage", mas a paixão e a personalidade do Boruto vai acabar com todos esses preconceitos. Quando uma série de misteriosos eventos começa a se desenrolar, cabe a Boruto e seus novos amigos a investigá-los. Como um tornado, Boruto entra no coração de todos: sua história está prestes a começar!',
        image: 'https://animenew.com.br/wp-content/uploads/2020/06/Retorno-do-anime-Boruto-Naruto-Next-Generations-jpg.webp',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Apple TV', 'Crunchyroll' ]
    },

    {
        title: 'Pousando no Amor',
        genre: 'Dorama',
        year: 2019,
        summary: 'Um acidente de parapente leva uma herdeira sul-coreana à Coreia do Norte. Lá, ela acaba conhecendo um oficial do exército, que vai ajudá-la a se esconder.',
        image: 'https://s2.glbimg.com/EaUiNUv8aKnlc0PlAffXmBhp2iw=/620x413/top/e.glbimg.com/og/ed/f/original/2022/03/31/image_moMXu9G.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'DramaSekai', 'Rede Canais']
    },

    {
        title: 'Rainha das Lágrimas',
        genre: 'Dorama',
        year: 2024,
        summary: 'Em Rainha das Lágrimas, um casal de magnatas supera uma crise matrimonial ainda que tudo esteja contra eles. No drama coreano, Hyun-woo (Kim Soo-hyun), o diretor de uma rede de supermercados e Hae-in (Kim Ji-won), uma herdeira chaebol de um império de lojas de departamento, se apaixonam intensamente na juventude e logo se casam. O tempo passa e eles entram em uma profunda crise no casamento, mas quando tudo aponta para o pior, o amor volta a florescer e eles vão superando as dificuldades juntos.',
        image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/04/19/1177115274-c01e398bacae338358b0c5b9b1c96d9a.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    {
        title: 'Beleza Verdadeira',
        genre: 'Dorama',
        year: 2020,
        summary: 'Uma estudante esconde seu passado doloroso e aprende técnicas de maquiagem que a tornam popular.',
        image: 'https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/03/legiao_VGmzAcFJ94y0.jpg.webp',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Apple TV', 'Doramogo', 'Prime Vídeo', 'PlayPlilot']
    },

    {
        title: 'Meu Demônio Favorito (My Damon)',
        genre: 'Dorama',
        year: 2023,
        summary: 'Em Meu Demônio Favorito, um demônio perde seus poderes e precisa se unir a uma garota humana mimada para recuperá-los. No dorama, Jeong Gu-won (Song Kang) é um demônio que garante sua vida eterna ao fazer acordos duvidosos com humanos para alimentar seus poderes. Ele considera os humanos seres inferiores mas, ao se envolver com os assuntos de Do Do-hee (Kim You-jung), uma desconfiada e arrogante herdeira, tudo muda. O demônio perde seus poderes e precisa estabelecer um novo acordo para recuperá-los, mas a paixão que floresce entre os dois pode colocar tudo o que acredita em risco.',
        image: 'https://s2-techtudo.glbimg.com/XNrnTaeutfOGEV7b6mD4_zd4_UE=/0x0:780x439/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/U/E/UfPAcoSSilSfeiuUN6ZA/hgxa9olpcgvtafypw9sfmcfwunp.jpg', 
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Pobreflix', 'Doramogo', 'Doramas Online']
    },

    {
        title: 'Uma Advogada Extraordinária',
        genre: 'Dorama',
        year: 2022,
        summary: 'Uma jovem autista brilhante é contratada por um grande escritório de advocacia. Ela possui um QI alto e uma memória impressionante, mas tem dificuldade com interações cotidianas.',
        image: 'https://s2-epocanegocios.glbimg.com/CTkA1rFbzH938Fdo9qZvVWBmi-Q=/0x0:700x450/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2022/u/y/I4ToOXR6Oeff3Mt2uEzQ/advogada.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix']
    },

    {
        title: 'Nosso Destino',
        genre: 'Dorama',
        year: 2023,
        summary: 'Um advogado amaldiçoado conhece uma funcionária pública que tem a chave para acabar com a maldição. Assim, começa um romance inesperado.',
        image: 'https://midias.agazeta.com.br/2023/08/25/serie-coreana-nosso-destino-lancada-pela-netflix-1846245-article.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'O TEMPO', 'Seu Dorama']
    },

    {
        title: 'Hierarchy',
        genre: 'Dorama',
        year: 2024,
        summary: 'Em Hierarchy, um novo aluno é transferido para um colégio reservado somente para os filhos da elite coreana ameaça as estruturas de poder estudantil. Construída e gerenciada pelo Jooshin Group, a Jooshin High School escolhe a dedo quem pode se matricular, praticamente, desde o berço. Mesmo só com os mais ricos e poderosos do país, a própria escola tem sua hierarquia, os 0,01% melhores alunos dominam os corredores. Tudo muda quando Kang-ha (Lee Chae-min) chega de transferência, abalando as estruturas da escola.',
        image: 'https://static1.purepeople.com.br/articles/6/39/26/86/@/4490927--hierarchy-e-protagonizada-pelo-casal-r-580x0-3.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 4,
        sites: [ 'Netflix']
    },

    {
        title: 'Clima do Amor',
        genre: 'Dorama',
        year: 2022,
        summary: 'Para ela, não é fácil prever os dias de sol e chuva, mesmo sendo meteorologista. Mais difícil ainda é prever o amor, mesmo quando ele bate à porta.',
        image: 'https://cinema10.com.br/upload/series/series_3190_gdummy-easy-resize.com.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Play Pilot', 'Doramas Online', 'Seu Dorama', 'Week Series']
    },

    {
        title: 'Vinte e Cinco, Vinte e Um',
        genre: 'Dorama',
        year: 2022,
        summary: 'Em uma época de crise financeira, o sonho de Na Hee-do de se tornar uma grande esgrimista é ameaçado, mas a garota não desiste e luta para alcançar seus objetivos. Ao mesmo tempo, ela descobre o amor junto com o Back Yi-jin.',
        image: 'https://i0.wp.com/valkirias.com.br/wp-content/uploads/2022/06/valkirias-vinte-cinco-vinte-um-1.png?resize=740%2C416&ssl=1',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Seu Dorama', 'Doramogo', 'Doramas Online' ]
    },

    {
        title: 'A Última Missão do Anjo: O Amor',
        genre: 'Dorama',
        year: 2019,
        summary: 'Como punição por interferir no mundo dos humanos, um anjo recebe a missão de encontrar a alma gêmea de uma bailarina completamente insensível.',
        image: 'https://ahjummamshies.com/wp-content/uploads/2019/08/angel-last-mission-love-shin-hyesun-kim-myungsoo-l.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Seu Dorama', 'Prime Vídeo', 'Kocowa+', 'Doramogo' ]
    },
    
    {
        title: 'Uma Noite de Primavera',
        genre: 'Dorama',
        year: 2019,
        summary: 'O amor de Lee Jeong-in e Yu Ji-ho floresce em uma noite de primavera, quando tudo é possível.',
        image: 'https://boasnovasmg.com.br/wp-content/uploads/2021/08/Netflix.jpeg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'PlayPilot', 'Cine Vision', 'Megaflix' ]
    },

    {
        title: 'Invasão Zumbi',
        genre: 'Dorama',
        year: 2016,
        summary: 'A Coreia do Sul decreta estado de emergência após um vírus desconhecido tomar conta do país. Algumas pessoas tentam fugir de zumbis e ficam presas em um trem-bala que está a caminho de Busan, a única cidade que não foi afetada pelo vírus.',
        image: 'https://s2.glbimg.com/13o7RiN4Ng_ps_Q3NbPZ1toARmE=/620x465/s.glbimg.com/jo/g1/f/original/2016/12/28/invasao-zumbi.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Youtube' ]
    },
   
    {
        title: 'Amor Oculto',
        genre: 'Dorama',
        year: 2023,
        summary: 'Sang Zhi gosta de Duan Jiaxu desde a época da escola. Quando o destino os reúne, eles têm a chance de viver um relacionamento puro.',
        image: 'https://i.pinimg.com/736x/da/fb/c6/dafbc66929ec155c91e113424dfc6deb.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Pobreflix', 'MyDramaList']
    },
       
    {
        title: 'Watch Doona!',
        genre: 'Dorama',
        year: 2023,
        summary: 'Em Doona!, Lee Won Joon (Yang Se-jong) tenta equilibrar vida social, estudos e o começo da vida adulta na faculdade. Tudo normal para os jovens de sua idade, tirando sua nova colega de república: uma ex-estrela do K-Pop. A celebridade Doo-na (Bae Suzy) se muda para o andar de baixo do garoto e, de início, ele tenta fingir que não a cohece e evitá-la, mas cada vez mais a vida dela mostra-se misteriosa.',
        image: 'https://adrielia.com/wp-content/uploads/2023/10/Doona-nova-serie-da-Netflix.png',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix' ]
    },
       
    {
        title: 'O Rei Eterno',
        genre: 'Dorama',
        year: 2020,
        summary: 'Um imperador coreano passa por um portal misterioso e entra em um mundo paralelo onde conhece uma detetive obstinada.',
        image: 'https://cinema10.com.br/upload/series/series_3054_bromance-easy-resize.com.jpg',
        imageSize: { width: '100px', height: 'auto'},
        rating: 5,
        sites: [ 'Netflix', 'Doramogo', 'Rede Canais', 'PlayPilot' ]
    },


];

// Exibindo informações de cada filme
movies.forEach(movie => {
    console.log(`Título: ${movie.title}`);
    console.log(`Gênero: ${movie.genre}`);
    console.log(`Ano: ${movie.year}`);
    console.log(`Resumo: ${movie.summary}`);
    console.log(`Imagem: ${movie.image}`);
    console.log(`Tamanho da imagem: ${movie.imageSize.width} x ${movie.imageSize.height}`);
    console.log(`Avaliação: ${movie.rating}`);
    console.log(`Plataformas: ${movie.sites.join(', ')}`);
    console.log('\n');
})

// Dicionário de recomendações por gênero
var recommendations = {
    'ação': ['Batman: O Cavaleiro das Trevas', 'Velozes e Furiosos', 'Matrix', 'Vingadores: Ultimato', 'Mad Max: Estrada da Fúria'],
    'comédia': ['As Branquelas', 'Se Beber, Não Case!', 'Superbad', 'Corra que a Polícia Vem Aí', 'Minha Mãe é uma Peça'],
    'terror': ['O Exorcista', 'Invocação do Mal', 'Uma Noite de Crime', 'O Iluminado', 'IT: A Coisa', 'A Bruxa', 'Caso 39'],
    'suspense': ['Seven: Os Sete Crimes Capitais', 'O Silêncio dos Inocentes', 'Garota Exemplar', 'Psicose'],
    'romance': ['Diário de uma Paixão', 'Orgulho e Preconceito', 'Titanic', 'La La Land', 'Atrás da Minha Janela', 'Belo Desastre'],
    'ficção científica': ['Interestelar', 'Bird Box', 'Blade Runner 2049', 'Divergente', 'Planeta dos Macacos', 'De Volta para o Futuro', 'Jurassic Park'],
    'drama': ['O Poderoso Chefão', 'Cidadão Kane', 'Gladiador', 'O Lado Bom da Vida', 'Garota Exemplar', 'O Silêncio', 'Minha Culpa', 'A culpa é das Estrelas', 'Extraordinário'],
    'anime': ['Suzume', 'O Rapaz e o Monstro', 'Olhos de Gato', ' Koe no Katachi (A Voz do Silêncio)', 'Your Name', 'Boruto'],
    'dorama': ['Sorriso Real', 'Beleza Verdadeira', 'Pousando no Amor', 'Rainha das Lágrimas', 'Meu Demônio Favorito', 'Clima do Amor', 'Nosso Destino' ]
};

// Função para recomendar um filme com base nas preferências do usuário
function recommendMovie() {
    var userPreference = document.getElementById('userPreference').value.toLowerCase().trim();
    var recommendationElement = document.getElementById('recommendation');

    // Verificar se há uma recomendação disponível para o gênero informado
    if (recommendations.hasOwnProperty(userPreference)) {
        var movies = recommendations[userPreference];
        var randomIndex = Math.floor(Math.random() * movies.length);
        var randomMovie = movies[randomIndex];
        recommendationElement.textContent = `Recomendação para você: ${randomMovie}. Espero que goste!`;

    } else {
        recommendationElement.textContent = 'Desculpe! Não encontramos um filme correspondente ao seu gosto.';
    }
}

// Função para encontrar um filme com base no gênero fornecido
function findRecommendedMovie(userPreference) {
    const normalizedPreference = userPreference.toLowerCase();
    return movies.find(movie => movie.genre.toLowerCase().includes(normalizedPreference));
}

// Função para pesquisar filmes com base no gênero inserido pelo usuário
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase().includes(searchInput));

    if (filteredMovies.length === 0) {
        resultsElement.innerHTML = '<p>Nenhum filme encontrado com esse gênero.</p>';
        return;
    }

    filteredMovies.forEach(movie => {
        const movieElement = createMovieElement(movie);
        resultsElement.appendChild(movieElement);
    });
}

// Função auxiliar para criar o elemento HTML de um filme
function createMovieElement(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    const title = createElementWithText('h2', movie.title);
    const genre = createElementWithText('p', `Gênero: ${movie.genre}`);
    const year = createElementWithText('p', `Ano: ${movie.year}`);
    const summary = createElementWithText('p', `Resumo: ${movie.summary}`);

    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = `${movie.title} Capa`;
    image.style.width = `${movie.imageSize.width}px`;
    image.style.height = `${movie.imageSize.height}px`;

    const rating = createStarRating(movie.rating);
    const sites = createElementWithText('p', `Disponível em: ${movie.sites.join(', ')}`);

    movieElement.appendChild(title);
    movieElement.appendChild(genre);
    movieElement.appendChild(year);
    movieElement.appendChild(summary);
    movieElement.appendChild(image);
    movieElement.appendChild(rating);
    movieElement.appendChild(sites);

    return movieElement;
}

// Função auxiliar para criar um elemento HTML com texto
function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

// Função para criar a classificação de estrelas com base no rating
function createStarRating(rating) {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = i <= rating ? '★' : '☆';
        starsContainer.appendChild(star);
    }

    return starsContainer;
}