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

async function createIcon(size, filename) {
  await sharp(input)
    /*
     * Remove the white area around the original logo.
     */
    .trim({
      background: {
        r: 255,
        g: 255,
        b: 255,
        alpha: 1,
      },
      threshold: 20,
    })

    /*
     * Put the trimmed logo inside a transparent square.
     */
    .resize(size, size, {
      fit: "contain",
      background: {
        r: 255,
        g: 255,
        b: 255,
        alpha: 0,
      },
    })

    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })

    .toFile(
      path.join(output, filename)
    );
}


async function generateIcons() {

  if (!fs.existsSync(input)) {
    throw new Error(
      `Logo not found: ${input}`
    );
  }

  await createIcon(
    16,
    "favicon-16x16.png"
  );

  await createIcon(
    32,
    "favicon-32x32.png"
  );

  await createIcon(
    180,
    "apple-touch-icon.png"
  );

  await createIcon(
    192,
    "android-chrome-192x192.png"
  );

  await createIcon(
    512,
    "android-chrome-512x512.png"
  );

  console.log(
    "✓ Favicon icons generated with transparent background."
  );
}


generateIcons().catch((error) => {

  console.error(error);

  process.exit(1);

});