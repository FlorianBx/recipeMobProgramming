export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  description: string;
  imagePath?: string;
  prepTime?: number;
}
