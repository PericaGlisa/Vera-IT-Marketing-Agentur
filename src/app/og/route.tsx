import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #6366f1 100%)",
        }}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}