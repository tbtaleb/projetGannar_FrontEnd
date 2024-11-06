import { Recruiter } from "./recruiter";

export class JobOffer {

    public Id!:number;
    public name!:string;
    public description!:string;
    public workTime!:string;
    public location!:string;
    public expirationDate!:string;
    public salary!:number;
    public skills!:string;
    //new attributes
    public company!:string;
    public email!:string;
    public numtel!:string;
    //##################
    public recruiter!: Recruiter;

    constructor(Id:number,name:string,description:string,workTime:string,location:string,salary:number,recruiter:any,skills:string,company:string,email:string,numtel:string){
        this.Id = Id;
        this.name = name;
        this.description = description;
        this.workTime = workTime;
        this.location = location;
        this.salary = salary;
        this.skills = skills;
        this.company = company;
        this.email = email;
        this.numtel = numtel;
        this.recruiter =  recruiter;
        
    }
    
}
