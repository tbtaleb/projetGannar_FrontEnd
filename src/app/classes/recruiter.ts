export class Recruiter {

    public Id:number;
    public name!:string;
    public email!:string;

    constructor(Id:number,name:string,email:string){
        this.Id = Id
        this.name = name
        this.email = email
    }
}
