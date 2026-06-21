import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notes from './pages/Notes';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        {/* Home renders the full-bleed Gromuse hero (which carries its own top bar) */}
        <Route path="/" element={<Home />} />
        <Route
          path="/notes"
          element={
            <>
              <Navbar />
              <main className="mx-auto max-w-5xl px-4 py-10">
                <Notes />
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
