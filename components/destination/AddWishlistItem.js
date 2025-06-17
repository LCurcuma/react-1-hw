"use client";

import { useState } from 'react';
import styles from './destination.module.css';

export const AddWishlistItem = ({
  onAddWishlistItem,
}) => {
  const [thumbnail, onThumbnailChange] = useState('/destination/image-europa.png');
  // TASK - React 1 week 3
  // 1. Add a useState for the handling the <input id="customWishlist" type="text" />
  const [wishListItemName, setWishlistItemName] = useState('');
  const wishListItemNameChange = (e) => {
    setWishlistItemName(e.target.value);
  }
  // 2. Connect the onThumbnailChange to the <select>
  const thumbnailChange = (e) => {
    onThumbnailChange(e.target.value);
  }
  
  
  const onAddItemPressed = () => {
    // TASK - React 1 week 3
    // implement this function
    // Clear the <input/> field on button press
    let text = document.getElementById('customWishlist').value;
    document.getElementById('customWishlist').value = '';
    // pass the thumbnail and the name from the input to the onAddWishlistItem function
    onAddWishlistItem = {
      name: wishListItemName,
      thumbnail: thumbnail
    }
    // call the onAddWishlistItem here
  }


  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input id="customWishlist" type="text" onChange={wishListItemNameChange}/>
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select id="customWishlistThumbnail" onChange={thumbnailChange}>
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};