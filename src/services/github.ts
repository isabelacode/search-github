import type { GitHubUser } from "../types/github"

export async function getGithubUser(username: string): Promise<GitHubUser> {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    )

    if (!response.ok) {
        throw new Error("Usuário não encontrado")
    }
    return response.json()
}