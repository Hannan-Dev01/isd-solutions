/**
 * Generates favicon PNG/ICO files from client/public/favicon.svg
 * Run: node scripts/generate-favicons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../client/public");
const svgPath = path.join(publicDir, "favicon.svg");
const svgBuffer = fs.readFileSync(svgPath);

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
];

const pngBuffers = [];

for (const { name, size } of sizes) {
  const outPath = path.join(publicDir, name);
  const buffer = await sharp(svgBuffer)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(outPath, buffer);
  console.log(`Created ${name}`);
  if (size === 16 || size === 32 || size === 48) {
    pngBuffers.push(buffer);
  }
}

const icoBuffer = await toIco(pngBuffers);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
console.log("Created favicon.ico");
