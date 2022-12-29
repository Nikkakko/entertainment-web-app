export interface ApiData {
  id: number;
  title: string;
  year: string | number;
  category: string;
  rating: string | number;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
