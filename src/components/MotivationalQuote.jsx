import React, { useEffect, useState } from 'react';

const localQuotes = [
  'El éxito es la suma de pequeños esfuerzos repetidos día tras día. — Robert Collier',
  'La disciplina es el puente entre metas y logros. — Jim Rohn',
  'No cuentes los días, haz que los días cuenten. — Muhammad Ali',
  'La motivación te impulsa a empezar, el hábito te mantiene. — Jim Ryun',
  'El dolor es temporal, el orgullo es para siempre. — Lance Armstrong',
  'La fuerza no proviene de la capacidad física, sino de la voluntad indomable. — Mahatma Gandhi',
  'Nunca es demasiado tarde para ser la mejor versión de ti mismo.',
  'El único mal entrenamiento es el que no se hace.',
  'Hazlo por ti, por tu salud y por tu bienestar.',
  'El deporte no construye el carácter, lo revela. — Heywood Broun',
  'La salud mental es tan importante como la física. ¡Cuídate!',
  'Cada paso cuenta, cada día suma.',
  'El único límite para alcanzar tus sueños eres tú mismo.',
  'No te rindas, el principio siempre es la parte más difícil.',
  'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. — Albert Schweitzer',
  'La constancia es el secreto para lograr grandes resultados.',
  'El cuerpo logra lo que la mente cree.',
  'Hoy es un buen día para empezar algo nuevo.',
  'No importa lo lento que vayas, lo importante es no detenerte.',
  'El esfuerzo de hoy es el éxito de mañana.',
  'Cree en ti y todo será posible.',
  'La actitud es una pequeña cosa que hace una gran diferencia. — Winston Churchill',
  'El bienestar es un viaje, no un destino.',
  'Haz de tu salud mental una prioridad cada día.'
];

const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote(`${data.content} — ${data.author}`);
      } catch (error) {
        // Si la API falla, usar una frase local aleatoria
        const randomIndex = Math.floor(Math.random() * localQuotes.length);
        setQuote(localQuotes[randomIndex]);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="alert alert-info mt-3">
      <strong>Frase motivacional:</strong><br />
      <em>{quote}</em>
    </div>
  );
};

export default MotivationalQuote;
