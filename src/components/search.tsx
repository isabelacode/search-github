import { useState } from "react"
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

interface SearchProps {
  onSearch: (username: string) => void
}

export function Search({ onSearch }: SearchProps) {
  const [username, setUsername] = useState("")

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="w-full">
      <Field orientation="horizontal" className="flex gap-2">
        <Input
          type="search"
          placeholder="Search..."
          className="flex-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="default" onClick={handleSearch}>Search</Button>
      </Field>
    </div>
  )
}
