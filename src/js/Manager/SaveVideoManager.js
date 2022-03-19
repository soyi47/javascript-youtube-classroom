import { EVENT } from '../constants';
import { $ } from '../util';
import { dispatch } from '../util/event';

export default class SaveVideoManager {
  constructor({ storage }) {
    this.storage = storage;
  }

  updateSavedVideos() {
    const { videos } = this.storage;
    dispatch(EVENT.UPDATE_SAVED_VIDEO_LIST, {
      unwatchedVideos: videos.filter((video) => video.watched === false),
      watchedVideos: videos.filter((video) => video.watched === true),
    }, $('#app'));
  }

  saveVideo(video) {
    if ( !video ) return 'FAIL';
    try {
      this.storage.saveVideo({ ...video, watched: false })
    } catch (err) {
      alert(err.message);
      return 'FAIL';
    }
    this.updateSavedVideos();
    return 'SUCCESS';
  }

  changeWatched(videoId) {
    const video = this.storage.findVideoById(videoId);
    try {
      this.storage.updateVideo({ ...video, watched: !video.watched });
    } catch (err) {
      alert(err.message);
      return;
    }
    this.updateSavedVideos();
  }

  deleteVideo(videoId) {
    try {
      this.storage.deleteVideoById(videoId);
    } catch (err) {
      alert(err.message);
      return;
    }
    this.updateSavedVideos();
  }
}
