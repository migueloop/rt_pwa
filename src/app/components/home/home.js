import React, {Component} from "react";
import Fold from "pawjs/src/components/fold";
import ReactLogo from "src/resources/images/reactjs.svg";
import SmallImage from "src/resources/images/mario-large.png?sizes=100w+200w+400w+800w&placeholder";
import Picture from "pawjs/src/components/picture/picture";

export default class Home extends Component {
  render() {
    return (
      <div className="mt-4">

        <h1 className="h2 text-center mt-3">React PWA</h1>

        <Fold placeholder={() => <div className="text-center mt-3 mb-3">Loading folded content.. Please wait..</div>}>
          
          <p>Image sample converted to webp, uploaded/coded as jpg</p>

        </Fold>
      </div>
    );
  }
}
