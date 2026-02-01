export interface Article {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
  source: {
    id: string | null;
    name: string;
  };
  topic: string; 
}