import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const igUserId = process.env.INSTAGRAM_USER_ID;

  if (!token || !igUserId) {
    return NextResponse.json({ error: "Instagram not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } } // 1 hour cache
    );

    if (!res.ok) throw new Error("Instagram API failed");

    const data = await res.json();

    const reels = data.data.map((item: any) => ({
      title: item.caption ? item.caption.slice(0, 40) : "Sharma's Salon",
      image: item.media_type === "VIDEO" ? item.thumbnail_url : item.media_url,
      permalink: item.permalink,
      isVideo: item.media_type === "VIDEO" || item.media_type === "REELS",
    }));

    return NextResponse.json({ reels });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch Instagram data" }, { status: 500 });
  }
}