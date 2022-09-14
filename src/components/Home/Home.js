import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [align, setAlign] = useState('center');
  const [titleFont, setTitleFont] = useState('indie-flower');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, text, align, titleFont }} />
      <Editor {...{
        title, 
        setTitle, 
        subtitle, 
        setSubtitle, 
        text, 
        setText,
        align,
        setAlign,
        titleFont,
        setTitleFont }}/>
    </main>
  );
}
