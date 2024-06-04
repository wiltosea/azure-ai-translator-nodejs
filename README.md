# API Intermediária o Serviço Microsoft Azure AI Translator

Para desenvolver uma API que atua como intermediária para tradução usando um serviço de tradução externo, o design MVC (Model-View-Controller) pode ser uma boa escolha. No entanto, para serviços de API, pode ser mais adequado usar uma arquitetura que separe as responsabilidades de forma clara, como a arquitetura de camadas (Layered Architecture).

Este modelo foi escolhido para construção de um microserviço de tradução que encapsulasse a chamada à API de tradução externa, permitindo a reutilização do serviço de tradução em diferentes partes da aplicação.

Caso seja necessário trocar o serviço provedor de tradução, o mesmo poderá ser feito de forma transparente, sem afetar as outras aplicações consumidoras.

## Estrutura Macro

### Camada de Apresentação (Presentation Layer)

- Controladores (Controllers): Recebem as requisições HTTP, validam os dados recebidos, e passam as informações para a camada de aplicação/serviço.

### Camada de Aplicação/Serviço (Application/Service Layer)

- Serviços (Services): Contém a lógica de negócio da aplicação. No seu caso, o serviço de tradução será responsável por interagir com a API de tradução externa.

### Camada de Infraestrutura (Infrastructure Layer)

- Clientes HTTP (HTTP Clients): Classes ou módulos responsáveis por fazer chamadas para a API de tradução externa.
- Configuração (Configuration): Configurações relacionadas às chamadas externas, como URLs das APIs, chaves de API, etc.

### Camada de Domínio (Domain Layer)

- Modelos (Models): Representações dos dados, como as requisições de tradução e as respostas.

## Como Implementar

### 1. Definir as variáveis de ambiente

Para manter as credenciais e configurações sensíveis fora do código-fonte, você pode usar variáveis de ambiente. Isso permite que você altere as configurações de acordo com o ambiente em que estiver rodando.
Faça uma cópia do arquivo .env.example na raiz do projeto e renomeie para .env. Preencha as variáveis de ambiente com as informações necessárias obtidas de sua conta Microsoft Azure.

### 2. Instale as dependencias

Este é um projeto que foi construído utilizando node.js, portanto, você precisará ter o node.js instalado em sua máquina. Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

### 3. Iniciar o servidor

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

## Wilson Seabra
