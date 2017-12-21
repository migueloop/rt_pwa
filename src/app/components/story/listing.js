import React from "react";
import _ from "lodash";
import Link from "pawjs/src/components/link";

export default class StoryListing extends React.Component {

  render() {
    return (
      <div className="mt-5">
        {
          _.map(this.props.preLoadedData, story => {
            const id = _.get(story, "id", 0);
            return (
              <div key={id} className="media">
                <div className="media-body">
                  <h5 className="mt-0">
                    <Link to={`/story/${id}`} dangerouslySetInnerHTML={{ __html: _.get(story, "title.rendered")}} />
                  </h5>
                  <p dangerouslySetInnerHTML={{ __html:_.get(story, "excerpt.rendered") }} />
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
