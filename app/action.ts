"use server";
export async function authorize() {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN ?? "";
  const client_id = process.env.SPOTIFY_CLIENT_ID ?? "";
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET ?? "";
  const { access_token } = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: "http://localhost:3000/",
      }),
    },
  ).then((res) => res.json());
  return {
    access_token,
  };
}
export async function nowPlaying(token: string) {
  const res = await fetch(
    `https://api.spotify.com/v1/me/player/currently-playing?market=ES`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => {
    if (res.status === 200) return res.json();
    else {
      return {
        item: {
          name: "No songs are currently playing.",
          artists: [],
          external_urls: { spotify: "" },
          images: [],
          duration_ms: 0,
        },
        progress_ms: 0,
        is_playing: false,
      };
    }
  });
  const audio_track = {
    name: res.item.name,
    artists: res.item.artists,
    link: res.item.external_urls.spotify,
    images: res.item.images,
    duration: res.item.duration_ms,
    progress: res.progress_ms,
    is_playing: res.is_playing,
  };
  return audio_track;
}
