import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

export function Search() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <Field orientation="horizontal" className="flex gap-2">
        <Input
          type="search"
          placeholder="Search..."
          className="flex-1"
        />
        <Button variant="default">Search</Button>
      </Field>
    </div>
  )
}
