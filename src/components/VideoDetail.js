import React from "react";

const VideoDetail = (props) => {
    if(!props.video){
        return (
            <div className="ui active centered inline loader"></div>   
        )
    }
    let videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="Video Player" allowFullScreen width="400" height="300px"/>
            </div>
            <div className="ui segment">
                <h3>{props.video.snippet.title}</h3>
                <p><b>{props.video.snippet.channelTitle}</b></p>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail;