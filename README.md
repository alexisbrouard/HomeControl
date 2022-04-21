
![Logo](https://images.viblo.asia/f8d4357a-1d85-49a4-9f3d-b849aefde820.png)


# Home Control

This API allows the management of users of a house, its sensors and
of its actuators, while respecting certain safety rules.


## Authors

- [@Alexis Brouard](https://www.github.com/alexisbrouard)
- [@Romain Caste](https://github.com/romaing18)


## Features

- User
  - Register => hashed password
  - Login    => create a token
  - Patch    => Token required
  - Delete   => Token required

- Actuators
  - Post => Token required
  - Get => Token required
  - Patch => Token required
  - Delete => Token required

- Sensors
  - Post => Token required
  - Get => Token required
  - Patch => Token required
  - Delete => Token required

## Deployment

#### MongoDB

To deploy this project, you'll need MongoDB, this is how to install it :
```bash
  # Linux
  apt install mongodb
```
Then, run MongoDB :
```bash
  systemctl start mongodb
```

#### Project

After this, you'll need to run the project :

```bash
  npm install

  # or
  npm install node
  npm install typescript
```
Finally, you can run the project just with this :

```bash
  npm start
```


## Environment Variables

You can change if you need, the .env file to change the API key called :

`SECRET_KEY`

## API Reference

### User

#### Get all users

```http
  GET /localhost/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NULL`    | `string` | **Required**. Token |

#### Get the user

```http
  GET /localhost/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token       |

```http
  POST /localhost/user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NULL`      | `string` | NULL   |

```http
  LOGIN /localhost/user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NULL`      | `string` | NULL   |


```http
  PATCH /localhost/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token     |

```http
  DELETE /localhost/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token    |

### Actuator

#### Get all actuators

```http
  GET /localhost/actuator
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NULL`    | `string` | **Required**. Token |

#### Get the actuator

```http
  GET /localhost/actuator/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token       |

```http
  POST /localhost/actuator
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NULL`      | `string` | **Required**. Token       |

```http
  PATCH /localhost/actuator/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token     |

```http
  DELETE /localhost/actuator/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token    |

### Sensor

#### Get all sensors

```http
  GET /localhost/sensor
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `NULL`    | `string` | **Required**. Token |

#### Get the user

```http
  GET /localhost/sensor/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token       |

```http
  POST /localhost/sensor
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NULL`      | `string` | **Required**. Token      |

```http
  PATCH /localhost/sensor/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token     |

```http
  DELETE /localhost/sensor/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Token    |

