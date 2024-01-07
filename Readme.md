### Rust React Tailwind

Starter project for rust react and tailwind SAAS creation.

Rust is used for the backend and runs in a lambda.
React + Tailwind on the client.


### Running locally

```
cd client
npm run build
cd ../server
cargo lambda watch
```

Open your browser at `http://127.0.0.1:9000`


###
To deploy use
```
cargo lambda deploy --enable-function-url server --include dist
```