# ESM Fórum

## Instruções para Instalação e Execução

Primeiro, clone o repositório para sua máquina local:

``` git clone https://github.com/aserg-ufmg/esmforum.git```

Em seguida, verifique se já possui instalada a seguinte dependência (pule caso já tenha instalado):

- Nodejs. Sugerimos instalar a versão mais recente para o seu sistema operacional. Mais detalhes nesta [página](https://nodejs.org/en/download).

Uma vez que possua todas as dependências instaladas, você pode executar o sistema, conforme descrito a seguir.

**Para executar o backend:**

```
npm install
npm run dev
```
Caso alguma dependência não tenha sido instalada ao rodar o comando anterior, execute "npm install < dependencia > --save-dev", exemplo: ``` npm install ts-node-dev --save-dev ```

**Para executar o frontend:**

```
cd frontend
npm install
npm start
```

