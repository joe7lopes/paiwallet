import React from 'react';

const Footer = ({onTopStocksClick}) => (
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Pai Wallet</h5>
          <p className="grey-text text-lighten-4">A team of finantial advisros that
            personalize your custom wallet to gain max profit.</p>

        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li>
              <a className="white-text" href="#" onClick={onTopStocksClick}>Top Stocks</a>
            </li>
            <li>
              <a className="white-text" href="#!">Subscription</a>
            </li>
            <li>
              <a className="white-text" href="#!">Disclamer</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        @made by
        <a
          className="brown-text text-lighten-3"
          href="https://www.linkedin.com/in/joao-andre-oliveira-37609817/">Joao Oliveira</a>
      </div>
    </div>
  </footer>
);

export default Footer;