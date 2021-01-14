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
  <React.Fragment>
    {props.links.map((link) => (
      <div className="flere-tjenester__link-container" key={link.url}>
        <Normaltekst>
          <a href={link.url} className="lenke flere-tjenester__link">
            {link.tittel}
          </a>
        </Normaltekst>
      </div>
    ))}
  </React.Fragment>
);

export default Lenkeliste;
