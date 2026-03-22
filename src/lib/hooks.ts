import useSWR from "swr";
import { SWR_CONFIG, API_BASE } from "./config";
import type { DigestEdition } from "./types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useLatestEdition(edition: string = "morning-brief") {
  const key = `${API_BASE}/api/digest/${edition}`;
  return useSWR<DigestEdition>(key, fetcher, SWR_CONFIG);
}
