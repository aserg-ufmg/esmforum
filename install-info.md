# ESM Fórum

## Instruções para Instalação e Execução

Primeiro, clone o repositório para sua máquina local:

``` git clone https://github.com/aserg-ufmg/esmforum.git```

Em seguida, verifique se já possui instaladas as seguintes dependências (pule caso já tenha instalado):

- Nodejs: Instale a versão correspondente ao seu SO em [nodejs.org](https://nodejs.org/).
- Yarn:  ``` npm install --global yarn ```

Para executar o backend:

```
yarn
yarn dev
```
Caso alguma dependencia não tenha sido instalada ao rodar o comando anterior, execute "yarn add <dependencia> -D", exemplo: ``` yarn add ts-node-dev -D ```

Para executar o frontend:

```
cd frontend
npm install
npm start
```

