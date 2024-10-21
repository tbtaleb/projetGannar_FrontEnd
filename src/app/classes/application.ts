import { Candidate } from "./candidate";
import { JobOffer } from "./job-offer";

export class Application {
    
    public Id:number;
    public candidate!:Candidate;
    public jobOffer!:JobOffer;

    constructor(Id:number,candidate:Candidate,jobOffer:JobOffer){
        this.Id = Id
        this.candidate = candidate
        this.jobOffer = jobOffer
    }
}
