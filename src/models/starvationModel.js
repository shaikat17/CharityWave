import mongoose, { Schema } from "mongoose";

const starvationSchema = new Schema(
    {
        seeker_name: {
          type: String,
        },
        seeker_email: {
          type: String,
        },
        seeker_image: {
          type: String,
        },
        location: {
            type: String,
        },
        phone_no: {
            type: String,
        },
        deadline: {
            type: String,
        },
        amount: {
            type: String,
        },
        emergency: {
            type: String, default: false,
        },
        verification: {
            type: String, default: false,
        },
        reason: {
            type: String,
        },
        supermarket_name: {
            type: String,
        },
        supermarket_location: {
            type: String,
        },
        supermarket_contact_number: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const Starvation = mongoose.models.Starvation || mongoose.model("Starvation", starvationSchema)

export default Starvation;