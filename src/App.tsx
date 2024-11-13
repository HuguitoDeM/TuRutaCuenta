import "./App.css";
import { BlogProvider } from "./context/BlogDataProvider";
import { Rutas } from "./routes/Routes";

function App() {
  return (
    <>
      <BlogProvider>
        <Rutas />
      </BlogProvider>
    </>
  );
}

export default App;
