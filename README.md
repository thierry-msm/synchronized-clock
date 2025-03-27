# Relógio Sincronizado: WebSocket vs HTTP Polling

## 📌 Descrição do Projeto

Este projeto demonstra duas técnicas diferentes de sincronização de tempo em tempo real entre cliente e servidor: WebSocket e HTTP Polling. O objetivo é mostrar como diferentes métodos de comunicação podem atualizar informações em tempo real em uma aplicação web.

## ✨ Funcionalidades

- Dois relógios sincronizados com o horário do servidor
- Relógio WebSocket com atualização instantânea
- Relógio HTTP Polling com atualização periódica
- Interface moderna e responsiva

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- WebSocket (ws)
- HTML5
- CSS3
- JavaScript (ES6+)

## 📦 Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente instalado com Node.js)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/thierry-msm/synchronized-clock
cd synchronized-clock
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Como Executar

```bash
npm start
```

Abra seu navegador em `http://localhost:3000`

## 🔍 Detalhes Técnicos

### WebSocket
- Conexão em tempo real
- Comunicação bidirecional
- Menor latência
- Atualização instantânea do horário

### HTTP Polling
- Requisições periódicas do cliente
- Comunicação unidirecional
- Maior overhead de rede
- Possível atraso na atualização

## 💡 Como Funciona

### Servidor (server.js)
- Mantém dois métodos de comunicação:
  1. Servidor WebSocket enviando tempo automaticamente
  2. Endpoint de polling para requisições periódicas

### Cliente (script.js)
- Implementa lógica para:
  1. Conexão e atualização via WebSocket
  2. Polling periódico para buscar tempo

## 🎨 Interface

- Design responsivo
- Dois relógios lado a lado
- Diferenciação visual entre métodos

## 🤔 Por que dois métodos?

- Demonstrar diferentes estratégias de comunicação em tempo real
- Comparar performance e user experience
- Entender prós e contras de cada abordagem

## 🔒 Segurança

- Validações básicas no servidor
- Tratamento de erros de conexão
- Envio de tempo somente quando modificado
