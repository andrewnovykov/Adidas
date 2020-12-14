import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rele: {
      type: String,
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dob1a1s55/image/upload/v1607908271/sample.jpg",
    }
  },
  {
    timestamps: "true"
  }
)


let Dataset = mongoose.model.user || mongoose.model('user', userSchema)

export default Dataset