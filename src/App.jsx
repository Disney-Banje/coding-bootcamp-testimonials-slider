import Card from "./Card"

function App() {

  return (
    <main className="min-h-screen overflow-hidden flex flex-col justify-center items-center relative">
      <Card />
      <img src="./src/assets/images/pattern-curve.svg" alt=""  className="absolute bottom-0 left-0 -z-20"/>
    </main>
  )
}

export default App
