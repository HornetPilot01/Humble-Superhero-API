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

## 🤝 Team Player Attitude
Collaboration is the heart of great teamwork. When working on this project with a teammate, I’d aim to create a positive, open space where ideas can flow freely. It’s not just about dividing the work, but about growing together. I’d share my thoughts and encourage my teammate to do the same, bouncing ideas off one another, and offering feedback that helps us both level up!

## 📚 Eagerness to Learn
If I had more time, I’d take the project even further. First, I’d replace the in-memory storage with a proper database 🗃️, which would enable the project to scale much better in production. I’d also expand the test coverage 🧪 to ensure we’re catching more edge cases and keeping everything solid. Adding a CI/CD pipeline 🚀 would streamline deployment and testing, making it easier to integrate new features. Additionally, I’d dive into Kubernetes 🐳 and set up clustering for better scalability and fault tolerance, preparing the app for more complex, large-scale environments. There's always more to learn and improve upon!

## 🙇 Author
#### Vladyslav Nehodiuk
- [LinkedIn](https://www.linkedin.com/in/vladyslav-nehodiuk-1b39161aa/)
- [Github](https://github.com/HornetPilot01)
        
