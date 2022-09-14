import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle, text, align, titleFont }) {
  return (
    <div className={`preview ${titleFont}`} style={{ textAlign: align }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </div>
  );
}
