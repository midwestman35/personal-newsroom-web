import { SWRConfiguration } from "swr";

export const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
};

// Cloudflare Pages serves the site at this domain
// JSON digests are published to /digests/{edition}/latest.json and /digests/index.json
export const SITE_BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://newsroom.carafe.one";
