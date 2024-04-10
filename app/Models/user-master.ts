export class userMaster{
    username : string;
    password : string;
    client_id : string;
    client_secret: string;
    grant_type: string;

    constructor(){
        this.username = '';
        this.password = '';
        this.client_id = '';
        this.client_secret = '';
        this.grant_type = '';
    }
}