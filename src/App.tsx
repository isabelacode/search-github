import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import {Search} from "@/components/search"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex-col justify-center items-start pt-6 font-mono ">
          <div className="w-full max-w-3xl mx-auto flex justify-between items-center pt-6">
            <h2 className="text-2xl font-bold">devfinder</h2>
            <ModeToggle />
          </div>
          <Search />
        </div>
        

      </ThemeProvider>



    </>
  )
}

export default App
