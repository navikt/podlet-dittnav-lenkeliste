import { OPPFOLGING_URL } from "./lenker/urls";
import getEnvironment from "./utils/environment";

export const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

export interface OppfolgingResponse {
  erBrukerUnderOppfolging: false;
}

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
