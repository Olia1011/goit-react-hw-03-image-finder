import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';


const ImageGallery = ({ gallery }) => {
  return (
    <>
      <ul className={styles.imageGallery}>
        {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};



export default ImageGallery;
