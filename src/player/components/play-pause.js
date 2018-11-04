import React from 'react';
import Figure from '../../icons/components/figure.js';
import './play-pause.css';

const PlayPause = (props) => (
  <div className="PlayPause">
    <button>
        <Figure.Play></Figure.Play>
    </button>
    <button>
        <Figure.Pause></Figure.Pause>
    </button>
  </div>
)

export default PlayPause;
