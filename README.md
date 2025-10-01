🚀 Mini Projeto DevOps

Este repositório contém um projeto prático desenvolvido para consolidar conhecimentos em **Node.js, Docker, AWS e CI/CD**.  
O objetivo é simular um fluxo real de desenvolvimento e operações (DevOps), desde a criação de uma API até sua implantação em nuvem com pipeline automatizado.

---
📌 Objetivos do Projeto
- Criar uma API CRUD simples em **Node.js + Express**.
- Containerizar a aplicação com **Docker**.
- Realizar deploy em uma instância **AWS EC2**, integrando com **RDS** e **S3**.
- Configurar pipeline de **CI/CD com GitHub Actions**.
- Aprender e aplicar práticas DevOps no dia a dia.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js + Express** – Criação da API.
- **Docker** – Containerização da aplicação.
- **AWS (EC2, RDS, S3 )** – Infraestrutura em nuvem.
- **Git & GitHub** – Versionamento de código.
- **GitHub Actions** – Automação de pipeline CI/CD.
- **Postman** – Testes de API.

## 📂 Estrutura do Projeto

Projeto-NodeJS/
│
├── modules/
│   ├── express.js/          ← 
│   ├── fs.js/               ← 
│   ├── http.js/             ← 
│   └── path.js              ← 
│
├── node_modules/              ← dependências instaladas (não versionar)
│
└── src/
    ├── database/
│       └── connect.js
│   
    ├── models/
│        └── user.model.js
│    
    ├── views/
│       ├── index.js
│       └── partials/
│           ├── head.ejs
│           └── navbar.ejs      
│
├── index.js
├── package-lock.json          ← lockfile das dependências
├── README.md                   ← documentação do projeto

📦 Próximos Passos
✅Criar API Node.js (CRUD de usuários)
❎Containerizar com Docker
❎Configurar deploy em AWS EC2 + RDS + S3
❎Criar pipeline CI/CD com GitHub Actions
