console.log("Olá mundo")

// função simples
function figaOi() {
    alert("Oi");
};

// função anonima - não tem nome
const digaOi2 = () => {
    alert("Oi2");
};

// função anonima - de retorno
const digaOi3 = () => "Oi3";

// função anonima - de retorno com parametro
const digaOi4 = (nome) => "Oi4" + nome;

alert(digaOi4("Juana"));

 // função anonima - de retorno com parametro utilizando template string com crase
const digaOi5 = (nome) => `Oi5 ${nome}`;
