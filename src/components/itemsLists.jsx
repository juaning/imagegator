import React, { useState, useEffect, useRef } from 'react';
import PostItem from './postItem';
import * as data from './data.json';

const listStyle = {
  overflow: "scroll",
  height: '100%',
};

const ItemsList = () => {
  const [posts, setPosts] = useState({ nodes: []});
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const baseUrl = 'https://www.pinkvilla.com';
  const listRef = useRef();

  const fetchData = async (page = 0) => {
    setIsError(false);
    setIsLoading(true);
    let url = `${baseUrl}/photo-gallery-feed-page`;
    if (page > 0) {
      url = `${url}/page/${page}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      const newPosts = { nodes: [...posts.nodes, ...data.nodes]}
      setPosts(newPosts);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => fetchData(page), [page]);

  const handleScroll = (evt) => {
    if (listRef.current) {
      const bottom = (evt.target.scrollHeight - evt.target.scrollTop) === evt.target.clientHeight;
      console.log('scrolling');

      if (bottom) {
        // fetch to next page
        // setPage(page + 1);
        setIsLoading(true);
      }
    }
  } 

  if (!posts || !posts.nodes || posts.nodes.length === 0) {
    return <div>No posts to show</div>;
  }
  const list = posts.nodes.map(post => {
    const { node } = post;
    if (node) {
      const {
        title = 'Title',
        field_photo_image_section = "",
        path = "",
        nid
      } = node;
      return (
        <PostItem
          key={nid}
          title={title}
          img={`${baseUrl}${field_photo_image_section}`}
          url={`${baseUrl}${path}`}
        />
      );
    }
  });

  return <div
      onScroll={handleScroll}
      ref={listRef}
      style={listStyle}
    >
      {isError && <div>Something went wrong...</div>}
      {list}
      {isLoading
        ? <div className="loader">
            <img src="https://miro.medium.com/max/700/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="Loading..." />
          </div>
        : null}
    </div>;
    
};

export default ItemsList;