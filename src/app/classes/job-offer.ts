import { Recruiter } from "./recruiter";

export class JobOffer {

    public Id!:number;
    public name!:string;
    public description!:string;
    public workTime!:string;
    public location!:string;
    public salary!:number;
    public recruiter!: any;

    constructor(Id:number,name:string,description:string,workTime:string,location:string,salary:number,recruiter:any){
        this.Id = Id
        this.name = name
        this.description = description
        this.workTime = workTime
        this.location = location
        this.salary = salary
        this.recruiter =  recruiter;

    }
    
}
