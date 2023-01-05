# Unpretentious application for notes

Installation
------------

* **Python** => 3.11
* **Node** => 18.4.0

Start
-----

Create file `backend/.env` or delete `.example` in the `backend/.env.example` file

Fill in the data in the file `.env`

```dotenv
SECRET_KEY=KEY
DEBUG='1 - True, 0 - False'
ALLOWED_HOSTS=localhost,127.0.0.1,etc...
```

Run
---

```
docker-compose up
```

### Standard ports

* [Backend](http://localhost:8000/): 8000
* [Frontend](http://localhost:3001/): 3001
