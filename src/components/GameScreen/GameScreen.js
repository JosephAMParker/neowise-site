import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import ScriptTag from 'react-script-tag';
import './GameScreen.scss'

function GameScreen(props) {  

  const handleMouseDown = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    window.focus();
  }

  const handleMouseUp = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
  }

  useEffect(() => {   
    document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
    document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false);
  },[]); 

  const useScript = (url) => {
    useEffect(() => {
      const script = document.createElement('script');

      script.src = url;
      script.async = false;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  };

  useScript("https://josephamparker.github.io/neowise-game/html/html.nocache.js")

  return (
    <Fragment>
      <MetaTags> 
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        <meta id="gameViewport" name="viewport" content="width=device-width initial-scale=1"/>
      </MetaTags>
      <a class="superdev" href="javascript:%7B%20window.__gwt_bookmarklet_params%20%3D%20%7B'server_url'%3A'http%3A%2F%2Flocalhost%3A9876%2F'%7D%3B%20var%20s%20%3D%20document.createElement('script')%3B%20s.src%20%3D%20'http%3A%2F%2Flocalhost%3A9876%2Fdev_mode_on.js'%3B%20void(document.getElementsByTagName('head')%5B0%5D.appendChild(s))%3B%7D">&#8635;</a>
      <div align="center" id="embed-html"></div>  
    </Fragment>
  );
}

export default GameScreen;