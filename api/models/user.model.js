import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
  },
  { timestamps: true }
);

//name of model upper case and singluar but for more than one user mongodb will automatically update it to users we dont need to do i manually
const User = mongoose.model("User", userSchema);

// to able to use module anywhere else in the application
export default User;
