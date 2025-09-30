# Design Web 2025 - Os pioneiros
<<<<<<< HEAD
---
A melhor turma de design web que já teve!
=======

## Como a Turma Vai Trabalhar com Fork no GitHub

Este é um guia simples para a turma colaborar no projeto usando GitHub.

---

### Passo 1: Fazer Fork do Projeto Original (feito pelo professor)
- **Fork** é fazer uma cópia do projeto de outra pessoa para a sua conta no GitHub.
- Assim você pode mexer nessa cópia sem atrapalhar o projeto original.
  

### Passo 2: Clonar o Fork no Computador
- **Clonar** significa copiar o projeto do GitHub para o seu computador, a partir da sua cópia, para trabalhar nele.
- No terminal (programa para digitar comandos), digite: `git clone https://github.com/{seu-user}/designweb`
  _Isso cria uma pasta no computador com o projeto para você mexer._

### Passo 3: Configurar o Repositório Original como Upstream
- **Upstream** é o nome que damos para o projeto original do professor.
- Assim você pode puxar as novidades do projeto original, para manter seu fork atualizado.
- No terminal, dentro da pasta do projeto, digite: `git remote add upstream https://github.com/awescolar/designweb`

### Passo 4: Sincronizar seu Fork com o Projeto Original
- **Sincronizar** é atualizar seu fork com as mudanças que o professor fez.
- Primeiro, vá para a branch principal (linha principal do projeto): `git checkout main`
- Depois, traga as novidades do projeto original: `git pull upstream main`.


### Passo 5: Criar uma Branch para Cada Atividade
- **Branch** é uma linha separada para trabalhar em uma tarefa sem mexer no restante do projeto.
- Para cada tarefa, crie uma branch nova, assim: `git checkout -b nome-da-sua-branch`


### Passo 6: Fazer Commit e Enviar para o GitHub
- **Commit** é salvar suas mudanças no computador, com uma mensagem que explica o que você fez.
- Para enviar suas mudanças para o seu fork no GitHub, use os comandos:

`git add .`
`git commit -m "Descrição do que foi feito"`
`git push origin nome-da-sua-branch`


### Passo 7: Abrir um Pull Request
- No GitHub, vá para seu fork e abra um **Pull Request** na sua branch.
- Pull Request é um pedido para o professor revisar e aceitar suas mudanças no projeto original.
- O professor analisa e, se aprovar, junta seu código com o projeto principal.

---
## Resumo dos Comandos Mais Usados
- `git clone https://github.com/{seu-usuario}/designweb`
- `git remote add upstream https://github.com/awescolar/designweb`
- `git checkout main`
- `git pull upstream main`
- `git checkout -b nome-da-sua-atividade`
- `git add .`
- `git commit -m "Mensagem explicando a mudança"`
- `git push origin nome-da-sua-atividade`


---
Esse processo ajuda a turma a colaborar, mantendo tudo organizado e atualizado com as tarefas do professor.
>>>>>>> 0c5abb658ca751b21798ce3fc53483c484f6ae3e
