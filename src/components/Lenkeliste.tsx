import React from "react";
import { Normaltekst } from "nav-frontend-typografi";
import "./Lenkeliste.less";

interface Link {
  tittel: string;
  url: string;
}

interface Props {
  links: Array<Link>;
}

const Lenkeliste = (props: Props) => (
  <div className="flere-tjenester">
    <nav className="flere-tjenester__links">
      {props.links.map((link) => (
        <div className="flere-tjenester__link-container" key={link.url}>
          <Normaltekst>
            <a href={link.url} className="lenke flere-tjenester__link">
              {link.tittel}
            </a>
          </Normaltekst>
        </div>
      ))}
    </nav>
  </div>
);

export default Lenkeliste;
