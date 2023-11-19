import React from 'react';

export default function Button({ onClick }) {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button type="button" className="gradientButton" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
