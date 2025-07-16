export async function fetchMotivationalQuote() {
  try {
    const res = await fetch('https://type.fit/api/quotes');
    if (!res.ok) throw new Error('Error al obtener frases');
    const quotes = await res.json();
    // Elegir una frase al azar
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } catch (error) {
    console.error(error);
    return { text: 'Sigue adelante, ¡tú puedes!', author: 'Desconocido' };
  }
}
