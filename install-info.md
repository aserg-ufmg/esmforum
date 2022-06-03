# ESM Fórum

## Instruções para Instalação e Execução

Primeiro, clone o repositório para sua máquina local:

``` git clone https://github.com/aserg-ufmg/esmforum.git```

Em seguida, verifique se já possui instaladas as seguintes dependências (pule caso já tenha instalado):

- Nodejs. Sugerimos instalar a versão mais recente para o seu sistema operacional. Mais detalhes nesta [página](https://nodejs.org/en/download).
- Yarn.  Para instalar, use: ``` npm install --global yarn ```

Uma vez que possua todas as dependências tenham sido instaladas, você pode executar o sistema, conforme descrito a seguir.

**Para executar o backend:**

```
yarn
yarn dev
```
Caso alguma dependência não tenha sido instalada ao rodar o comando anterior, execute "yarn add <dependencia> -D", exemplo: ``` yarn add ts-node-dev -D ```

**Para executar o frontend:**

```
cd frontend
npm install
npm start
```

