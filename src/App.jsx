import NewsShow from "./components/NewsShow";
import Header from "./components/Header";
import "./index.css"
function App() {

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col items-center justify-center h-auto dark:bg-white bg-zinc-700">
        <Header />
        <NewsShow />
      </div>
    </>
  )
}

export default App
