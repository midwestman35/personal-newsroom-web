export interface DigestScores {
  importance: number;
  novelty: number;
  confidence: number;
  user_fit: number;
}

export interface DigestItem {
  title: string;
  summary: string;
  url: string;
  canonical_url?: string;
  source_name: string;
  topic: string;
  scores: DigestScores;
  why_it_matters: string;
  tags: string[];
}

export interface DigestEdition {
  slug: string;
  date: string;
  title: string;
  item_count: number;
  last_published: string;
  freshness_seconds: number;
  items: DigestItem[];
}

export interface EditionIndex {
  last_published: string;
  editions: {
    slug: string;
    date: string;
    title: string;
    item_count: number;
    archive_path: string;
  }[];
}
