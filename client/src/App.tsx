import { RouterProvider } from 'react-router-dom';
import { router } from 'shared/config/routeConfig';
import { Header } from 'features/Header';
import { Suspense } from 'react';

async function test() {
  await fetch('http://localhost:1337/api/news/2', {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_BEARER}`
    }
  })
}

test()

function App() {
  return (
    // FIXME: Добавить фоллбэк лоадер?
    <Suspense fallback={<></>}>
      <div className="App">
        <Header />

        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
