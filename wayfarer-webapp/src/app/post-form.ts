export class User {
  constructor(
    public id: number,
    public name: string,
    public city: string,
    public review?: string
  ) {}
}
