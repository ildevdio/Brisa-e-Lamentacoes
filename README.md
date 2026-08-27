# Brisa e Lamentações

Plataforma para o sistema de RPG **Brisa e Lamentações**.

## Estrutura

- `apps/web`: Next.js/TypeScript; ficha digital e experiência de mesa.
- `apps/api`: ASP.NET Core; domínio, regras e API HTTP/SignalR.
- `database`: esquema PostgreSQL inicial.
- `docs`: decisões, inventário de regras e pendências explícitas.

## Executar o MVP

Na raiz do repositório:

1. `npm run install:web && npm run dev:web`
2. Em outro terminal: `npm run dev:api`

Também é possível executar diretamente nas pastas `apps/web` e `apps/api`.

O front-end do MVP funciona com dados locais de demonstração; a API expõe o contrato e o hub em tempo real para a próxima conexão com PostgreSQL.

## Regra pendente

O efeito preciso de crítico ainda requer definição: se é dupla 12, dupla 1 ou ambos; e como exatamente altera Lucidez. O domínio mantém esse comportamento configurável e não o automatiza como regra oficial.
