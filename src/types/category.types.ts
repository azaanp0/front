export interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  slug_ar: string;
  slug_en: string;
  image?: string;
  children?: Category[];
}
