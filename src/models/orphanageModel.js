import mongoose, { Schema } from "mongoose";

const orphanageSchema = new Schema(
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
        orphanag_name: {
            type: String,
        },
        orphanag_location: {
            type: String,
        },
        orphanag_contact_number: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const Orphanage = mongoose.models.Orphanage || mongoose.model("Orphanage", orphanageSchema)

export default Orphanage; 
