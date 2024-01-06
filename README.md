# DrHealthBackEnd
Health website to provide information on common illnesses and recommended procedures.

# Technologies Used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Dotenv](https://www.npmjs.com/package/dotenv)

# List of models and their properties

IllnessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symptoms: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
})

ProcedureSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
})

userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})


# Link to project
[https://drhealthbackend.onrender.com/](https://drhealthbackend.onrender.com/)