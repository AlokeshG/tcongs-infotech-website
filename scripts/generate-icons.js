const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const input = path.join(
  __dirname,
  "..",
  "src",
  "assets",
  "tcongs-logo.png"
);

const output = path.join(
  __dirname,
  "..",
  "public"
);

async function generateIcons() {
  if (!fs.existsSync(input)) {
    throw new Error(`Logo not found: ${input}`);
  }

  await sharp(input)
    .resize(16, 16, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(output, "favicon-16x16.png"));

  await sharp(input)
    .resize(32, 32, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(output, "favicon-32x32.png"));

  await sharp(input)
    .resize(180, 180, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(output, "apple-touch-icon.png"));

  await sharp(input)
    .resize(192, 192, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(output, "android-chrome-192x192.png"));

  await sharp(input)
    .resize(512, 512, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(output, "android-chrome-512x512.png"));

  console.log("✓ Favicon files generated successfully.");
}

generateIcons().catch((error) => {
  console.error(error);
  process.exit(1);
});