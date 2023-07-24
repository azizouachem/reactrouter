import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div>
      <label htmlFor="titleFilter">Filter by Title:</label>
      <input
        type="text"
        id="titleFilter"
        value={titleFilter}
        onChange={onTitleFilterChange}
        placeholder="Enter title..."
      />
      <br />
      <label htmlFor="ratingFilter">Filter by Rating:</label>
      <input
        type="number"
        id="ratingFilter"
        value={ratingFilter}
        onChange={onRatingFilterChange}
        placeholder="Enter rating..."
      />
    </div>
  );
};

export default Filter;
