import styles from './video.module.css';
import Image from 'next/image';

const VideoComponent = () => {
  const videos = [
    {
      title: `YouTube Playlist`,
      url: `https://www.youtube.com/embed/videoseries?list=FL5cwCWeag96OnqQjLDK4LRg`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/4GaT6yzMZfE`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/mwfcMlb_BOk`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/8RAzQirQ8KI`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/nhTHjLI5Ur0`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/OPj9s2VBEjw`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/i4tqR9jqqnY`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/ZhmizQG5Iz0`,
    },
  ];

  return (
    <div className={styles.container} id="ourWork">
      <div className={styles.checkOutWork}>
        <p>Check out our work</p>
        {/* <Image src="/arrow-image.png" alt="Arrow" width={50} height={50} /> */}
      </div>
      <div className={styles.videosGrid}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoItem}>
            <iframe
              loading="lazy"
              className={styles.iframeStyle}
              src={video.url}
              // allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
