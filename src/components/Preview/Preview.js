import React from 'react';

import './Preview.css';

export default function Preview({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>This is some blog text. </p>
    </div>
  );
}
