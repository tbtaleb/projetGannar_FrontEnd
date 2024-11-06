export class Candidate {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public address: string;
  public dateOfBirth: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    dateOfBirth: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
  }
}
