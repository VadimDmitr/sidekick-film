import styles from './video.module.css';
import Image from 'next/image';

const VideoComponent = () => {
  const videos = [
    {
      title: 'YouTube Playlist',
      url: 'https://www.youtube.com/embed/b553Rwefdlk',
    },
    {
      title: `Video 2`,
      url: `https://www.youtube.com/embed/4GaT6yzMZfE`,
    },
    {
      title: `Video 3`,
      url: `https://www.youtube.com/embed/mwfcMlb_BOk`,
    },
    {
      title: `Video 4`,
      url: `https://www.youtube.com/embed/8RAzQirQ8KI`,
    },
    {
      title: `Video 5`,
      url: `https://www.youtube.com/embed/nhTHjLI5Ur0`,
    },
    {
      title: `Video 6`,
      url: `https://www.youtube.com/embed/OPj9s2VBEjw`,
    },
    {
      title: `Video 7`,
      url: `https://www.youtube.com/embed/i4tqR9jqqnY`,
    },
    {
      title: `Video 8`,
      url: `https://www.youtube.com/embed/ZhmizQG5Iz0`,
    },
  ];

  return (
    <div className={styles.container} id="ourWork">
      <div className={styles.videoTitle}>
        <p>Sidekick Projects</p>
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
