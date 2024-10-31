"use client";

import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/llama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) throw new Error('Failed to fetch response from Llama');

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      setResponse('Error fetching response from Llama');
    }
  };

  return (
    <div>
      <h1>Ask Llama for Lyrics Inspiration</h1>
      <textarea
        placeholder="Type a question or lyric prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={handleSubmit}>Generate</button>
      <div>
        <h2>Llama Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}
