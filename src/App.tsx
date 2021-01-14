import React from "react";
import useSWR from "swr";
import { fetcher, OppfolgingResponse } from "./api";
import { generelleLenker, oppfolgingsLenker } from "./lenker/lenker";
import { oppfolgingUrl } from "./lenker/url";
import Lenkeliste from "./components/Lenkeliste";

const App = () => {
  const { data: oppfolging } = useSWR<OppfolgingResponse>(oppfolgingUrl, fetcher);
  const links = oppfolging?.erBrukerUnderOppfolging ? oppfolgingsLenker : generelleLenker;

  return (
    <div className="flere-tjenester">
      <nav className="flere-tjenester__links">
        <Lenkeliste links={links} />
      </nav>
    </div>
  );
};

export default App;
