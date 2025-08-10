import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="35%" stopColor="#8b5cf6" />
            <stop offset="70%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
          <linearGradient id="g2" x1="20%" y1="20%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#581c87" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#7c2d92" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="r1" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#7c3aed" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#581c87" stopOpacity="0.10" />
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g1)" />
        <rect width="1200" height="630" fill="url(#g2)" />
        <rect width="1200" height="630" fill="url(#r1)" />
        <circle cx="960" cy="120" r="120" fill="#ffffff" fillOpacity="0.08" />
        <circle cx="1060" cy="315" r="80" fill="#ffffff" fillOpacity="0.06" />
        <circle cx="1110" cy="480" r="50" fill="#ffffff" fillOpacity="0.05" />
        <circle cx="960" cy="520" r="35" fill="#ffffff" fillOpacity="0.04" />
        <path d="M0,400 Q300,350 600,400 T1200,350 L1200,630 L0,630 Z" fill="url(#g2)" fillOpacity="0.3" />
        <circle cx="200" cy="150" r="25" fill="#ffffff" fillOpacity="0.03" />
        <circle cx="350" cy="200" r="30" fill="#ffffff" fillOpacity="0.04" />
        <circle cx="500" cy="120" r="20" fill="#ffffff" fillOpacity="0.03" />
      </svg>
    ),
    { width: 1200, height: 630 }
  )
}