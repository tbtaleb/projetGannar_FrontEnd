export class Recruiter {
  public id: number;
  public name: string;
  public password: string;
  public email: string;
  public company: string;
  public companyAddress: string;
  public post: string;
  public domain: string;
  public phoneNumber: string;


  constructor(
    id: number,
    name: string,
    password: string,
    email: string,
    company: string,
    companyAddress: string,
    post: string,
    domain: string,
    phoneNumber: string,
    
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.company = company;
    this.companyAddress = companyAddress;
    this.post = post;
    this.domain = domain;
    this.phoneNumber = phoneNumber;

  }
}
