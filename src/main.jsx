import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 p-6">
    <div className="max-w-md text-center">
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="text-sm text-gray-600">If you see a blank screen, try refreshing the page.</p>
      <a href="/test" className="inline-block mt-4 text-blue-600 font-semibold">Check backend status →</a>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
