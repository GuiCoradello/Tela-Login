// acesso a cards
const loginCard = document.querySelector('[data-loginCard]');
const cads = document.querySelector('[data-cads]');

//botoen para abrir os cards login/cadastro
const selectLogar = document.querySelector('[data-selectLogar]');
const selectCads = document.querySelector('[data-selectCads]');

//acesso a inputs preenchidos cadastro
const nomeCads = document.querySelector('[data-cadName]');
const dateCads = document.querySelector('[data-cadDate]');
const emailCads = document.querySelector('[data-cadEmail]');
const senhaCads = document.querySelector('[data-cadSenha]');

//acesso a inputs preechidos login
const emailLogin = document.querySelector('[data-user]');
const senhaLogin = document.querySelector('[data-senha]');

//botoes logar e cadastrar
const botaoCadastrar = document.querySelector('[data-cad]')
const botaoLogin = document.querySelector('[data-login]');

//Gravar cadastro 
const SalvarBancoDeDados = (chave, valor) => { localStorage.setItem(chave, valor) }

//mensagem login
const mensagemLogin = document.querySelector("[data-mensagemLogin]")



selectLogar.addEventListener('click', () => {
  loginCard.classList.remove("inative")
  cads.classList.add('inative')
})

selectCads.addEventListener('click', () => {
  cads.classList.remove('inative')
  loginCard.classList.add("inative")
})



botaoCadastrar.addEventListener('click', () => {
  SalvarBancoDeDados('clienteNome', nomeCads.value);
  SalvarBancoDeDados("clienteEmail", emailCads.value);
  SalvarBancoDeDados("clienteSenha", senhaCads.value);
  nomeCads.value = "";
  emailCads.value = "";
  senhaCads.value = "";
})

botaoLogin.addEventListener('click', () => {
  const clienteEmailBanco = localStorage.clienteEmail
  const clienteSenhaBanco = localStorage.clienteSenha
  const comparaEmailLoginComBanco = emailLogin.value == clienteEmailBanco;
  const comparaSenhaLoginComBanco = senhaLogin.value == clienteSenhaBanco;
  const mensagemLoginSucess = `<p class='mensagem--colorGreen'> login efetuado com sucesso </p>`;
  const mensagemLoginFail = `<p class='mensagem--colorRed'> usuario nao encontrado</p> `

  if(comparaEmailLoginComBanco && comparaSenhaLoginComBanco) {
    mensagemLogin.innerHTML = mensagemLoginSucess ;
  } else {
    mensagemLogin.innerHTML = mensagemLoginFail ;
  }

})
