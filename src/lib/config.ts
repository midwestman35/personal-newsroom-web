import { SWRConfiguration } from "swr";

export const SWR_CONFIG: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000,
  errorRetryCount: 3,
};

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://personal-newsroom-web.vercel.app";

export const R2_PUBLIC_URL =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "";
