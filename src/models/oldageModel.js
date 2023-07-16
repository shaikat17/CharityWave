import mongoose, { Schema } from "mongoose";

const oldageSchema = new Schema(
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
            type: String,
        },
        verification: {
            type: String,
        },
        reason: {
            type: String,
        },
        organization_name: {
            type: String,
        },
        organization_location: {
            type: String,
        },
        organization_contact_number: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const Oldage = mongoose.models.Oldage || mongoose.model("Oldage", oldageSchema)

export default Oldage;