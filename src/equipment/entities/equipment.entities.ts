export class Equipment {
  name: string;
  serialNumber: number;
  points?: Point[];
}

export class Point {
  name: string;
  dataType: string;
  value: any;
}
