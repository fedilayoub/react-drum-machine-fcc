import { React, useEffect } from 'react';

const KeybordKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
    const handleKeydown = (e) => {
        if(keyCode === e.keyCode) {
          const audio = document.getElementById(key);
          play(key, id);
          deactivateAudio(audio)
        }
      }
      
     useEffect(() => {
          document.addEventListener('keydown', handleKeydown);
      }, [])
    return (
         <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
        <audio className="clip" src={url} id={key} />
        {key}
      </button>
    );
}

export default KeybordKey;
