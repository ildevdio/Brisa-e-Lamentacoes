# Brisa e Lamentações

Plataforma para o sistema de RPG **Brisa e Lamentações**.

## Estrutura

- `apps/web`: Next.js/TypeScript; ficha digital e experiência de mesa.
- `apps/api`: ASP.NET Core; domínio, regras e API HTTP/SignalR.
- `database`: esquema PostgreSQL inicial.
- `docs`: decisões, inventário de regras e pendências explícitas.

## Executar o MVP

1. `cd apps/web && npm install && npm run dev`
2. `cd apps/api && dotnet run`

O front-end do MVP funciona com dados locais de demonstração; a API expõe o contrato e o hub em tempo real para a próxima conexão com PostgreSQL.

## Regra pendente

O efeito preciso de crítico ainda requer definição: se é dupla 12, dupla 1 ou ambos; e como exatamente altera Lucidez. O domínio mantém esse comportamento configurável e não o automatiza como regra oficial.
