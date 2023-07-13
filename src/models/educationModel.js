import mongoose, { Schema } from "mongoose";

const educationSchema = new Schema(
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
        sub_category: {
            type: String,
        },
        institution_name: {
            type: String,
        },
        institution_location: {
            type: String,
        },
        institution_contact_number: {
            type: String,
        },
        bookStore_name: {
            type: String,
        },
        bookStore_location: {
            type: String,
        },
        bookStore_contact_number: {
            type: String,
        },
      },
      {
        timestamps: true,
      }
)

const Education = mongoose.models.Education || mongoose.model("Education", educationSchema)

export default Education