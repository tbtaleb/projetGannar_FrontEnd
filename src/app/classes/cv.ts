export class CV {
    
    public Id!:number
  
    public name!:string 
    public email!:string 
    public res_score!:string 
    public reco_field!:string 
    public cand_level!:string 
    public skills!:string 
    public recommended_skills!:string 
    public courses!:string 
    public pdf_name!:string 

    constructor(Id:number,name:string,email:string,res_score:string,reco_field:string,cand_level:string,skills:string,recommended_skills:string,courses:string,pdf_name:string){
        this.Id=Id
       
       
        this.name=name
        this.email=email
        this.res_score=res_score
       
        this.reco_field=reco_field
        this.cand_level=cand_level
        this.skills=skills
        this.recommended_skills=recommended_skills
        this.courses=courses
        this.pdf_name=pdf_name
    }
}
