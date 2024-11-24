# Demo: Native Federation with SSR

## Trying it out

### 1. Building

npm i
ng build shell
ng build mfe1

### 2. Starting the Micro Frontend

cd dist/mfe1/server
node server.mjs

### 3. Starting the Shell

cd dist/shell/server
node server.mjs

After that, navigaate to `http://localhost:4200`.

## Remarks

For technical reasons, ng serve only makes the shell render the micro frontend on the client-side. After building, everything can be rendered on server-side too.