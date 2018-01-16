import React from "react";
import _ from "lodash";
import Link from "pawjs/src/components/link";

export default class StoryListing extends React.Component {

  render() {
    return (
      <div className="mt-5">
        {
          _.map(this.props.preLoadedData.stories, story => {
            console.log(story)
            const title = _.get(story, "title", 0);
            return (
              <div key={title} className="media">
                <div className="media-body">
                  <h5 className="mt-0">
                    <Link to={`/story/${title}`} dangerouslySetInnerHTML={{ __html: title }} />
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
