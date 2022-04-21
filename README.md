
![Logo](https://images.viblo.asia/f8d4357a-1d85-49a4-9f3d-b849aefde820.png)


# Home Control

This API allows the management of users of a house, its sensors and
of its actuators, while respecting certain safety rules.


## Authors

- [@Alexis Brouard](https://www.github.com/alexisbrouard)
- [@Romain Caste](https://github.com/romaing18)


## Features

- **User**
  - Register => hashed password
  - Login    => create a token
  - Patch    => Token required
  - Delete   => Token required

- **Actuators**
  - Post => Token required
  - Get => Token required
  - Patch => Token required
  - Delete => Token required

- **Sensors**
  - Post => Token required
  - Get => Token required
  - Patch => Token required
  - Delete => Token required

- **Protections**
  - Password is hashed with argon2
  - A token is generated when a user is created
  - A token is required to access to users, actuators and sensors
  - TextEdit are verified with a xss filter
  - Format for email user is verified with zod
  - Format for password and username is modified with regex

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
  npm install express
  npm install jsonwebtoken
  npm install argon2
  npm install node
  npm install typescript
  npm install xss
  npm install zod
```
Finally, you can run the project just with this :

```bash
  npm start
```


## Environment Variables

You can change if you need, the .env file to change the API key called :

`SECRET_KEY`

## ENDPOINTS
### User

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /user |  **Required**. Token |
| GET | `id`    | `string` | /user/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /user |   |
| LOGIN | `NULL`    | `string` | /user/login |   |
| PATCH | `id`    | `string` | /user/:id |  **Required**. Token |
| DELETE | `id`    | `string` | /user/:id |  **Required**. Token |

### Actuator

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /actuator |  **Required**. Token |
| GET | `id`    | `string` | /actuator/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /actuator | **Required**. Token |
| PATCH | `id`    | `string` | /actuator/:id |  **Required**. Token |
| DELETE | `id`    | `string` | /actuator/:id |  **Required**. Token |

### Sensor

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /sensor |  **Required**. Token |
| GET | `id`    | `string` | /sensor/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /sensor | **Required**. Token  |
| PATCH | `id`    | `string` | /sensor/:id |  **Required**. Token |
| DELETE | `id`    | `string` | /sensor/:id |  **Required**. Token |

## Collections

### User

```ts
const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
}); 
```
### Actuator
  
```ts
enum ActuatorType{
    BLINDS = "BLINDS",
    LIGHT = "LIGHT"
}

const actuatorSchema = new Schema({
    type: {type: String, enum: ["BLINDS", "LIGHT"]},
    designation: String,
    state: Boolean
});
```

### Sensor
  
```ts
enum SensorType {
  TEMPERATURE = "TEMPERATURE",
  HUMIDITY = "HUMIDITY",
  BARO = "BARO",
  PROXIMITY = "PROXIMITY",
}

const sensorSchema = new Schema({
  type: {
    type: String,
    enum: ["TEMPERATURE", "HUMIDITY", "BARO", "PROXIMITY"],
  },
  designation: String,
  rawValue: Number,
});
```
