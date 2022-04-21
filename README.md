
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

## API References

### User

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /user |  **Required**. Token |
| GET | `NULL`    | `string` | /user/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /user |   |
| LOGIN | `NULL`    | `string` | /user/login |   |
| PATCH | `NULL`    | `string` | /user/:id |  **Required**. Token |
| DELETE | `NULL`    | `string` | /user/:id |  **Required**. Token |

### Actuator

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /actuator |  **Required**. Token |
| GET | `NULL`    | `string` | /actuator/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /actuator | **Required**. Token |
| PATCH | `NULL`    | `string` | /actuator/:id |  **Required**. Token |
| DELETE | `NULL`    | `string` | /actuator/:id |  **Required**. Token |

### Sensor

| Method | Parameter | Type     | Route |  Description                |
| :------ | :-------- | :------- | :--------- |  :------------------------- |
| GET | `NULL`    | `string` | /sensor |  **Required**. Token |
| GET | `NULL`    | `string` | /sensor/:id |  **Required**. Token |
| POST | `NULL`    | `string` | /sensor | **Required**. Token  |
| PATCH | `NULL`    | `string` | /sensor/:id |  **Required**. Token |
| DELETE | `NULL`    | `string` | /sensor/:id |  **Required**. Token |

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
  name: String,
  type: String,
  value: String,
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
  name: String,
  type: String,
  value: String,
});
```
