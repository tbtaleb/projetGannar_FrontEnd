import { Candidate } from "./candidate";
import { JobOffer } from "./job-offer";

export class Application {
    
    public Id:number;
    public candidate!:Candidate;
    public jobOffer!:JobOffer;
    public candidate_score!:number;

    constructor(Id:number,candidate:Candidate,jobOffer:JobOffer,candidate_score:number){
        this.Id = Id
        this.candidate = candidate
        this.jobOffer = jobOffer
        this.candidate_score = candidate_score;
    }
}
