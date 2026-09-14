# BVolt Academia — regras para correções automáticas

Site institucional da BVolt Academia (Guapimirim/RJ), cliente da Atlas Tecnologias.
Vite + React + TypeScript + Tailwind. Publicado pela Vercel a partir da branch `main`
(https://bvolt-academia.vercel.app). Cada Pull Request recebe uma prévia automática da Vercel.

## Comandos

- `npm ci` — instalar dependências (use sempre este, nunca `npm install`)
- `npm run lint` — ESLint
- `npm run build` — `tsc -b && vite build` (saída em `dist/`)

Antes de concluir qualquer correção, rode `npm run lint` e `npm run build`. Se algum falhar,
a correção não está pronta.

## Estrutura

- `src/App.tsx` monta as seções; cada seção é um componente em `src/components/`
  (Hero, Sobre, Servicos, Planos, Horarios, Galeria, Depoimentos, Contato, Footer, Navbar,
  BannerOferta, WhatsAppButton).
- `public/` guarda fotos e vídeos do cliente (~31 MB).
- `vercel.json` define build, rewrites de SPA e cache de mídia.

## Regras

1. Corrija só o problema descrito na issue, com a menor mudança possível. Nada de refatoração,
   renomeação ou "melhorias" fora do escopo.
2. Não altere textos, preços, horários, contatos, depoimentos nem a identidade visual do cliente,
   a menos que a issue peça explicitamente.
3. Não adicione, remova nem atualize dependências sem que a issue peça. Se a correção exigir,
   explique o motivo na descrição e pare para revisão humana.
4. Nunca mexa em `public/` (mídia do cliente), em `.github/` (workflows) nem em `vercel.json`
   sem pedido explícito.
5. Nunca grave segredos, tokens, chaves ou dados pessoais no código ou nos commits.
6. Mensagens de commit em português, no formato `fix: ...` ou `feat: ...`.
7. Explique na issue o que causou o problema, o que foi alterado e como verificar na prévia.
8. Se não tiver certeza da causa, não invente uma correção: descreva o que investigou e o que
   falta para um humano decidir.
