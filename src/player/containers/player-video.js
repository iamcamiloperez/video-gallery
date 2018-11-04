import React,{Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import './player-video';
import PlayPause from '../components/play-pause.js';

class VideoPlayer extends Component{
  render() {
    return(
      <VideoPlayerLayout>
        <Title
          title="video"
        />
      <PlayPause/>
        <Video
          autoplay={false}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer
