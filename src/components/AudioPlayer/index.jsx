import React, { useCallback, useEffect } from 'react';
import { Howl } from 'howler';

const AudioPlayer = ({ current, audioSprite, keyPlaying = true, element }) => {
  const { sound } = current;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const aSound = new Howl({
    src: sound.file,
    sprite: {
      audio: sound.time,
    },
  });

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 80) {
        aSound.play('audio');
      }
    },
    [aSound]
  );

  useEffect(() => {
    if (keyPlaying) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, audioSprite, keyPlaying]);

  return <span onClick={() => aSound.play('audio')}>{element}</span>;
};

export default AudioPlayer;
