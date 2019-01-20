# Magic 8 Ball
A simple magic 8 ball service

## How to use

    npm install
    npm start

Open http://localhost:3000

### Debug

    npm run dev

## Built With

The server is running Express on NodeJS which serves the Magic 8 Ball its messages

The client side is built with React. Because the app is very small so it pulls React, ReactDOM, and Babel from unpkq instead of bundling it on the server. This is a little slow on the client but it's just a toy program. It doesn't do any sort of SSR either.