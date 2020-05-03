<h1 align="center">
  <img alt="GoFinances" title="GoFinances" src="assets/logo.svg" width="300px" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/go-finances-api?color=7D40E7">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Henrique Tavares-%20?color=7D40E7">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/tavareshenrique/go-finances-api?color=7D40E7">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/go-finances-api?color=7D40E7">
  <img alt="GitHub license" src="https://img.shields.io/github/license/tavareshenrique/go-finances-api?color=7D40E7">
</p>

<p align="center">
  <a href="#information_source-content">ℹ️ Content</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">🚀 Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-author">💻 Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">📝 License</a>
</p>

<div align="center"><a href="https://insomnia.rest/run/?label=Go%20Finances&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fgo-finances-api%2Fmaster%2Finsomnia%2FInsomnia_2020-05-03.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></div>

<p align="center">
  GoFinances is a simple financial control project developed during Rocketseat's GoStack 11. Its API is built using TypeORM and TypeScript.
</p>

---

# :information_source: Content

- [Transactions](#user)
  - [List All](#list-all-transactions)
  - [Create](#store-user)
  - [Create/Import](#update-user)

---

# Transactions

## **List All** Transactions

List All Transactions.

* **URL**

  `/transactions`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

    **Optional:**

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "transactions": [
        {
          "id": "418c5946-db65-422d-8d81-8302e77a8a81",
          "title": "Salary",
          "type": "income",
          "value": 3000,
          "category_id": "551915bf-4f34-4791-8a2d-90a962125bc1",
          "created_at": "2020-04-22T05:51:18.258Z",
          "updated_at": "2020-04-22T05:51:18.258Z",
          "category": {
            "id": "551915bf-4f34-4791-8a2d-90a962125bc1",
            "title": "Payment",
            "created_at": "2020-04-22T05:51:18.242Z",
            "updated_at": "2020-04-22T05:51:18.242Z"
          }
        },
      ]
    }
    ```

---

## **Create** Transaction

Create a single Transaction.

* **URL**

  `/transactions`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
     "title": "Electricity bill",
     "value": 400,
     "type": "outcome",
     "category": "Home"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "title": "Electricity bill",
      "type": "outcome",
      "value": 400,
      "id": "8587c56f-f5ba-4d8d-94b0-409a8d249d8c",
      "category": "Home"
    }
    ```

---

## **Create/Import** Transaction

Import transaction from CSV file.

* **URL**

  `/transactions`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    file - Multipart Form

* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "title": "Electricity bill",
      "type": "outcome",
      "value": 400,
      "id": "8587c56f-f5ba-4d8d-94b0-409a8d249d8c",
      "category": "Home"
    }
    ```

---

# :rocket: Technologies

- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [cors](https://github.com/expressjs/cors)
- [node-csv-parse](https://github.com/adaltas/node-csv-parse)
- [csvtojson](https://github.com/Keyang/node-csvtojson)
- [express-async-errors](https://github.com/davidbanham/express-async-errors)
- [multer](https://github.com/expressjs/multer)
- [pg](https://github.com/brianc/node-postgres/tree/master/packages/pg)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

---

# :computer: Author

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/
                feet-app/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
    <td align="center">
      <a href="https://github.com/Rocketseat/">
        <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" width="100px;" alt="Rocketseat"/>
        <br />
        <sub>
          <b>Rocketseat</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@Rocketseat</a>
       <br />
       <a href="https://github.com/tavareshenrique/go-marketplace/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
  </tr>
</table>

---

# :memo: License

This project is licensed under the MIT license - see the archive [LICENSE.md](https://github.com/tavareshenrique/go-finances-api/blob/master/LICENSE.md) for details.
