export class Candidate {
  public id: number;
  public username: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public address: string;
  public dateOfBirth: string;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: string,
    dateOfBirth: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
  }
}
