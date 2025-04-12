import React from 'react';
import './FilterSidebar.css';

const filters = [
  "CUSTOMIZABLE",
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      {filters.map((filter, index) => (
        <div key={index} className="filter-section">
          <label className="filter-label">{filter}</label>
          <select className="filter-dropdown">
            <option>All</option>
            {/* You can dynamically add options here */}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
