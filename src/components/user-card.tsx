import type { GitHubUser } from "../types/github"
import { MapPin, Link as LinkIcon, Twitter, Building } from "lucide-react"

interface Props {
    user: GitHubUser | null
}

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
}

export function UserCard({ user }: Props) {
    if (!user) {
        return null
    }

    return (
        <div className="w-full bg-card text-card-foreground rounded-2xl p-6 sm:p-10 lg:p-12 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-9">
                <img
                    src={user.avatar_url}
                    alt={user.name || user.login}
                    className="w-17.5 h-17.5 sm:w-29.25 sm:h-29.25 rounded-full"
                />

                <div className="flex-1 space-y-5 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2">
                        <div>
                            <h2 className="text-base sm:text-xl lg:text-[26px] font-bold leading-normal">
                                {user.name || user.login}
                            </h2>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm sm:text-base"
                            >
                                @{user.login}
                            </a>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-[13px] lg:text-[15px] sm:whitespace-nowrap">
                            Joined {formatDate(user.created_at)}
                        </p>
                    </div>

                    <p className="text-muted-foreground text-[13px] sm:text-[15px] leading-relaxed">
                        {user.bio || "This profile has no bio"}
                    </p>

                    <div className="bg-background rounded-lg sm:rounded-[10px] p-4 sm:p-6 lg:p-4.5 flex justify-around sm:justify-between text-center sm:text-left">
                        <div>
                            <p className="text-[11px] sm:text-[13px] text-muted-foreground mb-1 sm:mb-2">Repos</p>
                            <p className="text-base sm:text-lg lg:text-[22px] font-bold">{user.public_repos}</p>
                        </div>
                        <div>
                            <p className="text-[11px] sm:text-[13px] text-muted-foreground mb-1 sm:mb-2">Followers</p>
                            <p className="text-base sm:text-lg lg:text-[22px] font-bold">{user.followers}</p>
                        </div>
                        <div>
                            <p className="text-[11px] sm:text-[13px] text-muted-foreground mb-1 sm:mb-2">Following</p>
                            <p className="text-base sm:text-lg lg:text-[22px] font-bold">{user.following}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-[13px] sm:text-[15px]">
                        <div className="flex items-center gap-3 sm:gap-3.25">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span className={user.location ? "" : "text-muted-foreground opacity-60"}>
                                {user.location || "Not Available"}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-3.25">
                            <Twitter className="w-5 h-5 shrink-0" />
                            <span className={user.twitter_username ? "" : "text-muted-foreground opacity-60"}>
                                {user.twitter_username || "Not Available"}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-3.25">
                            <LinkIcon className="w-5 h-5 shrink-0" />
                            {user.blog ? (
                                <a
                                    href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline truncate"
                                >
                                    {user.blog}
                                </a>
                            ) : (
                                <span className="text-muted-foreground opacity-60">Not Available</span>
                            )}
                        </div>

                        <div className="flex items-center gap-3 sm:gap-3.25">
                            <Building className="w-5 h-5 shrink-0" />
                            <span className={user.company ? "" : "text-muted-foreground opacity-60"}>
                                {user.company || "Not Available"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
