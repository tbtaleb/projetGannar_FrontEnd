export class Recruiter {
  public id: number;
  public fullName: string;
  public password: string;
  public email: string;
  public company: string;
  public companyAddress: string;
  public post: string;
  public domain: string;
  public phoneNumber: string;
  public address: string;

  constructor(
    id: number,
    fullName: string,
    password: string,
    email: string,
    company: string,
    companyAddress: string,
    post: string,
    domain: string,
    phoneNumber: string,
    address: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.password = password;
    this.email = email;
    this.company = company;
    this.companyAddress = companyAddress;
    this.post = post;
    this.domain = domain;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
