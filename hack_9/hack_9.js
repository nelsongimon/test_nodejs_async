/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

const fetch = require("cross-fetch");

async function fnTest() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url, {
    method: 'POST'
  })
  const data = response.json();
  return data;
}

module.exports = fnTest;