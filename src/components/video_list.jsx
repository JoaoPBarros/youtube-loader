import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
  const videosItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onUserSelected={ props.onVideoSelect }
        key={ video.etag }
        video={ video }
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      { videosItems }
    </ul>
  );
}

export default VideoList;
