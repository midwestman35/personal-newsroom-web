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

export interface EditionVersion {
  date: string;
  json_path: string;
  html_path: string;
  item_count: number;
}

export interface EditionEntry {
  title: string;
  versions: EditionVersion[];
}

export interface EditionIndex {
  editions: Record<string, EditionEntry>;
}
