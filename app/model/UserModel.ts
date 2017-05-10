import { IUserModel } from "./interfaces/UserModel";

export class UserModel {
   
   private _userModel: IUserModel;
   
   constructor(heroModel: IUserModel) {
       this._userModel = heroModel;
   }
   get firstName (): string {
       return this._userModel.firstName;
   }
   
   get lastName (): string {
       return this._userModel.lastName;
   }
   
   get email (): string {
       return this._userModel.email;
   }
   
    
}
Object.seal(UserModel);