import useSWR from "swr";
import { SWR_CONFIG, SITE_BASE } from "./config";
import type { DigestEdition, EditionIndex } from "./types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useLatestEdition(edition: string = "morning-brief") {
  const key = `${SITE_BASE}/digests/${edition}/latest.json`;
  return useSWR<DigestEdition>(key, fetcher, SWR_CONFIG);
}

export function useArchiveIndex() {
  return useSWR<EditionIndex>(
    `${SITE_BASE}/digests/index.json`,
    fetcher,
    SWR_CONFIG
  );
}
