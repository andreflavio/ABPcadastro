import React, { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';

interface Credentials {
  username: string;
  password: string;
}

const App = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>ACESSE SUA CONTA</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">USUÁRIO</label>
            <input
              name="username"
              type="text"
              id="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">SENHA</label>
            <input
              name="password"
              type="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </div>
    </div>
  );
};

export default App;

/*
Para rodar e testar um projeto React, você precisa de uma estrutura de pastas e arquivos específica. Se você criou um novo projeto React usando `create-react-app`, a estrutura de pastas seria algo assim:

```
meu-projeto/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── reportWebVitals.ts
├── package.json
├── tsconfig.json
└── package-lock.json
```

Aqui está o que cada pasta/arquivo faz:

- `node_modules/`: Esta pasta contém todos os pacotes que seu projeto depende. Esses pacotes são instalados quando você executa `npm install`.

- `public/`: Esta pasta contém o arquivo HTML que serve de entrada para sua aplicação (`index.html`).

- `src/`: Esta pasta é onde seu código TypeScript e CSS vai. `App.tsx` e `App.css` são os arquivos que você já criou.

- `package.json`: Este arquivo lista as dependências do seu projeto e configura outras informações do projeto.

- `tsconfig.json`: Este arquivo configura o compilador TypeScript para o seu projeto.

- `package-lock.json`: Este arquivo é gerado automaticamente e ajuda a garantir que as versões dos pacotes que você usa sejam as mesmas em todas as instalações.

Se você apenas criou `App.tsx` e `App.css`, você precisará criar o restante dessa estrutura de pastas e arquivos. A maneira mais fácil de fazer isso é usando `create-react-app` com a flag `--template typescript`, que configura um novo projeto React com suporte a TypeScript:

```bash
npx create-react-app meu-projeto --template typescript
```

Depois de criar o projeto, você pode substituir o `App.tsx` e `App.css` gerados pelo `create-react-app` pelos seus próprios arquivos. Então você pode iniciar o servidor de desenvolvimento com `npm start` e ver sua aplicação rodando. 

Lembre-se de instalar todas as dependências necessárias para o seu projeto com `npm install`. Isso inclui `react` e `react-dom`, entre outros pacotes que você possa estar usando. 

Espero que isso ajude! Se você tiver mais perguntas, sinta-se à vontade para perguntar.

Origem: conversa com o Bing, 09/04/2024
(1) undefined. https://pt.slideshare.net/LucasCavalcante31/instalando-e-conectando-banco-de-dados-postgresql-extenso-espacial-postgis-no-qgis.
(2) undefined. https://4linux.com.br/o-que-e-postgis/.
(3) undefined. https://geoone.com.br/instalacao-postgresql-postgis/.
*/