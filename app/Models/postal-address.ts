export class postalAddress{
    Message: string
    Status: string
    PostOffice: postOffice []

    constructor(item:postOffice[]=[]){
        this.Message="";
        this.Status="";
        this.PostOffice=item;
    }
}

export class postOffice{
    Name: string;
    Description: string;
    BranchType: string;
    DeliveryStatus: string;
    Taluk: string;
    Circle: string;
    District: string;
    Division: string;
    Region: string;
    State: string;
    Country: string;

    constructor(){
        this.Name="";
        this.Description="";
        this.BranchType="";
        this.DeliveryStatus="";
        this.Taluk="";
        this.Circle="";
        this.District="";
        this.Division="";
        this.Region="";
        this.State="";
        this.Country="";
    }
}