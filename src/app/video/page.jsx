import styles from './video.module.css';
import Image from 'next/image';

const VideoComponent = () => {
  const videos = [
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/b553Rwefdlk`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/kbfQO7TvG_Y`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/b553Rwefdlk`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/kbfQO7TvG_Y`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/b553Rwefdlk`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/kbfQO7TvG_Y`,
    },
    {
      title: `Video 1`,
      url: `https://www.youtube.com/embed/b553Rwefdlk`,
    },
    {
      title: `F3 Football Danger Zone`,
      url: `https://www.youtube.com/embed/kbfQO7TvG_Y`,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.checkOutWork}>
        <p>Check out our work</p>
        {/* <Image src="/arrow-image.png" alt="Arrow" width={50} height={50} /> */}
      </div>
      <div className={styles.videosGrid}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoItem}>
            <iframe
              className={styles.iframeStyle}
              src={video.url}
              allowFullScreen
              title={video.title}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
