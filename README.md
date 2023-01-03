# Run2biz Challenge - QA

O objetivo deste desafio é avaliar a competência técnica dos candidatos. Queremos avaliar o processo de resolução das demandas, como é feita a criação dos cenários de teste, reporte de *bugs* e escrita de testes automatizados. Não se preocupe em entregar algo perfeito.

# O desafio

No nosso dia a dia, trabalhamos com APIs REST e sistemas web. Desta forma, este projeto contém apenas duas funcionalidades básicas: cadastro e login de usuário. Para cada funcionalidade deve ser feito:

## 1. Elaboração do roteiro de teste

Considerando que serão feitos testes manuais, escreva os casos de teste para validação das funcionalidades utilizando a metodologia BDD. Exemplo:

> ## **Título**: Cadastro de usuário
> ### **Cenário 1**: Usuários com nome inválido não devem ser cadastrados.  
> **Dado** um usuário que ainda não foi cadastrado  
> **quando** for informado um nome sem letras  
> **então** devo receber uma mensagem de erro  

## 2. Reporte de *bugs*

Caso alguma funcionalidade não esteja de acordo com os requisitos ou não passem no teste, deve ser montado um documento com as evidências. Não existe um modelo padrão, fique livre para usar um de sua escolha.

## 3. Testes de API

Usando o programa **Postman**, realize os testes de API e exporte a *collection* na versão v2.1 como arquivo JSON.

![Export collection Postman](/resources/img/export-postman.png)

## 4. Testes automatizados de interface (*end-to-end*)

> **A realização desta etapa será considerada um diferencial.**

Utilizando o [*Robot Framework*](https://robotframework.org), escreva os testes automatizados de interface para os cenários de testes criados anteriormente, no [passo 1](#1-elaboração-do-roteiro-de-teste).

# Especificação dos requisitos

## Cadastro de usuário

1. Usuário deve informar nome, CPF, email e senha;
    1. Todos os dados são obrigatórios;
    2. O nome deve conter apenas letras;
    3. Caso seja informado um CPF ou email inválido, deve ser exibida uma mensagem de erro;
    4. A senha tem que ter no mínimo 8 dígitos;
2. Caso já exista um usuário cadastrado com o mesmo CPF ou email, deverá ser exibida uma mensagem de erro.

## Login de usuário

1. Usuário deve informar email e senha;
2. Caso a senha ou email sejam inválidos, deve ser exibida uma mensagem de erro;
3. Após o login, deve ser exibida uma mensagem de sucesso.

# Como entregar

Você deve disponibilizar os arquivos em algum serviço de hospedagem como Bitbucket, GitLab ou GitHub e manter o repositório como público. Nos envie um email assim que finalizar e informe o que você melhoraria se tivesse mais tempo, caso ache necessário.  

Bom desafio!

# Critérios de avaliação

- Cenários de teste descritos (positivos e negativos)
- Qualidade de escrita do teste
- Organização do projeto
- Utilização do Git
