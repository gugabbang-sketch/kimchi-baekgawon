export type ProductCategory = 'all' | 'signature' | 'seasonal' | 'gift' | 'b2b';

export interface KimchiProduct {
  id: string;
  name: string;
  englishName: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  price: number;
  weightOptions: string[];
  spiciness: number; // 1 to 5
  crunchiness: number; // 1 to 5
  umami: number; // 1 to 5
  fermentation: string;
  ingredients: string[];
  image: string;
  description: string;
  isBest?: boolean;
  isNew?: boolean;
  originInfo: string;
  awards?: string[];
}

export type BlogCategory = 'all' | 'recipe' | 'story' | 'season' | 'haccp';

export interface RecipeIngredient {
  name: string;
  amount: string;
}

export interface RecipeStep {
  step: number;
  title: string;
  detail: string;
  tip?: string;
}

export interface BodySection {
  title: string;
  paragraph: string;
  quote?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: BlogCategory;
  categoryLabel: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  likes: number;
  summary: string;
  content: {
    introduction: string;
    keyPoints?: string[];
    recipeIngredients?: RecipeIngredient[];
    recipeSteps?: RecipeStep[];
    bodySections?: BodySection[];
    pairingProductIds?: string[];
  };
  featured?: boolean;
  tags: string[];
}

export interface B2BQuoteRequest {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessType: string;
  monthlyVolume: string;
  targetProducts: string[];
  notes: string;
  sampleRequested: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string; // e.g. "한정식 수라선 대표", "5성급 H호텔 F&B 총괄", "가정 구매 고객"
  rating: number;
  content: string;
  date: string;
  verifiedPurchase: boolean;
  productName: string;
}
