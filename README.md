# Hugo Tailwind JIT

A template repo to make Tailwind JIT work with Hugo.

## For Windows users

after watching this [youtube video](https://www.youtube.com/watch?v=t9okUDkRUDc)

1. Install cross-env

  ```sh
  npm i -D cross-env
  ```

2. Add cross-env to the dev comand in **package.json**

  ```sh
  "dev": "cross-env NODE_ENV=development ./node_modules/tailwindcss/lib/cli.js -i ./static/tailwind.css -o ./static/main.css -w",
  ```

## Install Dependencies

```sh
npm install
```

## Development Server

Tailwind Watcher:

```sh
npm run dev
```

Hugo Server, in another tab:

```sh
hugo server
```

## Production Build

for Windows users

```sh
npm run build, hugo --minify
```

for others 
```sh
npm run build && hugo --minify
```

