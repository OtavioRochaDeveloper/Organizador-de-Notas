# 🚀 Rocket Notes - Aplicação de Gerenciamento de Notas

Uma aplicação web moderna e responsiva desenvolvida em **React.js** com **Vite**, projetada para criar, organizar e gerenciar notas com eficiência. Inclui autenticação de usuários, sistema de tags e busca avançada.

---

## ✨ Funcionalidades

- 📝 **Criar, editar e deletar notas** com interface intuitiva
- 🏷️ **Sistema de Tags** para organização e categorização de notas
- 🔍 **Busca avançada** por título e conteúdo
- 👤 **Autenticação de usuários** com JWT
- 📸 **Upload de avatar** no perfil do usuário
- 🎨 **Interface moderna** com tema escuro e responsiva
- ⚡ **Hot Module Replacement (HMR)** para desenvolvimento rápido
- 📱 **Design responsivo** para todos os dispositivos

---

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| [React](https://react.dev/) | 18.3.1 | Biblioteca JavaScript para construir interfaces |
| [Vite](https://vitejs.dev/) | 7.3.0 | Ferramenta de build rápida e moderna |
| [React Router](https://reactrouter.com/) | 6.30.2 | Roteamento client-side da aplicação |
| [Styled Components](https://styled-components.com/) | 6.1.19 | CSS-in-JS para estilização de componentes |
| [Axios](https://axios-http.com/) | 1.13.2 | Cliente HTTP para requisições API |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.5.0 | Biblioteca de ícones SVG |

---

## 📂 Estrutura do Projeto

```bash
src/
├── assets/                 # Imagens e recursos estáticos
├── components/             # Componentes reutilizáveis
│   ├── button/            # Componente de botão
│   ├── ButtonText/        # Botão com texto
│   ├── Header/            # Cabeçalho da aplicação
│   ├── Input/             # Campo de entrada
│   ├── Note/              # Componente de nota
│   ├── NoteItem/          # Item individual de nota
│   ├── Section/           # Seção genérica
│   ├── Tag/               # Componente de tag
│   └── Textarea/          # Área de texto
├── hooks/                 # Custom hooks
│   └── auth.jsx           # Hook de autenticação
├── pages/                 # Páginas da aplicação
│   ├── Details/           # Detalhes da nota
│   ├── Home/              # Página inicial (dashboard)
│   ├── New/               # Criar nova nota
│   ├── Profile/           # Perfil do usuário
│   ├── SignIn/            # Login
│   └── SignUp/            # Registrar
├── routes/                # Configuração de rotas
│   ├── app.routes.jsx     # Rotas autenticadas
│   ├── auth.routes.jsx    # Rotas públicas
│   └── index.jsx          # Roteador principal
├── service/               # Serviços e API
│   └── api.js             # Configuração do Axios
├── Styles/                # Estilos globais
│   ├── global.js          # Estilos globais e resets
│   └── theme.js           # Configuração de tema
└── main.jsx               # Entrada da aplicação
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** versão 14+ instalado
- **npm** ou **yarn** instalado
- Backend rodando em `http://localhost:3333`

### Passo a Passo

#### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/Frontend-com-REACTjs.git
cd Frontend-com-REACTjs-main
```

#### 2. Instale as dependências
```bash
npm install
```

#### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173**

#### 4. Build para produção
```bash
npm run build
```

#### 5. Prévia do build
```bash
npm run preview
```

---

## 📋 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite |
| `npm run build` | Cria um build otimizado para produção |
| `npm run preview` | Visualiza o build de produção localmente |

---

## 🔐 Autenticação

A aplicação utiliza **JWT (JSON Web Tokens)** para autenticação:

- Tokens são armazenados em **localStorage**
- Requisições incluem o token no header `Authorization: Bearer <token>`
- Implementado via custom hook `useAuth()`
- Rotas protegidas com verificação de autenticação

---

## 🎨 Sistema de Temas

A aplicação possui um **sistema de tema centralizado** com cores predefinidas:

```javascript
COLORS: {
  BACKGROUND_800: '#1C1B1F',
  BACKGROUND_700: '#312E38',
  BACKGROUND_900: '#0D0C0F',
  WHITE: '#F4EDE8',
  ORANGE: '#FF9000',
  GRAY_100: '#CAC4CF',
  GRAY_300: '#948F99',
  RED: '#F75A68',
}
```

---

## 🔌 Integração com Backend

A aplicação se conecta a um backend em `http://localhost:3333`.

### Endpoints esperados:

```
POST   /sessions          # Login
POST   /users             # Registrar usuário
GET    /users/profile     # Perfil do usuário
PUT    /users             # Atualizar usuário
GET    /notes             # Listar notas
GET    /notes/:id         # Detalhes da nota
POST   /notes             # Criar nota
PUT    /notes/:id         # Atualizar nota
DELETE /notes/:id         # Deletar nota
GET    /tags              # Listar tags
```

---

## 🎯 Componentes Principais

### Pages (Páginas)
- **SignIn**: Página de login
- **SignUp**: Página de registros
- **Home**: Dashboard com lista de notas
- **New**: Criar nova nota
- **Details**: Visualizar detalhes da nota
- **Profile**: Perfil e configurações do usuário

### Components (Componentes)
- **Header**: Cabeçalho com perfil e logout
- **Input**: Campo de entrada reutilizável
- **Textarea**: Área de texto reutilizável
- **Button**: Botão padrão
- **Note**: Card de nota
- **NoteItem**: Item de tag dentro de nota
- **Tag**: Badge de tag

---

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1024px+)

---

## 🔧 Configurações Importantes

### Vite Config (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### API Config (`src/service/api.js`)
```javascript
import axios from 'axios'
export const api = axios.create({
  baseURL: 'http://localhost:3333'
})
```

---

## 🎨 Estilos

- **Styled Components**: CSS-in-JS para componentes
- **Global Styles**: Resets e estilos base
- **Letter Spacing**: 0.5px para melhor legibilidade
- **Tema Centralizado**: Cores e estilos consistentes

---

## 🐛 Correções e Melhorias Recentes

- ✅ Ajustes de espaçamento entre letras (letter-spacing)
- ✅ Melhorias no layout centralizado
- ✅ Otimização de componentes
- ✅ Correção de imports e paths

---

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **ISC**.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para gerenciamento eficiente de notas.

---

## 📞 Suporte

Para dúvidas ou sugestões, abra uma **issue** no repositório.





