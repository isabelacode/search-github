import { useState } from "react"
import { getGithubUser } from "../services/github"
import type { GitHubUser } from "../types/github"

export function useGithubUser() {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function fetchUser(username: string) {
        try {
            setLoading(true)
            setError(null)
            const data = await getGithubUser(username)
            setUser(data)
        } catch {
            setError("Usuário não encontrado")
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    return { user, loading, error, fetchUser }
}
