import { UserModel } from "./../model/UserModel";
import { IUserModel } from "./../model/interfaces/UserModel";
import UserSchema = require("./../dataAccess/schemas/UserSchema");
import RepositoryBase = require("./base/RepositoryBase");

class UserRepository  extends RepositoryBase<IUserModel> {
    constructor () {
        super(UserSchema);
    }    
} 

Object.seal(UserRepository);
export = UserRepository;