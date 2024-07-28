/* class:
Definição: class é uma estrutura que permite criar e definir objetos com propriedades e métodos. É uma forma de criar um 
"molde" ou "blueprint" para objetos.

Uso: Define a estrutura e o comportamento de objetos que serão criados a partir dessa classe.

Componentes: Pode conter atributos (propriedades), métodos (funções) e o construtor.
*/


/* constructor:
Definição: constructor é um método especial dentro de uma classe que é chamado automaticamente quando um novo objeto é 
criado. Sua principal função é INICIALIZAR o objeto, ou seja, DEFINIR VALORES INICIAIS para os atributos do objeto e 
executar qualquer configuração necessária.

Uso: Inicializa o estado do objeto recém-criado, recebendo parâmetros e definindo as propriedades do objeto.

Componentes: É um método, mas não pode ser chamado diretamente; é invocado automaticamente durante a criação de um objeto
com new.
*/

/* FrontEnd */
class Cellphone {
  constructor(brand, year, model, ram, hd, price) {
    this.brand = brand;
    this.year = year;
    this.model = model;
    this.ram = ram;
    this.hd = hd;
    this.price = price;
  }
    /* CLASS é um molde, uma receita; e a INSTÂNCIA da CLASS é o objeto concreto */
    /* CONSTRUCTOR = pra que não precisemos preencher toda vez essas informações */
    /* constructor serve para dizer quais CARACTERÍSTICAS ele espera receber ao criar uma nova INSTÂNCIA de CLASS */
    /* this referêncio a INSTÂNCIA de CLASSE (cellphone) = valor */
    /* (this.brand) -> refere-se ao atributo brand da instância que tô criando */
    /* (= brand;) -> Refere-se ao valor do atributo */

  validateData() {
    for (let i in this) {
      /* Pensa que THIS virou um objeto, por isso podemos acessar ele assim */
      if (this[i] === undefined || this[i] === "") {
        return false;
        /* Se o usuário não preencher qualquer campo ele retorna FALSE */
        /* Se achar um return ele sai do LOOP */
      }
    }
    return true;
  }
}

function registerCellphone() {
  const brand = document.getElementById("brand").value;
  const year = document.getElementById("year").value;
  const model = document.getElementById("model").value;
  const ram = document.getElementById("ram").value;
  const hd = document.getElementById("hd").value;
  const price = document.getElementById("price").value;
  /* Defino a variável com o valor de cada campo */

  const cellphone = new Cellphone(brand, year, model, ram, hd, price);
  /* Estamos criando um objeto, a partir da class Cellphone */
  /* Defino que cellphone é uma INSTÂNCIA da class Cellphone */

  if (cellphone.validateData()) {
    /* Se validateData() dentro da class Cellphone voltar true então... */
    database.createCellphone(cellphone);
    /* ... cria um cellphone na base de dados */
    alert("Dados registrados com sucesso")
  } else {
    alert("Dados faltando");
  }
}

// ---------------------------------------------------------------------------------------------------------------------

/* BackEnd */
class Database {
  
  constructor() {
    const id = localStorage.getItem("id");
    /* Defino uma constante ID e o GETITEM pega elementos criados no LOCALSTORAGE  */
    /* Se não existir nenhum elemento, const id vai retornar null, se existir vai retornar o valor do ID */
    
    if (id === null) {
      localStorage.setItem("id", 0);
      /* Se o ID retornar NULL, então o ID será 0 */
    }
  }
  
  /* 0 */createCellphone(cellphone) {
  /* 0 Cria um ID pro cellphone */

    /* 1 */ const id = getNextId();
    /* 1 Adiciona +1 ao ID com a função getNextId(). */
    
    /* 2 */ localStorage.setItem(id, JSON.stringify(cellphone));
    /* 2 Estabelebe o ID do momento como o objeto (CELLPHONE) que é transformado em String */
    /* 2 Exemplo: id: 1, cellphone:[...] */

    /* 3 */ localStorage.setItem("id", id);
    /* 3 Salva o ID no localStorage com a STRING "id" */
  }

  
  function getNextId() {
    /* Essa função vai pegar o ID e adicionar +1 */
    
    const nextId = localStorage.getItem("id");
    /* Declaro a constante nextId e GETITEM pega os elementos criados no LOCALSTORAGE */
    
    return parseInt(nextId) + 1;
    /* Adiciona +1 no NEXTID */
  }
}

const database = new Database();