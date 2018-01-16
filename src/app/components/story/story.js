import React from "react";
import _ from "lodash";

export default class Story extends React.Component {

  render() {
    if (!_.get(this.props, "preLoadedData.html_content", 0)) {
      console.log(this.props)
      return null;
    }
    console.log("HOLA")
    console.log(this.props.preLoadedData)
    return (
      <div className="mt-4">
        <h1 className="h2 text-center mt-3">React PWA</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.preLoadedData.html_content}} />
      </div>
    );
  }
}
