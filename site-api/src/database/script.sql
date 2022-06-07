DROP DATABASE AvaliaOGame;
CREATE DATABASE AvaliaOGame;

USE AvaliaOGame;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    nick VARCHAR(30) NOT NULL UNIQUE,
    senha CHAR(32) NOT NULL,
    email VARCHAR(50) CHECK(email LIKE '%@%') UNIQUE,
    dataCadastro DATE NOT NULL,
    administrador BOOLEAN
);

CREATE TABLE Jogo(
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(600),
    desenvolvedora VARCHAR(50)
);

CREATE TABLE Categoria(
	idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE,
    cor CHAR(6)
);

CREATE TABLE Avaliacao(
	fkJogo INT,
    FOREIGN KEY (fkJogo) REFERENCES Jogo(idJogo),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    PRIMARY KEY (fkJogo, fkUsuario),
    dataAvaliacao DATETIME,
    comentario VARCHAR(256),
    notaAudio DECIMAL(4, 2) CHECK(notaAudio >= 0 AND notaAudio <= 10),
    notaVisual DECIMAL(4, 2) CHECK(notaVisual >= 0 AND notaVisual <= 10),
    notaJogabilidade DECIMAL(4, 2) CHECK(notaJogabilidade >= 0 AND notaJogabilidade <= 10),
    notaHistoria DECIMAL(4, 2) CHECK(notaHistoria >= 0 AND notaHistoria <= 10),
    notaDiversao DECIMAL(4, 2) CHECK(notaDiversao >= 0 AND notaDiversao <= 10)
);

CREATE TABLE JogoCategoria(
	fkJogo INT,
    FOREIGN KEY (fkJogo) REFERENCES Jogo(idJogo),
    fkCategoria INT,
    FOREIGN KEY (fkCategoria) REFERENCES Categoria(idCategoria),
    PRIMARY KEY (fkJogo, fkCategoria)
);

CREATE TABLE JogoSugerido(
	idJogoSugerido INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    categoria VARCHAR(50),
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Categoria (nome, cor) VALUES ('Simulação', '3c13d1');
INSERT INTO Categoria (nome, cor) VALUES ('Ação', '128a16');
INSERT INTO Categoria (nome, cor) VALUES ('Um jogador', '23489e');
INSERT INTO Categoria (nome, cor) VALUES ('FPS', 'd1133c');
INSERT INTO Categoria (nome, cor) VALUES ('Multijogador', '0dbd9f');

INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('minecraft', 'Joguinho legal', 'Mojang');
INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('valorant', 'FPS tático', 'Riot');
INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('overwatch', 'fps', 'Blizzard');
INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('portal 2', 'Jogo top demais, nossa senhora, que jogo bom', 'Blizzard');
INSERT INTO Jogo (nome, descricao, desenvolvedora) VALUES ('league of legends', 'fps', 'Blizzard');

INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (1, (SELECT idCategoria FROM categoria WHERE nome = 'Simulação'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (1, (SELECT idCategoria FROM categoria WHERE nome = 'Ação'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (1, (SELECT idCategoria FROM categoria WHERE nome = 'Um jogador'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (2, (SELECT idCategoria FROM categoria WHERE nome = 'FPS'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (3, (SELECT idCategoria FROM categoria WHERE nome = 'FPS'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (3, (SELECT idCategoria FROM categoria WHERE nome = 'Simulação'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (4, (SELECT idCategoria FROM categoria WHERE nome = 'Um jogador'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (4, (SELECT idCategoria FROM categoria WHERE nome = 'Multijogador'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (4, (SELECT idCategoria FROM categoria WHERE nome = 'Simulação'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (5, (SELECT idCategoria FROM categoria WHERE nome = 'FPS'));
INSERT INTO JogoCategoria (fkJogo, fkCategoria) VALUES (5, (SELECT idCategoria FROM categoria WHERE nome = 'Simulação'));