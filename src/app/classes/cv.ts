export class CV {
    
    public Id!:number
    public sec_token!:string
    public ip_add!:string
    public host_name!:string
    public dev_user!:string
    public os_name_ver!:string 
    public latlong!:string 
    public city!:string
    public state!:string 
    public country!:string 
    public act_name!:string 
    public act_mail!:string 
    public act_mob!:string 
    public name!:string 
    public email!:string 
    public res_score!:string 
    public timestamp!:string 
    public no_of_pages!:string 
    public reco_field!:string 
    public cand_level!:string 
    public skills!:string 
    public recommended_skills!:string 
    public courses!:string 
    public pdf_name!:string 

    constructor(Id:number,sec_token:string,ip_add:string,host_name:string,dev_user:string,os_name_ver:string,latlong:string,city:string,state:string,country:string,act_name:string,act_mail:string,act_mob:string,name:string,email:string,res_score:string,timestamp:string,no_of_pages:string,reco_field:string,cand_level:string,skills:string,recommended_skills:string,courses:string,pdf_name:string){
        this.Id=Id
        this.sec_token=sec_token
        this.ip_add=ip_add
        this.host_name=host_name
        this.dev_user=dev_user
        this.os_name_ver=os_name_ver
        this.latlong=latlong
        this.city=city
        this.state=state
        this.country=country
        this.act_name=act_name
        this.act_mail=act_mail
        this.act_mob=act_mob
        this.name=name
        this.email=email
        this.res_score=res_score
        this.timestamp=timestamp
        this.no_of_pages=no_of_pages
        this.reco_field=reco_field
        this.cand_level=cand_level
        this.skills=skills
        this.recommended_skills=recommended_skills
        this.courses=courses
        this.pdf_name=pdf_name
    }
}
