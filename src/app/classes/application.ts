import { Candidate } from './candidate';
import { JobOffer } from './job-offer';

export class Application {
  public Id: number;
  public candidate!: number;
  public jobOffer!: number;
  public candidate_score!: number;
  public created_at!: Date;

  constructor(
    Id: number,
    candidate: number,
    jobOffer: number,
    candidate_score: number,
    created_at: Date
  ) {
    this.Id = Id;
    this.candidate = candidate;
    this.jobOffer = jobOffer;
    this.candidate_score = candidate_score;
    this.created_at = created_at;
  }
}
