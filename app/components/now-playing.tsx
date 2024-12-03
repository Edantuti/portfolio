import { Music } from "lucide-react";
import { nowPlaying } from "../action";

export async function NowPlaying({ token }: { token: string }) {
  const track = await nowPlaying(token);
  const artist_names = track.artists.map(
    (
      value: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      },
      index: number,
    ) => {
      if (index === track.artists.length - 1) return value.name;
      return value.name;
    },
  );
  return (
    <div className="flex items-center gap-2">
      <span>
        <Music className="w-4 h-4" />
      </span>{" "}
      <p className="flex items-center gap-2">
        {track.is_playing
          ? `Now Playing: ${track.name} ${artist_names.length > 0 && "|"}
        ${artist_names}`
          : track.name}
      </p>
    </div>
  );
}
