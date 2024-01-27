import { Suspense } from 'react';
import './App.css';

function App() {
  return (
    // FIXME: Добавить фоллбэк лоадер?
    <Suspense fallback={<></>}>
      <div className="App">
        <header className="App-header">
        </header>

        <main></main>

        <footer></footer>
      </div>
    </Suspense>
  );
}

export default App;
