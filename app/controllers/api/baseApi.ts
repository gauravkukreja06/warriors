import * as express from 'express';

export class BaseApi {
    private _router: express.Router;

    constructor() {
        this._router = express.Router();    
    }

    public get router(): express.Router {
            return this._router;
    }
}