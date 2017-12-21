import React from "react";
import _ from "lodash";

import { Markdown } from 'react-showdown';

export default class Story extends React.Component {

  render() {
    var markdown = '# Hello\n\nMore content...';

    return (
      <div className="mt-4">

        <h1 className="h2 text-center mt-3">React PWA</h1>
        <Markdown markup={ markdown } />
      </div>
    );
  }
}
