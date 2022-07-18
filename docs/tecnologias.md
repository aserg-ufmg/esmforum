# ESM Forum

## Tecnologias

## Linguagem de Programação

O ESM Forum é implementado em TypeScript, que é uma extensão de JavaScript com suporte a verificação estática de tipos. 
Isto é, em TypeScript, podemos informar o tipo de variáveis, parâmetros, etc. 

Antes de serem executados, 
programas TypeScript são primeiro compilados (ou convertidos) para código JavaScript.

## Bibliotecas

Usamos também os seguintes sistemas e bibliotecas: 

* No backend: 
  * Node.js, um sistema que permite a execução de programas JavaScript fora de browsers.
  * Express.js, uma biblioteca para construção de aplicações Web em Node.js.
  * SQLite, um banco de dados relacional simples e implementado na forma de uma biblioteca.
  
* No frontend: 
  * React, um conhecido framework para construção de single page applications (SPAs).

Tanto no back como no frontend, usamos o npm para gerenciamento e instalação de dependências externas. Ou seja, 
as dependências, isto é, bibliotecas, frameworks, etc, usadas pelo ESM Forum são automaticamente baixadas e 
instaladas pelo npm. Para ver as dependências do backend, veja o arquivo [package.json]() 

Porque escolheram esse stack de tecnologias? Porque ele é muito utilizado hoje em dia para desenvolvimento de novas aplicações, 
principalmemte aquelas que lidam com informações e transações, como é o caso do ESM Forum.

