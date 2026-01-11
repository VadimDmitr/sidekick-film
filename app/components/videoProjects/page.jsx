'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import styles from './videoProjects.module.css';

const VideoComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const [error, setError] = useState(null);
  const clickTimeoutRef = useRef({});

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
    // First, remove light mode immediately on touch/click
    setLoadedVideos((prev) => new Set([...prev, index]));
    
    // Then set as active to start playing
    setActiveIndex(index);
    setError(null);

    // Debounce to prevent rapid re-clicks
    if (clickTimeoutRef.current[index]) {
      return;
    }

    clickTimeoutRef.current[index] = true;
    setTimeout(() => {
      clickTimeoutRef.current[index] = false;
    }, 500);
  };

  const handlePlayerReady = (index) => {
    // When YouTube iframe is ready, ensure it plays if this is the active video
    if (activeIndex === index) {
      // Force play on ready (helps with iOS)
      setTimeout(() => {
        if (activeIndex === index) {
          setActiveIndex(index);
        }
      }, 100);
    }
  };

  const handleVideoError = (index, err) => {
    console.error(`Error with video ${index}:`, err);
    setError(`Error loading video ${index + 1}`);
  };

  const handleVideoEnded = () => {
    // Stop video when it ends
    setActiveIndex(null);
  };

  const handlePlayPause = (index, isPlaying) => {
    if (isPlaying && activeIndex !== index) {
      // If any other video tries to play, stop it
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.container} id="ourWork">
      <div className={styles.videoTitle}>
        <Image
          src="/Sidekick_projects.jpg"
          alt="Sidekick Projects"
          width={800}
          height={250}
          className={styles.responsiveImage}
        />
      </div>
      {error && <div style={{ color: 'red', padding: '1rem' }}>{error}</div>}
      <div className={styles.videosGrid}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={styles.videoItem}
            onClick={() => handleVideoClick(index)}
            onTouchStart={() => handleVideoClick(index)}
            onPointerDown={() => handleVideoClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleVideoClick(index);
              }
            }}
            style={{ touchAction: 'manipulation', cursor: 'pointer' }}
          >
            <ReactPlayer
              className={styles.reactPlayer}
              url={video.url}
              width="100%"
              height="100%"
              controls
              light={!loadedVideos.has(index)}
              playing={activeIndex === index}
              loop={false}
              playbackRate={1.0}
              volume={0.8}
              muted={false}
              onError={(err) => handleVideoError(index, err)}
              onEnded={() => handleVideoEnded()}
              onPlay={() => handlePlayPause(index, true)}
              onReady={() => handlePlayerReady(index)}
              onBuffer={() => {
                // Handle buffering if needed
              }}
              progressInterval={1000}
              config={{
                youtube: {
                  playerVars: {
                    vq: 'highres',
                    autoplay: 1,
                    fs: 1,
                    modestbranding: 1,
                    controls: 1,
                    playsinline: 1,
                  },
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
