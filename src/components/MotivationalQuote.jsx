import React, { useEffect, useState } from 'react';

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote(`${data.content} — ${data.author}`);
      } catch (error) {
        setQuote('No se pudo cargar una frase motivacional. Intenta más tarde.');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="alert alert-info mt-3">
      <strong>Frase del día:</strong><br />
      <em>{quote}</em>
    </div>
  );
};

export default MotivationalQuote;
