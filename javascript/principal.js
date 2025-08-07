let nome = localStorage.getItem("armazem")
document.getElementById("titulo").innerText = `Oi, ${nome}`

document.addEventListener('DOMContentLoaded', () => {
    const btnBatman = document.getElementById('batman')
    const btnSuperman = document.getElementById('superman')
    const btnFlash = document.getElementById('flash')
    const btnMulherMaravilha = document.getElementById('maravilha')
    const btnLanternaVerde = document.getElementById("lanterna")
    const btnAquaman = document.getElementById('aquaman')
    const btnArqueiroVerde = document.getElementById('arqueiro');
    const btnCiborg = document.getElementById('ciborg');

    const btnDarkseid = document.getElementById('dark');
    const btnAres = document.getElementById('ares');
    const btnCoringa = document.getElementById('coringa');
    const btnFlashReverso = document.getElementById('flash-reverso');
    const btnRedDeath = document.getElementById('red-death');
    const btnLexLuthor = document.getElementById('lex');
    const btnSinestro = document.getElementById('sinestro');
    const btnExterminador = document.getElementById('exterminador');

    const btnCapuzVermelho = document.getElementById('capuz');
    const btnEtrigan = document.getElementById('etrigan');
    const btnLobo = document.getElementById('lobo');
    const btnConstantine = document.getElementById('constantine');
    const btnGaviaoNegro = document.getElementById('gaviao');
    const btnMulherGato = document.getElementById('mulher-gato');
    const btnRorschach = document.getElementById('roschach');
    const btnVingadorFantasma = document.getElementById('vingador-fantasma');



    btnBatman.addEventListener('click', () => {

        
        const batman = {
            nome: "Batman",
            breve_descricao: "O Cavaleiro das Trevas é um vigilante mascarado que protege Gotham City do crime e da corrupção, utilizando inteligência, força e tecnologia avançada.",
            habilidade_1: "Mestre em artes marciais",
            habilidade_2: "Detetive genial",
            habilidade_3: "Intelecto de nível de gênio",
            nome_real: "Bruce Wayne",
            afiliacoes: [
                "Liga da Justiça",
                "Bat-família"
            ],
            arqui_inimigo: "Coringa",
            primeira_aparicao: "Detective Comics #27 (maio de 1939)",
            imagem: "../midia/personagens/1.png",
            video: "https://www.youtube.com/embed/QZlvIbLajQU?si=IQLAoBBtqZb_yBGU",
        }

        localStorage.setItem('personagem', JSON.stringify(batman))

        window.location.href = "generic.html"

    })

    btnSuperman.addEventListener('click', () => {
        
        const superman = {
                nome: "Superman",
                breve_descricao: "O Homem de Aço é o último filho de Krypton, enviado à Terra para se tornar seu maior herói, defendendo a verdade, a justiça e o modo de vida americano.",
                habilidade_1: "Super força e velocidade",
                habilidade_2: "Voo e visão de calor",
                habilidade_3: "Invulnerabilidade",
                nome_real: "Clark Kent",
                afiliacoes: [
                                "Liga da Justiça",
                                "Jornal Planeta Diário"
                            ],
                arqui_inimigo: "Lex Luthor",
                primeira_aparicao: "Action Comics #1 (abril de 1938)",
                imagem: "../midia/personagens/2.png",
                video: "https://www.youtube.com/embed/UEG-NPkIGEo?si=TZTjFbmYvTEPloSy",
            };

        localStorage.setItem('personagem', JSON.stringify(superman))

        window.location.href = "generic.html"

    })

    btnFlash.addEventListener('click', () => {
        
        const flash = {
            nome: "Flash",
            breve_descricao: "O Velocista Escarlate, a pessoa mais rápida do mundo, protege Central City e o universo do crime com seus poderes de super velocidade.",
            habilidade_1: "Super velocidade",
            habilidade_2: "Viagem no tempo e entre dimensões",
            habilidade_3: "Aceleração molecular e intangibilidade",
            nome_real: "Barry Allen",
            afiliacoes: [
                "Liga da Justiça"
            ],
            arqui_inimigo: "Flash Reverso (Eobard Thawne)",
            primeira_aparicao: "Showcase #4 (outubro de 1956)",
            imagem: "../midia/personagens/12.png",
            video: "https://www.youtube.com/embed/j9CD6eITQes?si=sFWi1Elu9duXxEmz",
        };

        localStorage.setItem('personagem', JSON.stringify(flash))

        window.location.href = "generic.html"

    })

    btnMulherMaravilha.addEventListener('click', () => {
        
        const mulherMaravilha = {
            nome: "Mulher-Maravilha",
            breve_descricao: "A Princesa Diana de Themyscira, uma embaixadora da paz e guerreira amazona que luta por justiça, igualdade e verdade.",
            habilidade_1: "Super força e agilidade",
            habilidade_2: "Voo e combate corpo a corpo",
            habilidade_3: "Equipamentos mágicos (Laço da Verdade, Braceletes da Vitória)",
            nome_real: "Princesa Diana de Themyscira",
            afiliacoes: [
                "Liga da Justiça",
                "Amazonas de Themyscira"
            ],
            arqui_inimigo: "Cheetah (Mulher-Leopardo)",
            primeira_aparicao: "All Star Comics #8 (dezembro de 1941)",
            imagem: "../midia/personagens/10.png",
            video: "https://www.youtube.com/embed/fnwVEM6jAxA?si=GHckI_zJlomawAct",


        };

        localStorage.setItem('personagem', JSON.stringify(mulherMaravilha))

        window.location.href = "generic.html"

    })

    btnLanternaVerde.addEventListener('click', () => {
        
        const lanternaVerde = {
            nome: "Lanterna Verde",
            breve_descricao: "Um piloto de testes destemido que é escolhido pelo anel de poder, tornando-se um policial intergaláctico e membro da Tropa dos Lanternas Verdes.",
            habilidade_1: "Construção de energia verde com o anel",
            habilidade_2: "Voo e invulnerabilidade",
            habilidade_3: "Disparo de raios de energia",
            nome_real: "Hal Jordan",
            afiliacoes: [
                "Liga da Justiça",
                "Tropa dos Lanternas Verdes"
            ],
            arqui_inimigo: "Sinestro",
            primeira_aparicao: "Showcase #22 (outubro de 1959)",
            imagem: "../midia/personagens/14.png",
            video: "https://www.youtube.com/embed/jebGKyB1B9w?si=eu96dFOKVzBbz-8y",
        };

        localStorage.setItem('personagem', JSON.stringify(lanternaVerde))

        window.location.href = "generic.html"

    })

    btnAquaman.addEventListener('click', () => {
        
        const aquaman = {
            nome: "Aquaman",
            breve_descricao: "O Rei de Atlântida e um herói do mar, que equilibra seus deveres de governante com a proteção do mundo da superfície e dos oceanos.",
            habilidade_1: "Super força e resistência",
            habilidade_2: "Capacidade de respirar debaixo d'água",
            habilidade_3: "Telepatia com a vida marinha",
            nome_real: "Arthur Curry",
            afiliacoes: [
                "Liga da Justiça",
                "Atlântida"
            ],
            arqui_inimigo: "Arraia Negra",
            primeira_aparicao: "More Fun Comics #73 (novembro de 1941)",
            imagem: "../midia/personagens/16.png",
            video: "https://www.youtube.com/embed/TRpycXBoK6U?si=Ia52_DP-y-7FctOy",
        };

        localStorage.setItem('personagem', JSON.stringify(aquaman))

        window.location.href = "generic.html"

    })

    btnArqueiroVerde.addEventListener('click', () => {
        
        const arqueiroVerde = {
            nome: "Arqueiro Verde",
            breve_descricao: "Um bilionário playboy que, após naufragar em uma ilha deserta, se tornou um mestre arqueiro e vigilante, lutando pela justiça social em Star City.",
            habilidade_1: "Mestre em arco e flecha",
            habilidade_2: "Combate corpo a corpo e táticas de guerrilha",
            habilidade_3: "Habilidades de sobrevivência e rastreamento",
            nome_real: "Oliver Queen",
            afiliacoes: [
                "Liga da Justiça"
            ],
            arqui_inimigo: "Merlyn (Arthur King)",
            primeira_aparicao: "More Fun Comics #73 (novembro de 1941)",
            imagem: "../midia/personagens/15.png",
            video: "https://www.youtube.com/embed/PJ5cX3kwCcg?si=1NlK3xrUgDBJSyz6",
        };

        localStorage.setItem('personagem', JSON.stringify(arqueiroVerde))

        window.location.href = "generic.html"

    })

    btnCiborg.addEventListener('click', () => {
        
        const ciborg = {
            nome: "Ciborgue",
            breve_descricao: "Um ex-jogador de futebol americano que sofreu um acidente e foi transformado em um ciborgue, com um corpo tecnológico que lhe concede superpoderes.",
            habilidade_1: "Super força e resistência",
            habilidade_2: "Integração com tecnologia e controle de sistemas eletrônicos",
            habilidade_3: "Disparo de canhões de energia",
            nome_real: "Victor Stone",
            afiliacoes: [
                "Liga da Justiça",
                "Jovens Titãs"
            ],
            arqui_inimigo: "Grid",
            primeira_aparicao: "DC Comics Presents #26 (outubro de 1980)",
            imagem: "../midia/personagens/17.png",
            video: "https://www.youtube.com/embed/wMFuQj3Alfg?si=2d0qUJEPdnbOC9UY",
        };

        localStorage.setItem('personagem', JSON.stringify(ciborg))

        window.location.href = "generic.html"

    })

    btnDarkseid.addEventListener('click', () => {
        
        const darkseid = {
            nome: "Darkseid",
            breve_descricao: "O tirano e senhor do planeta Apokolips, que busca a Equação Anti-Vida para escravizar todas as formas de vida do universo, eliminando o livre-arbítrio.",
            habilidade_1: "Super força, velocidade e invulnerabilidade",
            habilidade_2: "Efeito Omega (disparos de energia dos olhos)",
            habilidade_3: "Intelecto de nível genial e manipulação",
            nome_real: "Uxas",
            afiliacoes: [
                "Apokolips",
                "Sociedade Secreta de Super Vilões"
            ],
            arqui_inimigo: "Liga da Justiça (principalmente Superman)",
            primeira_aparicao: "Superman's Pal Jimmy Olsen #134 (dezembro de 1970)",
            imagem: "../midia/personagens/4.png",
            video: "https://www.youtube.com/embed/rAQyogh6z_4?si=l2c4lw8Gza1LGvqR",
        };

        localStorage.setItem('personagem', JSON.stringify(darkseid))

        window.location.href = "generic.html"

    })

    btnAres.addEventListener('click', () => {
        
        const ares = {
            nome: "Ares",
            breve_descricao: "O deus grego da guerra e filho de Zeus, que se deleita com o conflito e a destruição. Ele é um inimigo jurado da Mulher-Maravilha, que ele vê como uma traidora de seus ideais de guerra.",
            habilidade_1: "Super força e imortalidade",
            habilidade_2: "Manipulação de conflitos e energia de combate",
            habilidade_3: "Teletransporte e controle de armas",
            nome_real: "Ares",
            afiliacoes: [
                "Panteão Grego"
            ],
            arqui_inimigo: "Mulher-Maravilha",
            primeira_aparicao: "Wonder Woman #1 (junho de 1942)",
            imagem: "../midia/personagens/6.png",
            video: "https://www.youtube.com/embed/MTZjXVMa4ZY?si=Wj6uQ_Hpb0vNib3b",
        };

        localStorage.setItem('personagem', JSON.stringify(ares))

        window.location.href = "generic.html"

    })

    btnCoringa.addEventListener('click', () => {
        
        const coringa = {
            nome: "Coringa",
            breve_descricao: "O Príncipe Palhaço do Crime, um psicopata anarquista que aterroriza Gotham City com atos de caos, violência e humor doentio. Ele é o arqui-inimigo do Batman.",
            habilidade_1: "Intelecto de gênio criminal",
            habilidade_2: "Mestre em táticas de manipulação psicológica",
            habilidade_3: "Habilidade de combate imprevisível",
            nome_real: "Desconhecido (diversas origens sugeridas)",
            afiliacoes: [
                "Injustiça Ilimitada"
            ],
            arqui_inimigo: "Batman",
            primeira_aparicao: "Batman #1 (primavera de 1940)",
            imagem: "../midia/personagens/9.png",
            video: "https://www.youtube.com/embed/sx1WlJyiEa8?si=xNXrWR891NqgeaQF",
        };

        localStorage.setItem('personagem', JSON.stringify(coringa))

        window.location.href = "generic.html"

    })

    btnFlashReverso.addEventListener('click', () => {
        
        const flashReverso = {
            nome: "Flash Reverso",
            breve_descricao: "Um velocista do século XXV e o arqui-inimigo do Flash. Ele odeia Barry Allen e utiliza seus poderes para viajar no tempo, alterar a história e atormentar o herói.",
            habilidade_1: "Super velocidade e aceleração molecular",
            habilidade_2: "Viagem no tempo e manipulação da Força de Aceleração",
            habilidade_3: "Habilidade de combate e intelecto de gênio",
            nome_real: "Eobard Thawne",
            afiliacoes: [
                "Legião do Mal"
            ],
            arqui_inimigo: "Flash (Barry Allen)",
            primeira_aparicao: "The Flash #139 (setembro de 1963)",
            imagem: "../midia/personagens/7.png",
            video: "https://www.youtube.com/embed/A7ZFc_Iujw0?si=hBiWimuJFsKaCdVp",
        };

        localStorage.setItem('personagem', JSON.stringify(flashReverso))

        window.location.href = "generic.html"

    })

    btnRedDeath.addEventListener('click', () => {
        
        const redDeath = {
            nome: "Red Death",
            breve_descricao: "Uma versão sombria do Batman do Multiverso das Trevas. Obcecado em salvar seus entes queridos, este Bruce Wayne se fundiu à força com seu Flash, tornando-se um velocista psicótico que utiliza o poder da Força de Aceleração para aterrorizar seus inimigos.",
            habilidade_1: "Super velocidade e manipulação da Força de Aceleração",
            habilidade_2: "Vibração molecular e viagem no tempo",
            habilidade_3: "Intelecto de gênio e táticas de combate do Batman",
            nome_real: "Bruce Wayne (da Terra -52)",
            afiliacoes: [
                "Os Cavaleiros das Trevas"
            ],
            arqui_inimigo: "Flash (Barry Allen)",
            primeira_aparicao: "Dark Days: The Casting #1 (julho de 2017)",
            imagem: "../midia/personagens/8.png",
            video: "https://www.youtube.com/embed/KVOI8iF3dME?si=9vcCp8vrY1nQzqR0",
        };

        localStorage.setItem('personagem', JSON.stringify(redDeath))

        window.location.href = "generic.html"

    })

    btnLexLuthor.addEventListener('click', () => {
        
        const lexLuthor = {
            nome: "Lex Luthor",
            breve_descricao: "Um gênio industrial e bilionário que se vê como o maior benfeitor da humanidade. Ele enxerga o Superman como uma ameaça alienígena e um obstáculo ao progresso humano, dedicando sua vida a derrotá-lo.",
            habilidade_1: "Intelecto de gênio e cientista brilhante",
            habilidade_2: "Táticas de manipulação e planejamento",
            habilidade_3: "Habilidade de combate em seu traje de batalha",
            nome_real: "Alexander 'Lex' Luthor",
            afiliacoes: [
                "LexCorp",
                "Sociedade Secreta de Super Vilões"
            ],
            arqui_inimigo: "Superman",
            primeira_aparicao: "Action Comics #23 (abril de 1940)",
            imagem: "../midia/personagens/18.png",
            video: "https://www.youtube.com/embed/fs8MH9DeSM4?si=uLA7VeLgBFQ0y81u",
        };

        localStorage.setItem('personagem', JSON.stringify(lexLuthor))

        window.location.href = "generic.html"

    })

    btnSinestro.addEventListener('click', () => {
        
        const sinestro = {
            nome: "Sinestro",
            breve_descricao: "Um ex-Lanterna Verde e mentor de Hal Jordan, banido por usar sua força para tiranizar seu setor. Ele agora lidera a Tropa Sinestro, empunhando um anel de poder amarelo alimentado pelo medo, opondo-se à Tropa dos Lanternas Verdes.",
            habilidade_1: "Construção de energia amarela (medo)",
            habilidade_2: "Voo e invulnerabilidade",
            habilidade_3: "Intelecto de gênio e táticas de manipulação",
            nome_real: "Thaal Sinestro",
            afiliacoes: [
                "Tropa Sinestro",
                "Legião do Mal"
            ],
            arqui_inimigo: "Lanterna Verde (Hal Jordan)",
            primeira_aparicao: "Green Lantern #7 (julho-agosto de 1961)",
            imagem: "../midia/personagens/19.png",
            video: "https://www.youtube.com/embed/5cOy7rPBdr0?si=ICIRwiP8jiOxdIY0",
        };

        localStorage.setItem('personagem', JSON.stringify(sinestro))

        window.location.href = "generic.html"

    })

    btnExterminador.addEventListener('click', () => {
        
        const exterminador = {
            nome: "Exterminador",
            breve_descricao: "Um mercenário e assassino de aluguel que se tornou um dos maiores inimigos dos Jovens Titãs e da Liga da Justiça. Ele utiliza suas habilidades táticas e de combate para enfrentar heróis.",
            habilidade_1: "Super força, agilidade e reflexos aprimorados",
            habilidade_2: "Mestre em artes marciais e combate com armas",
            habilidade_3: "Gênio tático e planejamento",
            nome_real: "Slade Wilson",
            afiliacoes: [
                "Sociedade Secreta de Super Vilões"
            ],
            arqui_inimigo: "Jovens Titãs",
            primeira_aparicao: "The New Teen Titans #2 (dezembro de 1980)",
            imagem: "../midia/personagens/20.png",
            video: "https://www.youtube.com/embed/1KhOMK3ghaw?si=a_AxktFaVEh8p8vZ",
        };

        localStorage.setItem('personagem', JSON.stringify(exterminador))

        window.location.href = "generic.html"

    })
    btnCapuzVermelho.addEventListener('click', () => {
        
        const capuzVermelho = {
            nome: "Capuz Vermelho",
            breve_descricao: "O segundo Robin que, após ser assassinado pelo Coringa e ressuscitado, retornou a Gotham como um vigilante mais brutal. Ele utiliza métodos letais para combater o crime, o que o coloca em conflito constante com seu antigo mentor, o Batman.",
            habilidade_1: "Mestre em artes marciais e combate com armas de fogo",
            habilidade_2: "Táticas de combate aprimoradas e pensamento estratégico",
            habilidade_3: "Habilidades de detetive e rastreamento",
            nome_real: "Jason Todd",
            afiliacoes: [
                "Bat-família (anteriormente)",
                "Fora da lei"
            ],
            arqui_inimigo: "Coringa",
            primeira_aparicao: "Batman #357 (março de 1983, como Jason Todd) e Batman: Under the Hood #1 (2005, como Capuz Vermelho)",
            imagem: "../midia/personagens/3.png",
            video: "https://www.youtube.com/embed/5Tu3KUlru1Q?si=vROddwQgEbnYbBlZ",
        };

        localStorage.setItem('personagem', JSON.stringify(capuzVermelho))

        window.location.href = "generic.html"

    })

    btnEtrigan.addEventListener('click', () => {
        
        const etrigan = {
            nome: "Etrigan, o Demônio",
            breve_descricao: "Um poderoso demônio de Hell que foi ligado ao humano Jason Blood pelo mago Merlin. Juntos, eles protegem a humanidade de ameaças sobrenaturais, muitas vezes com uma atitude sarcástica e destrutiva.",
            habilidade_1: "Super força e imortalidade",
            habilidade_2: "Pirocinese (lançar fogo do inferno)",
            habilidade_3: "Telepatia e teletransporte",
            nome_real: "Jason Blood (humano)/Etrigan (demônio)",
            afiliacoes: [
                "Liga da Justiça Sombria",
                "Demonios Três"
            ],
            arqui_inimigo: "Morgaine Le Fey",
            primeira_aparicao: "The Demon #1 (agosto de 1972)",
            imagem: "../midia/personagens/11.png",
            video: "https://www.youtube.com/embed/ttcr12k2_3s?si=k74rXuw25WV5Py-r",
        };

        localStorage.setItem('personagem', JSON.stringify(etrigan))

        window.location.href = "generic.html"

    })

    btnLobo.addEventListener('click', () => {
        
        const lobo = {
            nome: "Lobo",
            breve_descricao: "Um caçador de recompensas czarniano, conhecido por sua força, imortalidade e senso de humor sádico. Ele se autodenomina o 'Último Czarniano' após assassinar toda sua raça por diversão.",
            habilidade_1: "Super força, velocidade e imortalidade",
            habilidade_2: "Fator de cura regenerativo e invulnerabilidade",
            habilidade_3: "Habilidade de combate com correntes e ganchos",
            nome_real: "Lobo",
            afiliacoes: [
                "Nenhum (age sozinho)"
            ],
            arqui_inimigo: "Superman",
            primeira_aparicao: "Omega Men #3 (junho de 1983)",
            imagem: "../midia/personagens/5.png",
            video: "https://www.youtube.com/embed/00tJG0Mb9C4?si=UIAFasGVCYgQN6il",
        };

        localStorage.setItem('personagem', JSON.stringify(lobo))

        window.location.href = "generic.html"

    })

    btnConstantine.addEventListener('click', () => {
        
        const constantine = {
            nome: "John Constantine",
            breve_descricao: "Um mago e exorcista britânico sarcástico e cínico, que se especializa em combater ameaças sobrenaturais. Ele usa sua inteligência e conhecimento do oculto para enganar demônios e salvar o mundo, embora geralmente o faça de uma forma bastante relutante e egoísta.",
            habilidade_1: "Feitiçaria e magia negra",
            habilidade_2: "Conhecimento do ocultismo e exorcismo",
            habilidade_3: "Habilidade de manipulação e trapaça",
            nome_real: "John Constantine",
            afiliacoes: [
                "Liga da Justiça Sombria"
            ],
            arqui_inimigo: "Neron",
            primeira_aparicao: "The Saga of the Swamp Thing #37 (junho de 1985)",
            imagem: "../midia/personagens/30.png",
            video: "https://www.youtube.com/embed/aVzCdO89X1E?si=y4ANQ7Sonx4gaAxC",
        };

        localStorage.setItem('personagem', JSON.stringify(constantine))

        window.location.href = "generic.html"

    })

    btnGaviaoNegro.addEventListener('click', () => {
        
        const gaviaoNegro = {
            nome: "Gavião Negro",
            breve_descricao: "Um guerreiro alado, com uma história de reencarnação que o liga ao Egito Antigo e ao planeta Thanagar. Ele é um arqueólogo com memórias de suas vidas passadas, que usa seu conhecimento e equipamentos tecnológicos para lutar contra o mal.",
            habilidade_1: "Voo com asas de Metal Enésimo",
            habilidade_2: "Super força e agilidade aprimoradas",
            habilidade_3: "Habilidade de combate com maça e outras armas antigas",
            nome_real: "Carter Hall (ou Katar Hol)",
            afiliacoes: [
                "Liga da Justiça",
                "Sociedade da Justiça da América"
            ],
            arqui_inimigo: "Adão Negro (em algumas versões) / Hath-Set",
            primeira_aparicao: "Flash Comics #1 (janeiro de 1940)",
            imagem: "../midia/personagens/31.png",
            video: "https://www.youtube.com/embed/S8uP4RYlvrU?si=KvpbwPwf5a5OtInw"
        };

        localStorage.setItem('personagem', JSON.stringify(gaviaoNegro))

        window.location.href = "generic.html"

    })

    btnRorschach.addEventListener('click', () => {
        
        const rorschach = {
            nome: "Rorschach",
            breve_descricao: "Um vigilante brutal e inflexível com um código moral de preto e branco, que enxerga o mundo como corrupto e digno de punição. Ele investiga a morte do Comediante, desvendando uma conspiração que ameaça o mundo inteiro.",
            habilidade_1: "Detetive de alto nível",
            habilidade_2: "Excelente combatente corpo a corpo",
            habilidade_3: "Habilidade de se adaptar e improvisar armas e táticas",
            nome_real: "Walter Joseph Kovacs",
            afiliacoes: [
                "Os 'Minutemen' (anteriormente)"
            ],
            arqui_inimigo: "Ozymandias (Adrian Veidt)",
            primeira_aparicao: "Watchmen #1 (setembro de 1986)",
            imagem: "../midia/personagens/33.png",
            video: "https://www.youtube.com/embed/7Q4P96iN1D8?si=P-xFioC_d5cHVOql" 
        };

        localStorage.setItem('personagem', JSON.stringify(rorschach))

        window.location.href = "generic.html"

    })

    btnMulherGato.addEventListener('click', () => {
        
        const mulherGato = {
            nome: "Mulher-Gato",
            breve_descricao: "Uma ladra de joias e anti-heroína de Gotham City, com uma relação complexa e flertuosa com o Batman. Ela navega entre o mundo do crime e a luta pela justiça, motivada por seu próprio código moral e interesse.",
            habilidade_1: "Mestre em furtividade e roubo",
            habilidade_2: "Acrobacia e combate corpo a corpo",
            habilidade_3: "Manipulação e habilidades de persuasão",
            nome_real: "Selina Kyle",
            afiliacoes: [
                "Nenhuma (age sozinha)"
            ],
            arqui_inimigo: "Batman (relação amor/ódio)",
            primeira_aparicao: "Batman #1 (primavera de 1940)",
            imagem: "../midia/personagens/32.png",
            video: "https://www.youtube.com/embed/TgHuDcmKqIc?si=XD_MjleToh2f1mUs" 
        };

        localStorage.setItem('personagem', JSON.stringify(mulherGato))

        window.location.href = "generic.html"

    })

    btnVingadorFantasma.addEventListener('click', () => {
        
        const vingadorFantasma = {
            nome: "Vingador Fantasma",
            breve_descricao: "Um ser celestial e servo de Deus, que vaga pela Terra para redimir ou punir almas perdidas e corruptas. Ele é um agente da justiça divina, com poderes quase ilimitados para combater o mal em todas as suas formas.",
            habilidade_1: "Onisciência limitada e onipotência divina",
            habilidade_2: "Voo e teletransporte",
            habilidade_3: "Habilidade de projetar e manipular energia",
            nome_real: "Desconhecido (uma alma eterna)",
            afiliacoes: [
                "Nenhuma (age como agente de Deus)"
            ],
            arqui_inimigo: "Espectro",
            primeira_aparicao: "More Fun Comics #52 (fevereiro de 1940)",
            imagem: "../midia/personagens/34.png",
            video: "https://www.youtube.com/embed/qtNtPNs4i8c?si=v4-xmWGXPRAc46fw" 
        };

        localStorage.setItem('personagem', JSON.stringify(vingadorFantasma))

        window.location.href = "generic.html"

    })
})