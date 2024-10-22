export class CV {
    
    public Id!:number
    public file!:any
    public skills!:string

    constructor(Id:number,file:any,skills:string){
        this.Id = Id
        this.file = file
        this.skills = skills
    }
}
