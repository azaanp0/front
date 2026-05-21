export interface ProductBrand {
  name_ar: string;
  name_en: string;
  slug_ar: string;
}

export interface ProductVariant {
  id: number;
  name_ar: string;
  name_en: string;
  slug_suffix: string;
  hex?: string;
  image?: string;
}

export interface Product {
  id: number;
  name_ar: string;
  name_en: string;
  slug_ar: string;
  brand: ProductBrand;
  primary_image: string;
  images?: string[];
  price_with_tax: number;
  sale_price_with_tax?: number;
  discount_percentage?: number;
  average_rating: number;
  reviews_count: number;
  is_in_stock: boolean;
  is_on_sale: boolean;
  is_new_arrival: boolean;
  is_bestseller: boolean;
  is_trending: boolean;
  variant_count?: number;
  model_number?: string;
  description_ar?: string;
  description_en?: string;
  how_to_use_ar?: string;
  ingredients_ar?: string;
  variants?: ProductVariant[];
  badges?: ("vegan" | "gluten_free" | "cruelty_free" | "dermatologist_tested")[];
}
