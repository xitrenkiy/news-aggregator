export interface SanitySource {
  _id: string;
  name: string;
  sourceId: string;
}

export interface SanityTopic {
  _id: string;
  name: string;
  keywords: string[];
}

export interface AppConfig {
  sources: SanitySource[];
  topics: SanityTopic[];
}