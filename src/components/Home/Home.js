import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title }} />
      <Editor {...{ title, setTitle }}/>
    </main>
  );
}
