const express = require("express");
const cors = require("cors");
const path = require("path");
const PORTA = 3333;

const app = express();

const indexRouter = require("./src/routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);

app.listen(PORTA, function(){
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA}`);
});