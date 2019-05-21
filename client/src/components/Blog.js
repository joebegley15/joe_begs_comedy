import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Working",
          content: [
            "1. Keystone Lite - I’ve had a lot of cheap beer in my life. Some of it is surprisingly good, and some of it deserves the price tag. Then there’s the beer that I wouldn’t drink if they gave it away for free. I have lived in Asia. I’ve eaten fish eyes, snakes, fermented eggs, but a keystone lite is the worst thing I’ve ever put in my mouth, and for that, last place.",
            "2. Bud Ice - Tbis one gives me Vietnam level flashbacks to Sophomore year of college. The gas station by my dorm sold the stuff for $14/30, and for that price we bit like fine Atlantic salmon, and we drank it like that too. Weighing in at 6%, this beer had a lot of 19 year old college bros unconscious before the end of the pregame. I will never drink it again."
          ]
        }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => {
          return (
            <div>
              {" "}
              <h1>{article.title}</h1>
              <div>
                {article.content.map(par => {
                  return <p>{par}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Blog;
