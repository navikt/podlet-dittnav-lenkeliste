import { OPPFOLGING_URL } from "./lenker/urls";

function getEnvironment(): "production" | "development" {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
}

export const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

export interface OppfolgingResponse {
  erBrukerUnderOppfolging: false;
}

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
