# <p align="center">Humble Superhero API 🦸</p>

A RESTful API to manage superheroes with a focus on validation, logging, and scalability.

## ⚙️ Features

- **Clean Project Structure**: Organized with separate folders for controllers, services, and models.
- **Validation**: Ensures superhero data is valid, including `humilityScore` validation (1-10).
- **Logging**: Logs HTTP requests and exceptions to a file (`logs/app.log`).
- **Scalable**: Easy to swap in-memory storage with a database in the future.
- **Testing**: Unit and End-to-End tests using Jest.
- **SwaggerUI**: Convenient functionality for testing Endpoints.

## 🛠️ Tech Stack

- **NestJS** (Framework)
- **TypeScript**
- **Jest** (Testing)
- **class-validator** (Validation)
- **Custom Logger** (File-based)

## 🔌 Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/HornetPilot01/Humble-Superhero-API.git
   cd humble-superhero-api
   
2. Install dependencies:
   ```bash
   npm install

3. Start the server:
   ```bash
   nest start
   
4. View Swagger UI:
   ```bash
   http://localhost:3000/api
   
![Image](https://i.imgur.com/682aUd8.png)
   
## ➤ API Reference

### Create new superhero
```http
POST /api/superheroes/create_new
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`   | `string` | Superhero name    |
| `superpower`  | `string` | Superpower name   |
| `humilityScore`| `string` | **Required**. Humility Score |

### Get all superheroes
```http
GET api/superheroes/get_all
```
| Parameter | Type    
| :-------- | :------- 
| `id` | `GUID`
| `name` | `String` 
| `superpower` | `String` 
| `humilityScore` | `Integer`


## 🙇 Author
#### Vladyslav Nehodiuk
- [LinkedIn](https://www.linkedin.com/in/vladyslav-nehodiuk-1b39161aa/)
- [Github](https://github.com/HornetPilot01)
        
