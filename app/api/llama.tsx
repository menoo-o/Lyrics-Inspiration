// /pages/api/llama.tsx
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    try {
      const llamaRes = await fetch('https://api.llama.ai/v1/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LLAMA_API_KEY}`
        },
        body: JSON.stringify({ prompt })
      });

      if (!llamaRes.ok) {
        throw new Error('Llama API request failed');
      }

      const data = await llamaRes.json();
      res.status(200).json({ response: data.result });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching response from Llama' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
