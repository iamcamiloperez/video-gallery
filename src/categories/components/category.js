import React from 'react';
import Playlist from '../../playlist/components/playlist.js';
import './category.css'

function Category(props){
  return(
    <div className='Category'>
      <p className='Category-description'>{props.description}</p>
      <h2 className='Category-title'>{props.title}</h2>
      {
        <div className="container-fluid">
          <Playlist
            playlist={props.playlist}
            />
        </div>
      }
    </div>
  )
}

export default Category;
