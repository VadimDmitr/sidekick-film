'use client';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import styles from './videoProjects.module.css';

const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [playing, setPlaying] = useState(Array(8).fill(false));

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videos = [
    {
      title: 'YouTube Playlist',
      url: 'https://www.youtube.com/watch?v=b553Rwefdlk',
    },
    { title: 'Video 2', url: 'https://www.youtube.com/watch?v=4GaT6yzMZfE' },
    { title: 'Video 3', url: 'https://www.youtube.com/watch?v=mwfcMlb_BOk' },
    { title: 'Video 4', url: 'https://www.youtube.com/watch?v=8RAzQirQ8KI' },
    { title: 'Video 5', url: 'https://www.youtube.com/watch?v=nhTHjLI5Ur0' },
    { title: 'Video 6', url: 'https://www.youtube.com/watch?v=OPj9s2VBEjw' },
    { title: 'Video 7', url: 'https://www.youtube.com/watch?v=i4tqR9jqqnY' },
    { title: 'Video 8', url: 'https://www.youtube.com/watch?v=ZhmizQG5Iz0' },
  ];

  if (!isClient) {
    return <div>Loading videos...</div>;
  }

  const handleVideoClick = (index) => {
    const newPlaying = [...playing];
    newPlaying[index] = true;
    setPlaying(newPlaying);
  };

  return (
    <div className={styles.container} id="ourWork">
      <div className={styles.videoTitle}>
        <Image
          src="/Sidekick_projects.jpg"
          alt="Sidekick Projects"
          layout="responsive"
          width={500}
          height={200}
          className={styles.responsiveImage}
        />
      </div>
      <div className={styles.videosGrid}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={styles.videoItem}
            onClick={() => handleVideoClick(index)}
          >
            <ReactPlayer
              className={styles.reactPlayer}
              url={video.url}
              width="100%"
              height="100%"
              controls={true}
              light={true}
              playing={playing[index]}
              loop={false}
              playbackRate={1.0}
              volume={0.8}
              muted={false}
              config={{
                youtube: {
                  playerVars: { vq: 'highres' },
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
