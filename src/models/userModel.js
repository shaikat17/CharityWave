import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
          type: String,
        },
        status: {
          type: String, default: "Pending"
        },
        email: {
          type: String,
        },
        role: {
            type: String, default: "User"
        },
        photoUrl: {
            type: String,
        },
        phone_no: {
            type: String,
        },
        location: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;