console.log("Aula de Git");

// Isso é apenas um teste para aprender a mexer no GitHub e no Git

/*
git init -> Inicia o git na pasta

git add . -> Adiciona todos os arquivos na fila
git add Aula.js -> Só incluirá o arquivo que eu mandar incluir

git commit -m "Inclusão de informações no arquivo Aula11.js" -> Comitar as alterações

git remote add origin (url) -> Adiciona o repositório para envio

git pull origin main --allow-unrelated-histories -> Permitir pull de arquivos do repositório

git push --set-upstream origin main -> Seta o local do push

git push -> Envia o arquivo pro repositório, mas se não der certo tem que especificar para onde mandar
*/


/* 
Comandos do Git:

git commit --amend -m "Nova Mensagem" -> trocar a mensagem

git reset -> desfazer o commit

git reset soft ->

git reset mixed -> 

git reset hard ->
*/

/* O que é uma BRANCH?

É pegar uma cópia (um ramo) e abstrair. Puchar uma cópia e não afetará o principal.
Copiar o código da brench principal. Sem afetar o ramo principal.

1. Ambiente local
2. Ambiente de desenvolvimento (nuvem, servidor)
3. Ambiente de homologação
4. Ambiente produtivo (que de fato está funcionando)

Como criar uma branch?

git branch -> Ver as branchs disponíveis

git checkout -b "Botão barra de pesquisa" -> Cria uma nova branch

git checkout <branch>(main) -> Navega pra branch querida

git branch -d <branch>(Branch-nova-para-teste) -> deleta a branch localmente

git push origin --delete <branch>(Branch-nova-para-teste)

git show -> mostra o que foi alterado

git log -> ele marca todas as alterações feitas
git log --oneline ->

*/


Estragando o código para testar a troca de branchs e upload para o repositório