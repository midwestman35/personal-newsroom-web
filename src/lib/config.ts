import { SWRConfiguration } from "swr";

export const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
};

// Static asset base for this Pages project.
// Digest JSON is currently published into /public/digests for static serving.
export const SITE_BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "";
