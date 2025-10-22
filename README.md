# 📝 Lista de Tarefas — React + Vite

Uma aplicação simples e moderna de **lista de tarefas (To-do List)** desenvolvida com **React 19** e **Vite 7**, usando JavaScript puro e persistência em **LocalStorage**.

---

## 🚀 Funcionalidades

✅ Adicionar novas tarefas  
✅ Marcar como concluída / reabrir  
✅ Editar título com duplo clique  
✅ Excluir tarefas  
✅ Filtros: **Todas**, **Ativas**, **Concluídas**  
✅ Limpar todas as concluídas  
✅ Persistência automática no navegador  
✅ Interface escura e responsiva  

---

## 🛠️ Tecnologias utilizadas

- [React 19](https://react.dev)
- [Vite 7](https://vitejs.dev)
- JavaScript (ESNext)
- HTML5 + CSS3 (tema dark)
- LocalStorage API

---

## 📂 Estrutura do projeto

```
todo-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── hooks/
    │   └── useLocalStorage.js
    └── components/
        ├── TodoInput.jsx
        ├── TodoItem.jsx
        └── Filters.jsx
```

---

## ⚙️ Como rodar o projeto localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seu-usuario/todo-react.git
   cd todo-react
   ```

2. **Instalar as dependências**
   ```bash
   npm install
   ```

3. **Executar o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   O projeto será aberto em:  
   👉 http://localhost:5173

---

## 🏗️ Build de produção

Gera a versão otimizada para deploy:

```bash
npm run build
npm run preview
```

A pasta final será `dist/`.

---

## 💡 Dicas de uso

- Clique duas vezes em uma tarefa para **editar o título**.  
- Use os botões **"Ativas"**, **"Concluídas"** e **"Todas"** para filtrar.  
- Clique em **“Limpar concluídas”** para remover as finalizadas.  
- As tarefas ficam salvas mesmo após fechar o navegador.

---

## 🌐 Deploy

Este projeto pode ser hospedado facilmente em:
- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com)
- GitHub Pages (`npm run build` → branch `dist`)

---

## ✨ Créditos

Desenvolvido por **Lucas Furlani da Silva**  
📧 [furlani.lucas7@gmail.com](mailto:furlani.lucas7@gmail.com)  
🌐 [linkedin.com/in/lucasfurlani](https://linkedin.com/in/lucasfurlani)

---

### 🧩 Licença
Este projeto é de uso livre para fins educacionais e portfólio.
