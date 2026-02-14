# 🚀 Boilerplate Laravel + Inertia + Vue 3

Boilerplate base para iniciar projetos modernos utilizando Laravel com stack completa frontend + backend integrada.

---

## 📦 Stack Principal

- Laravel com Sail (Docker)
- Inertia.js
- Vue 3
- Vite
- TypeScript
- TailwindCSS
- ESLint
- Prettier
- WayFinder
- Ziggy
- Laravel Pail
- PestPHP

---

## 🌎 Localização

Projeto configurado para **pt-BR**, utilizando:

https://github.com/lucascudo/laravel-pt-BR-localization

---

## 🐳 Ambiente com Docker (Laravel Sail)

Este projeto utiliza o Laravel Sail, portanto não é necessário instalar PHP, MySQL ou Node diretamente na máquina.

### Subir containers

```bash
./vendor/bin/sail up -d
```

Ou criar alias:

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

Depois:

```bash
sail up -d
```

---

## ⚙️ Instalação do Projeto

### 1️⃣ Criar projeto Laravel

Utilize o instalador oficial:

https://php.new/

```bash
laravel new nomedosistema
```

---

### 2️⃣ Instalar Sail

```bash
composer require laravel/sail --dev
php artisan sail:install
```

---

### 3️⃣ Instalar dependências PHP

```bash
sail composer install
```

---

### 4️⃣ Instalar dependências Node

```bash
sail npm install
```

---

### 5️⃣ Copiar .env

```bash
cp .env.example .env
```

---

### 6️⃣ Gerar chave da aplicação

```bash
sail artisan key:generate
```

---

### 7️⃣ Rodar migrations

```bash
sail artisan migrate
```

---

## 🔧 Configurações Padrão Recomendadas

Editar:

```
app/Providers/AppServiceProvider.php
```

Adicionar no método `boot()`:

```php

public function boot(): void
{
    // Habilita erros no mode de desenvolvimento
        Model::shouldBeStrict(!$this->app->isProduction());

        // Não deixa executar comendas destrutivos no DB
        DB::prohibitDestructivecommands($this->app->isProduction());

        // Forçar o vite
        Vite::useAggressivePrefetching();

        //força o HTTP
        URL::forceHttps($this->app->isProduction());

        // padrão de senha no min 12 max 255 e que não seja comprometida
        Password::defaults(fn (): ?Password => app()->isProduction() ? Password::min(12)->max(255)->uncompromised() : null);
}
```

---

## ⚡ Inertia.js + Vue 3

### Instalação Server-Side

```bash
sail composer require inertiajs/inertia-laravel
```

Finalize seguindo a documentação oficial.

### Instalação Client-Side (Vue + Vite)

Documentação:

https://laravel.com/docs/12.x/vite#vue  
https://laravel.com/docs/12.x/vite#inertia

---

## 🟦 TypeScript (Opcional)

```bash
sail npm install -D typescript
sail npx tsc --init
```

Criar o arquivo `tsconfig.json` conforme necessidade do projeto.

---

## 🎨 Prettier (Padronização de Código)

Instalar:

```bash
sail npm install -D prettier \
prettier-plugin-organize-imports \
prettier-plugin-classnames \
prettier-plugin-merge \
prettier-plugin-tailwindcss
```

Instalar utilitários Tailwind:

```bash
sail npm install -D tailwind-merge clsx class-variance-authority tw-animate-css
```

Adicionar no `package.json`:

```json
"prettier:analyse": "prettier --check resources/",
"prettier:execute": "prettier --write resources/"
```

Executar:

```bash
sail npm run prettier:analyse
sail npm run prettier:execute
```

Criar `.prettierignore`:

```
resources/views/mail*
```

---

## 🧹 ESLint (Qualidade de Código)

Instalar versões compatíveis:

```bash
sail npm install -D \
eslint@9 \
@eslint/js@9 \
eslint-config-prettier \
eslint-plugin-vue@9 \
@vue/eslint-config-typescript@14 \
typescript-eslint@8
```

Criar:

```
eslint.config.ts
```

Adicionar no `package.json`:

```json
"lint": "eslint . --fix"
```

Executar:

```bash
sail npm run lint
```

Regras recomendadas:

```ts
rules: {
  'vue/multi-word-component-names': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  'no-undef': 'error',
}
```

---

## 🧭 WayFinder

Repositório:

https://github.com/laravel/wayfinder

Adicionar no `vite.config.ts`:

```ts
wayfinder({
  path: 'resources/js/wayfinder',
  formVariants: false,
}),
```

---

## 🔗 Ziggy

Repositório:

https://github.com/tighten/ziggy

Criar `types.d.ts`:

```ts
import { route as routeFn } from 'ziggy-js';

declare global {
  var route: typeof routeFn;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    route: typeof routeFn;
  }
}
```

Adicionar no `tsconfig.json`:

```json
"paths": {
  "@/*": ["./resources/js/*"],
  "ziggy-js": ["vendor/tightenco/ziggy"]
}
```

Adicionar no `vite.config.ts`:

```ts
resolve: {
  alias: {
    'ziggy-js': '/vendor/tightenco/ziggy',
  },
},
```

---

## 📜 Laravel Pail

Repositório oficial:

https://github.com/laravel/pail

---

## 🧪 Testes com PestPHP

Documentação:

https://pestphp.com/docs/installation

Inicializar:

```bash
sail bin pest --init
```

Executar testes:

```bash
sail bin pest
```

### Plugins úteis

Migração PHPUnit → Pest (Drift)  
https://pestphp.com/docs/migrating-from-phpunit-guide

Plugin Laravel  
https://pestphp.com/docs/plugins#laravel

Browser Testing (Pest v4)  
https://pestphp.com/docs/pest-v4-is-here-now-with-browser-testing

---

## 📄 License

The Laravel framework is open-sourced software licensed under the MIT License.
