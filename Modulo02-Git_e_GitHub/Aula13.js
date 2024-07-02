/*

// Git ID


É uma rash de 41 caracteres onde apenas os 7 primeiros são suficientes para identificar a maioria dos commits

// Git Objects



// Desmembrando commits

git hist <rash>

git cat-file -t <rash> -> imprimir o tipo do objeto

git cat-file -p <rash> -> mais informações


// Git

git pull --set-upstream origin <branch> -> Criar branchs no repositório local

git branch -a -> Mostra todos os repositórios remotos e locais

git branch -m <branch> -> Renomemia a branch remota

git push origin --delete <branch> -> Deleta a branch local
git push origin :<branch>         -> Deleta a branch local
git branch -d <branch>         -> Deleta a branch remota


Descartar alterações na área remota:
git restore <nome-do-arquivo> -> Apaga as alterações não commitadas (que estão apenas na área de trabalho

git clean <nome-do-arquivo> -f -> Apaga até mesmo o arquivo mas precisa ser forçado


// Descartar alterações na área de preparo:
git restore --staged <nome-do-arquivo> -> Volta a ser untracked

git revert head -> descomitar último arquivo que foram comitados (cria um commit novo e desfaz as alterações amteriores)
git revert head~1 -> descomitar penúltimo arquivo que foram comitados (cria um commit novo e desfaz as alterações amteriores)

git reset --soft <head~> -> Exclui o commit
git reset --mixed <head~> -> Tira da área de preparo
git reset --hard <head~> -> Apaga até as alterações

// Juntar branchs (sempre seleciona a a branch que você quer que as alterações venham e depois dê o git merge)

1. git branch main
2. git merge <branch> -> Vai juntar as branchs



// Tags

*/