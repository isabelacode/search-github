import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "@/components/search"
import { useGithubUser } from "./hooks/use-github-user"
import { UserCard } from "./components/user-card"

function App() {
  const { user, fetchUser } = useGithubUser()

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col justify-start lg:justify-center p-4 sm:p-6 lg:p-8 font-mono">
          <div className="w-full max-w-[327px] sm:max-w-[573px] lg:max-w-[730px] mx-auto space-y-6 lg:space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">devfinder</h2>
              <ModeToggle />
            </div>
            <Search onSearch={fetchUser} />
            <UserCard user={user} />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
