import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [100, "Name too long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, "Contact number is required"],
      minlength: [10, "Contact number must be at least 10 digits"],
      maxlength: [15, "Contact number too long"],
    },
    profession: {
      type: String,
      enum: ["doctor", "patient", "organisation"],
      required: [true, "Profession is required"],
    },
    speciality: {
      type: String,
      required: function () {
        return this.profession === "doctor";
      },
    },
    prescriptionIssue: {
      type: String,
      required: function () {
        return this.profession === "patient";
      },
    },
    organisationName: {
      type: String,
      required: function () {
        return this.profession === "organisation";
      },
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Invalid age"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    subscribeToNewsletter: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in Next.js
export default mongoose.models.User || mongoose.model("User", UserSchema);
