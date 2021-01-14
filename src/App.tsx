import React from "react";
import "./App.css";
import useSWR from "swr";
import { fetcher, OppfolgingResponse, oppfolgingUrl } from "./api";
import Lenkeliste from "./components/Lenkeliste";
import { generelleLenker, oppfolgingsLenker } from "./lenker/lenker";

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
