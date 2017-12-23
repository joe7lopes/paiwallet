import React from 'react';

const Footer = ({onTopStocksClick}) => (
  <footer className="page-footer grey lighten-2">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="grey-text text-darken-2">Pai Wallet</h5>
          <p className="grey-text text-darken-1">A team of finantial advisros that
            personalize your custom wallet to gain max profit.</p>

        </div>
        <div className="col l3 s12">
          <h5 className="grey-text text-darken-2">Links</h5>
          <ul>
            <li>
              <a className="grey-text text-darken-1" href="#" onClick={onTopStocksClick}>Top Stocks</a>
            </li>
            <li>
              <a className="grey-text text-darken-1" href="#!">Subscription</a>
            </li>
            <li>
              <a className="grey-text text-darken-1" href="#!">Disclamer</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        @made by
        <a
          className="grey-text text-darken-1"
          href="https://www.linkedin.com/in/joao-andre-oliveira-37609817/">Joao Oliveira</a>
      </div>
    </div>
  </footer>
);

export default Footer;