console.log("DOM");

const h1 = document.querySelector("h1");

h1.innerText = "Título 1";
h1.innerHTML += "<span>Título com span</span>";

console.log(h1);

document.body.append(h1);

h1.innerText = "Mudei de novo";

function criarElementos(data) {
    const h1 = document.createElement("h1");
    const div = document.createElement("div");
    const p = document.createElement("p");
    h1.innerText = data.titulo;
    p.innerText = data.descricao;
    div.append(h1);
    div.append(p);
    document.body.append(div);
}

const busca = fetch("https://dummyjson.com/users")
    .then(
        function (response) {
            console.log("Dado que veio sem tratamento: ",response);    
            return response.json();
        }
    )
    .then(
        function (data){
            const usuarios = data.users;

            usuarios.forEach(
                (usuario) => 
                    criarElementos({
                        titulo: usuario.firstName,
                        texto: usuario.email
                    })
            )

        }
    );

const funcionario = [
    {
        nome: "Juana",
        email: "juana@bol.com.br"
    },
    {
        nome: "Carlos",
        email: "carlos@bol.com.br"
    },
    {
        nome: "Maria",
        email: "madu@bol.com.br"
    },
];

funcionarios.users.forEach((funcionario) => {
    console.log(funcionario.nome);
    console.log(funcionario.email);
  });