'use client';

import React, { useState } from 'react';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="ax-relative">
      <input
        type="text"
        className="ax-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* Search results dropdown would go here */}
    </div>
  );
};

export default SearchInput;
