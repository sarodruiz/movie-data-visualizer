import Movies from './components/Movies';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-center text-4xl font-bold py-6">Visualizador de Películas IMDB</h1>
      <Movies />
    </div>
  );
}

export default App;
