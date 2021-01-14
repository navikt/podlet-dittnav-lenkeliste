import getEnvironment from "../utils/environment";
import {
  AKTIVITETSPLAN_URL,
  ARBEIDSSOKERREGISTRERING_URL,
  FORELDREPENGER_URL,
  FULLMAKTER_URL,
  MELDEKORT_URL,
} from "./urls";
import {
  PENSJON_URL,
  UFORETRYGD_URL,
  PERSONOPPLYSNINGER_URL,
  SKJEMAER_URL,
  SOSIALHJELP_URL,
  STILLINGER_URL,
} from "./urls";
import { STILLINGSOK_URL, SYKDOM_I_FAMILIEN_URL, SYKEFRAVAER_URL } from "./urls";

const lenker = {
  ledigeStillinger: {
    tittel: "Ledige stillinger",
    url: STILLINGER_URL[getEnvironment()],
  },
  uforetrygd: {
    tittel: "Uføretrygd",
    url: UFORETRYGD_URL[getEnvironment()],
  },
  dineForeldrepenger: {
    tittel: "Dine foreldrepenger",
    url: FORELDREPENGER_URL[getEnvironment()],
  },
  aktivitetsplan: {
    tittel: "Aktivitetsplan",
    url: AKTIVITETSPLAN_URL[getEnvironment()],
  },
  meldekort: {
    tittel: "Meldekort",
    url: MELDEKORT_URL[getEnvironment()],
  },
  personopplysninger: {
    tittel: "Personopplysninger",
    url: PERSONOPPLYSNINGER_URL[getEnvironment()],
  },
  skjemaer: {
    tittel: "Skjemaer",
    url: SKJEMAER_URL[getEnvironment()],
  },
  dinPensjon: {
    tittel: "Din pensjon",
    url: PENSJON_URL[getEnvironment()],
  },
  dineStillingssok: {
    tittel: "Dine stillingssøk",
    url: STILLINGSOK_URL[getEnvironment()],
  },
  registrerDegSomArbeidssoker: {
    tittel: "Registrer deg som arbeidssøker",
    url: ARBEIDSSOKERREGISTRERING_URL[getEnvironment()],
  },
  dittSykefravaer: {
    tittel: "Ditt sykefravær",
    url: SYKEFRAVAER_URL[getEnvironment()],
  },
  digisos: {
    tittel: "Digisos",
    url: SOSIALHJELP_URL[getEnvironment()],
  },
  dineFullmakter: {
    tittel: "Dine fullmakter",
    url: FULLMAKTER_URL[getEnvironment()],
  },
  sykdomIFamilien: {
    tittel: "Din oversikt - Sykdom i familien",
    url: SYKDOM_I_FAMILIEN_URL[getEnvironment()],
  },
};

export const generelleLenker = [
  lenker.ledigeStillinger,
  lenker.uforetrygd,
  lenker.dineForeldrepenger,
  lenker.aktivitetsplan,
  lenker.meldekort,
  lenker.registrerDegSomArbeidssoker,
  lenker.dineStillingssok,
  lenker.personopplysninger,
  lenker.dineFullmakter,
  lenker.sykdomIFamilien,
];

export const oppfolgingsLenker = [
  lenker.dittSykefravaer,
  lenker.skjemaer,
  lenker.dineForeldrepenger,
  lenker.dinPensjon,
  lenker.uforetrygd,
  lenker.meldekort,
  lenker.personopplysninger,
  lenker.dineFullmakter,
  lenker.sykdomIFamilien,
];
