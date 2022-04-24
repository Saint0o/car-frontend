export class Car {
  public id: number | undefined;
  constructor(public brandName?: string, public description?: string, id?: number, public model?: string, public power?: number, public price?: number) {
  }
}
