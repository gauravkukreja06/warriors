import mongoose = require("mongoose");

export interface IUserModel extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
}