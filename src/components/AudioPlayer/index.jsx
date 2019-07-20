import React, { useCallback, useEffect } from 'react';
import { Howl } from 'howler';

import { waveform } from '../../assets/assets';

const AudioPlayer = ({ current, audioSprite }) => {
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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, audioSprite]);

  return (
    <img onClick={() => aSound.play('audio')} alt="Press me!" src={waveform} />
  );
};

export default AudioPlayer;
