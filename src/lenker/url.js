const getEnvironment = () => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  }
  return "development";
};

const STILLINGER_URL = {
  development: "https://arbeidsplassen.nav.no/stillinger",
  production: "https://arbeidsplassen.nav.no/stillinger",
};

const OPPFOLGING_URL = {
  development: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
  production: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
};

const UFORETRYGD_URL = {
  development: "https://tjenester-q1.nav.no/pselv/publisering/uforetrygd.jsf?context=ut",
  production: "https://www-tjenester.nav.no/pselv/publisering/uforetrygd.jsf?context=ut",
};

const MELDEKORT_URL = {
  development: "https://www-q1.nav.no/meldekort/om-meldekort",
  production: "https://www.nav.no/meldekort/om-meldekort",
};

const FORELDREPENGER_URL = {
  development: "https://foreldrepenger.nav.no",
  production: "https://foreldrepenger.nav.no",
};

const AKTIVITETSPLAN_URL = {
  development: "https://aktivitetsplan-q.nav.no",
  production: "https://aktivitetsplan.nav.no",
};

const PERSONOPPLYSNINGER_URL = {
  development: "https://www-q1.nav.no/person/personopplysninger",
  production: "https://www.nav.no/person/personopplysninger",
};

const SKJEMAER_URL = {
  development: "https://www-q1.nav.no/soknader",
  production: "https://www.nav.no/soknader",
};

const PENSJON_URL = {
  development: "https://tjenester-q1.nav.no/pselv/publisering/dinpensjon.jsf",
  production: "https://www-tjenester.nav.no/pselv/publisering/dinpensjon.jsf",
};

const STILLINGSOK_URL = {
  development: "https://stillingsok.nav.no/pam-stillingsok/lagrede-sok",
  production: "https://stillingsok.nav.no/pam-stillingsok/lagrede-sok",
};

const ARBEIDSSOKERREGISTRERING_URL = {
  development: "https://veiledearbeidssoker-q.nav.no",
  production: "https://veiledearbeidssoker.nav.no",
};

const SYKEFRAVAER_URL = {
  development: "https://www-tjenester.nav.no/sykefravaer",
  production: "https://www-tjenester.nav.no/sykefravaer",
};

const SOSIALHJELP_URL = {
  development: "https://www.dev.nav.no/sosialhjelp/innsyn",
  production: `https://www.nav.no/sosialhjelp/innsyn`,
};

const FULLMAKTER_URL = {
  development: "https://www.dev.nav.no/person",
  production: "https://www.nav.no/person/pdl-fullmakt-ui",
};

const SYKDOM_I_FAMILIEN_URL = {
  development: "https://sif-innsyn.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  production: "https://www.nav.no/familie/sykdom-i-familien/soknad/innsyn",
};

export const stillingerUrl = STILLINGER_URL[getEnvironment()];
export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const uforetrygdUrl = UFORETRYGD_URL[getEnvironment()];
export const meldekortUrl = MELDEKORT_URL[getEnvironment()];
export const foreldrepengerUrl = FORELDREPENGER_URL[getEnvironment()];
export const aktivitetsplanUrl = AKTIVITETSPLAN_URL[getEnvironment()];
export const personopplysningerUrl = PERSONOPPLYSNINGER_URL[getEnvironment()];
export const skjemaerUrl = SKJEMAER_URL[getEnvironment()];
export const pensjonUrl = PENSJON_URL[getEnvironment()];
export const stillingsokUrl = STILLINGSOK_URL[getEnvironment()];
export const arbeidssokerregistreringUrl = ARBEIDSSOKERREGISTRERING_URL[getEnvironment()];
export const sykefravaerUrl = SYKEFRAVAER_URL[getEnvironment()];
export const sosialhjelpUrl = SOSIALHJELP_URL[getEnvironment()];
export const fullmakterUrl = FULLMAKTER_URL[getEnvironment()];
export const sykdomIFamilienUrl = SYKDOM_I_FAMILIEN_URL[getEnvironment()];
