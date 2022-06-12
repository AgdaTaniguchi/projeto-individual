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