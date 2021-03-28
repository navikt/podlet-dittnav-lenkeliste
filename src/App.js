import React from "react";
import useSWR from "swr";
import { fetcher } from "./api";
import { generelleLenker, oppfolgingsLenker } from "./lenker/lenker";
import { oppfolgingUrl } from "./lenker/url";
import Lenkeliste from "./components/Lenkeliste";
import { Undertittel } from "nav-frontend-typografi";

const App = () => {
  const { data: oppfolging } = useSWR(oppfolgingUrl, fetcher, { shouldRetryOnError: false });
  const links = oppfolging?.erBrukerUnderOppfolging ? oppfolgingsLenker : generelleLenker;

  return (
    <React.Fragment>
      <Undertittel className="flere-tjenester__subheader">Flere tjenester</Undertittel>
      <Lenkeliste links={links} />
    </React.Fragment>
  );
};

export default App;
