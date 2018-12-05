export enum AccountLevel {
  Other,
  Extern,
  User,
  Administrator,
}

export class Account {
  constructor(public id: string,
              public level: AccountLevel,
              public firstname: string,
              public lastname: string,
              public email: string,
              public phone: string,
              public occupation: string,
              public companyId: string) {}
}
