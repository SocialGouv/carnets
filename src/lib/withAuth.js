import React, { Component } from "react";
import auth0 from "./auth0";

export default function withAuth(InnerComponent) {
  return class Authenticated extends Component {
    static async getInitialProps({ req, res }) {
      if (req) {
        const session = await auth0.getSession(req);
        if (!session || !session.user) {
          res.writeHead(302, {
            Location: "/api/login"
          });
          res.end();
          return;
        }
        return { user: session.user };
      }
      return {};
    }

    constructor(props) {
      super(props);
    }

    render() {
      console.log("this.props", this.props);
      return <InnerComponent {...this.props} />;
    }
  };
}
