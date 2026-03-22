import { SWRConfiguration } from "swr";

export const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
};

// Cloudflare Worker endpoint (updated post-deployment)
export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://newsroom.carafe.one";

export const R2_PUBLIC_URL =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "";
