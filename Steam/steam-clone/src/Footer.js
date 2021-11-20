import './Footer.css';

function Footer(){
    return (
    <footer>
    <div className="recommendations-container">
    <div className="recommendations">
    <h1>Looking for recommendations?</h1>
    <hr>
    <h4>Sign in to view personalized recommendations</h4>
    <button type="button" name="button">Sign in</button>
    <h4>or <span className="bold">sign up</span> and join Steam for free</h4>
    </div>
    </div>
    <div className="legal-container">
    <div className="legal">
          <div className="legal-top">
            <div className="">
              <img src="https://steamstore-a.akamaihd.net/public/images/v6/logo_valve_footer.png" alt="Valve Software" border="0">
            </div>
            <div className="legal-top-text">
              <p>© 2018 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                VAT included in all prices where applicable.
              </p>
                <a href="#">Privacy Policy</a>
                <a href="#">Legal</a>
                <a href="#">Steam Subscriber Agreement</a>
                <a href="#">Refunds</a>
            </div>
            <img src="https://steamstore-a.akamaihd.net/public/images/v6/logo_steam_footer.png" alt="Valve Software" border="0">
          </div>
          <hr>
          <div className="legal-bottom">
            <a href="#">About Valve</a>
            <a href="#">Steamworks</a>
            <a href="#">Jobs</a>
            <a href="#">Steam Distribution</a>
            <a href="#">Gift Cards</a>
            <a href="#">Steam</a>
            <a href="#">@steam-games</a>
          </div>
        </div>
      </div>
      </footer>
    );
}

export default Footer;
