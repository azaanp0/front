export function generateSvgPlaceholder(text: string, width = 800, height = 800, isBanner = false) {
  const bg1 = isBanner ? "#fdfbfe" : "#ffffff";
  const bg2 = isBanner ? "#f0e4f5" : "#faf7fc";
  const textColor = "#c6aad0";
  const textTitle = text || "SAHAR";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${bg1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${bg2};stop-opacity:1" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad)"/>
    <circle cx="${width / 2}" cy="${height / 2}" r="${width * 0.25}" fill="none" stroke="${textColor}" stroke-width="2" opacity="0.3"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="300" font-size="${Math.min(width, height) * 0.1}px" fill="${textColor}" letter-spacing="4" filter="url(#glow)">
      ${textTitle}
    </text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
