// This file handles the configuration of the app.
// It is required by app.js

var express = require('express');
var bodyParser = require('body-parser');
import { UserApi } from './controllers/api/users/userApi';

export function config(app, io): void{
    
	// parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    const userApi = new UserApi();
    app.use('/api/user/v1', userApi.router);
};