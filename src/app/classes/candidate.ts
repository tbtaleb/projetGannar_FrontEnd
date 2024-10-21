export class Candidate {

    public Id!:number
    public name!:string
    public email!:string
    public password!:string 

    constructor(Id:number,name:string,email:string,password:string){
        this.Id = Id
        this.name = name
        this.email = email
        this.password = password
    }
    
}
