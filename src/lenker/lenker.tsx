import {
  aktivitetsplanUrl,
  arbeidssokerregistreringUrl,
  foreldrepengerUrl,
  fullmakterUrl,
  meldekortUrl,
  pensjonUrl,
  personopplysningerUrl,
  skjemaerUrl,
  sosialhjelpUrl,
  stillingerUrl,
  stillingsokUrl,
  sykdomIFamilienUrl,
  sykefravaerUrl,
  uforetrygdUrl,
} from "./url";

const lenker = {
  ledigeStillinger: {
    tittel: "Ledige stillinger",
    url: stillingerUrl,
  },
  uforetrygd: {
    tittel: "Uføretrygd",
    url: uforetrygdUrl,
  },
  dineForeldrepenger: {
    tittel: "Dine foreldrepenger",
    url: foreldrepengerUrl,
  },
  aktivitetsplan: {
    tittel: "Aktivitetsplan",
    url: aktivitetsplanUrl,
  },
  meldekort: {
    tittel: "Meldekort",
    url: meldekortUrl,
  },
  personopplysninger: {
    tittel: "Personopplysninger",
    url: personopplysningerUrl,
  },
  skjemaer: {
    tittel: "Skjemaer",
    url: skjemaerUrl,
  },
  dinPensjon: {
    tittel: "Din pensjon",
    url: pensjonUrl,
  },
  dineStillingssok: {
    tittel: "Dine stillingssøk",
    url: stillingsokUrl,
  },
  registrerDegSomArbeidssoker: {
    tittel: "Registrer deg som arbeidssøker",
    url: arbeidssokerregistreringUrl,
  },
  dittSykefravaer: {
    tittel: "Ditt sykefravær",
    url: sykefravaerUrl,
  },
  digisos: {
    tittel: "Digisos",
    url: sosialhjelpUrl,
  },
  dineFullmakter: {
    tittel: "Dine fullmakter",
    url: fullmakterUrl,
  },
  sykdomIFamilien: {
    tittel: "Din oversikt - Sykdom i familien",
    url: sykdomIFamilienUrl,
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
