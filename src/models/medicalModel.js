import mongoose, { Schema } from "mongoose";

const medicalSchema = new Schema(
    {
        seeker_name: {
          type: String,
        },
        seeker_email: {
          type: String,
        },
        h: {
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
            type: String, default: false
        },
        verification: {
            type: String, default: false
        },
        reason: {
            type: String,
        },
        sub_category: {
            type: String,
        },
        hospital_name: {
            type: String,
        },
        hospital_location: {
            type: String,
        },
        hospital_contact_number: {
            type: String,
        },
        pharmacy_name: {
            type: String,
        },
        pharmacy_location: {
            type: String,
        },
        pharmacy_contact_number: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const Medical = mongoose.models.Medical || mongoose.model("Medical", medicalSchema)

export default Medical;