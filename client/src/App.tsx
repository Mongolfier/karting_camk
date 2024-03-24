import { RouterProvider } from 'react-router-dom';
import { router } from 'shared/config/routeConfig';
import { Header } from 'features/Header';
import { Suspense } from 'react';

function App() {
  return (
    // FIXME: Добавить фоллбэк лоадер?
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
      <div className="App">
        <Header />

      </div>
    </Suspense>
  );
}

export default App;
