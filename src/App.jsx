import Beranda from './components/Beranda'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      {/* Container ini dibuat menyerupai tampilan HP (max-w-md) */}
      <div className="w-full max-w-md h-screen overflow-y-auto bg-white shadow-2xl">
        <Beranda />
      </div>
    </div>
  )
}

export default App
// add new update
// add new message