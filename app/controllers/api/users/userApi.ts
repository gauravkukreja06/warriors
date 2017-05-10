'use strict';

import * as express from 'express';
import { BaseApi } from '../baseApi';
import { StatusCodes } from '../../../utilities/statusCodes';
import { UserBusiness } from '../../../business/UserBusiness';
import { IUserModel } from '../../../model/interfaces/UserModel';

export class UserApi extends BaseApi {
    constructor() {
        super();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/users/:id/', (req, res) => {
            this.getUser(req, res);
        });

        this.router.post('/users/create/', (req, res) => {
            this.createUser(req, res);
        });
    }

    private getUser(req: express.Request, res: express.Response){
         try {
            const userId: string = req.params.id;
            var userBusiness = new UserBusiness();
                userBusiness.findById(userId, (error, result) => {
                    if(error){
                        res.status(StatusCodes.InternalServerError).json({ error: error });
                    } 
                    else{
                        res.status(StatusCodes.OK).json(result);
                        //res.send(result);
                    }
                });
        }
        catch (err) {
            res.status(StatusCodes.InternalServerError).json({ error: err });
        }
    }

    private createUser(req: express.Request, res: express.Response){
         try {                                   
                var user: IUserModel = <IUserModel>req.body;
                var userBusiness = new UserBusiness();
                userBusiness.create(user, (error, result) => {
                    if(error){
                        res.send({"error": user});
                    }
                    else{
                        res.send({"success": "User Created"});
                    }
                });
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
}