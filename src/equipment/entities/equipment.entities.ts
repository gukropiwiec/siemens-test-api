export class Equipment {
  name: string;
  serialNumber: string;
  points?: Point[];
}

export class Point {
  name: string;
  dataType: string;
  value: any;
}
