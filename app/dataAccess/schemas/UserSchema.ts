import DataAccess = require("./../../dataAccess/DataAccess");
import IUserModel = require("./../../model/interfaces/HeroModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           firstName : {
               type: String,
               required: true
           },
           lastName: {
               type: String,
               required: true
           },
           email: {
               type: String,
               required: true
           }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;