export class Aliment {
  name!: string;//fraise
  description!: string;//fruit rouge
  imageUrl!: string;//url de l'image
  category!: string;//fruit,legume,viande
  nutriments!: Nutriments;
}
export class Nutriments{
  calories!: number;// e.g., 52
  protein!: number;// e.g., 0.5
  carbohydrates!: number;// e.g., 12
  fat!: number;// e.g., 0.2
  gramPortion!: number;// e.g., 100
}
