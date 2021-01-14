type EnvUrl = { development: string; production: string };

export const STILLINGER_URL: EnvUrl = {
  development: "https://arbeidsplassen.nav.no/stillinger",
  production: "https://arbeidsplassen.nav.no/stillinger",
};

export const OPPFOLGING_URL: EnvUrl = {
  development: "https://www.nav.no/person/dittnav-api/oppfolging",
  production: "https://www.nav.no/person/dittnav-api/oppfolging",
};

export const UFORETRYGD_URL: EnvUrl = {
  development: "https://tjenester-q1.nav.no/pselv/publisering/uforetrygd.jsf?context=ut",
  production: "https://www-tjenester.nav.no/pselv/publisering/uforetrygd.jsf?context=ut",
};

export const MELDEKORT_URL: EnvUrl = {
  development: "https://www-q1.nav.no/meldekort/om-meldekort",
  production: "https://www.nav.no/meldekort/om-meldekort",
};

export const FORELDREPENGER_URL: EnvUrl = {
  development: "https://foreldrepenger.nav.no",
  production: "https://foreldrepenger.nav.no",
};

export const AKTIVITETSPLAN_URL: EnvUrl = {
  development: "https://aktivitetsplan-q.nav.no",
  production: "https://aktivitetsplan.nav.no",
};

export const PERSONOPPLYSNINGER_URL: EnvUrl = {
  development: "https://www-q1.nav.no/person/personopplysninger",
  production: "https://www.nav.no/person/personopplysninger",
};

export const SKJEMAER_URL: EnvUrl = {
  development: "https://www-q1.nav.no/soknader",
  production: "https://www.nav.no/soknader",
};

export const PENSJON_URL: EnvUrl = {
  development: "https://tjenester-q1.nav.no/pselv/publisering/dinpensjon.jsf",
  production: "https://www-tjenester.nav.no/pselv/publisering/dinpensjon.jsf",
};

export const STILLINGSOK_URL: EnvUrl = {
  development: "https://stillingsok.nav.no/pam-stillingsok/lagrede-sok",
  production: "https://stillingsok.nav.no/pam-stillingsok/lagrede-sok",
};

export const ARBEIDSSOKERREGISTRERING_URL: EnvUrl = {
  development: "https://veiledearbeidssoker-q.nav.no",
  production: "https://veiledearbeidssoker.nav.no",
};

export const SYKEFRAVAER_URL: EnvUrl = {
  development: "https://www-tjenester.nav.no/sykefravaer",
  production: "https://www-tjenester.nav.no/sykefravaer",
};

export const SOSIALHJELP_URL: EnvUrl = {
  development: "https://www.dev.nav.no/sosialhjelp/innsyn",
  production: `https://www.nav.no/sosialhjelp/innsyn`,
};

export const FULLMAKTER_URL: EnvUrl = {
  development: "https://www.dev.nav.no/person",
  production: "https://www.nav.no/person/pdl-fullmakt-ui",
};

export const SYKDOM_I_FAMILIEN_URL: EnvUrl = {
  development: "https://sif-innsyn.dev.nav.no/familie/sykdom-i-familien/soknad/innsyn",
  production: "https://www.nav.no/familie/sykdom-i-familien/soknad/innsyn",
};
