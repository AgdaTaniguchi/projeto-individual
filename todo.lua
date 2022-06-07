Jogos
    KPI's:
        Quantidade de jogos
        Quantidade de categorias
        Quantidade de avaliações

    Gráficos:
        Categorias mais avaliadas

Sugestões
    KPI's:
        Quantidade de sugestões

Usuários
    KPI's:
        Quantidade de usuários
        Média de avaliações por usuário
    
    Gráficos:
        Novos usuários no último ano por mês
        Médias de avaliações no último ano por mês

Página inicial:
    TOP 5 Jogos da semana

Comandos:
    -- Top 5 Jogos avaliados da semana
    SELECT * FROM Avaliacao;
    SELECT nome, COUNT(fkJogo) AS 'quantidade' FROM Avaliacao
    INNER JOIN Jogo ON fkJogo = idJogo
    GROUP BY fkJogo
    ORDER BY quantidade DESC
    LIMIT 5;

    -- Quantidade de jogos
    SELECT COUNT(*) AS 'qtdJogos' FROM Jogo;

    -- Quantidade de categorias
    SELECT COUNT(*) AS 'qtdCategorias' FROM Categoria;

    -- Quantidade de avaliações
    SELECT COUNT(*) AS 'qtdAvaliacoes' FROM Avaliacao;

    -- Jogos avaliados por categoria
    SELECT C.nome, COUNT(fkUsuario) AS 'qtdJogos' FROM Avaliacao A
    INNER JOIN Jogo ON A.fkJogo = idJogo
    INNER JOIN JogoCategoria JC ON JC.fkJogo = idJogo
    INNER JOIN Categoria C ON JC.fkCategoria = idCategoria
    GROUP BY C.nome;

    -- Novos usuários no último ano por mês
    SELECT MONTH(dataCriacao) AS 'mes', COUNT(idUsuario) AS 'qtdUsuarios' FROM Usuario
    WHERE dataCriacao BETWEEN (CURRENT_DATE - INTERVAL 1 YEAR) AND CURRENT_DATE
    GROUP BY MONTH(dataCriacao);

    -- Médias de avaliações no último ano por mês