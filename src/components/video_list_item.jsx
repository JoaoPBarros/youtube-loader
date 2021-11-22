import React from "react";

const VideoListItem = (props) => {
  const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  const titleVideo = video.snippet.title;

  return (
    <li
      className="list-group-item"
      onClick={ () => onUserSelected(video) }
    >
      <div className="video-list media">

        <div className="media-left">
          <img src={ imageUrl } alt={ titleVideo } />
        </div>

        <div className="media-body">
          <div className="media-heading">
            { titleVideo }
          </div>
        </div>

      </div>
    </li>
  );
}

export default VideoListItem;
