import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer class="page-footer font-small cyan darken-3 footer">
        <div class="container">
          <div class="row top-row" dark>
            <div class="social-icons">
              <SocialIcon
                url="https://www.twitter.com/bigjoebegs"
                network="twitter"
                bgColor="#ff5a01"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.instagram.com/bigjoebegs"
                network="instagram"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.facebook.com/bigjoebegs/"
                network="facebook"
                fgColor="white"
              />
              <SocialIcon
                url="https://www.youtube.com/channel/UCvbdnJ9yxXuP0BEuGUVIWZA/videos"
                network="youtube"
                fgColor="white"
              />
            </div>
          </div>
          <div class="row bottom-row">
            <div>Joe Begley</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
