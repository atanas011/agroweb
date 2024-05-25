import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.js'
import NotFound from './pages/NotFound.js'
import Home from './pages/Home.js'
import Page from './pages/vesti/Page.js'
import Details from './pages/vesti/Details.js'

function App() {

  const path = window.location.pathname.split('/').slice(-1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={`vesti/${path}`} element={<Page path={path} />} />
          <Route path={`vesti/${'Neki naslov'}`} element={<Details path='Neki naslov' />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
