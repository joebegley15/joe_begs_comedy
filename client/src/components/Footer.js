import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer class="page-footer font-small cyan darken-3">
        <div class="container">
          <div class="row" dark>
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                <SocialIcon
                  url="twitter.com/bigjoebegs"
                  network="twitter"
                  bgColor="#ff5a01"
                />
                <SocialIcon
                  url="instagram.com/bigjoebegs"
                  network="instagram"
                />
                <SocialIcon
                  url="https://www.facebook.com/bigjoebegs/"
                  network="facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
