import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), "src/assets");
const width = 800;
const height = 533;

/** @type {Record<string, { source: string; fit?: "cover" | "contain" }>} */
const conversions = {
  "giant-pepperoni.avif": { source: "giant-pepperoni.png", fit: "contain" },
  "moon-dust-cheese.avif": { source: "moon-dust-cheese.png", fit: "contain" },
  "black-hole-olives.avif": { source: "black-hole-olives.png", fit: "contain" },
  "solar-jalapenos.avif": { source: "solar-jalapenos.png", fit: "contain" },
  "cosmic-mushrooms.avif": { source: "cosmic-mushrooms.png", fit: "contain" },
  "orbital-pineapple.avif": { source: "orbital-pineapple.png", fit: "contain" },
  "bacon-meteor.avif": { source: "bacon-meteor.png", fit: "contain" },
  "star-bell-peppers.avif": { source: "star-bell-peppers.png", fit: "contain" },
  "nebula-onions.avif": { source: "nebula-onions.png", fit: "contain" },
  "fresh-space-basil.avif": { source: "fresh-space-basil.png", fit: "contain" },
  "roasted-broccoli.avif": { source: "roasted-broccoli.png", fit: "contain" },
  "tomatoes.avif": { source: "tomatoes.png", fit: "contain" },
  "artichokes.avif": { source: "artichokes.png", fit: "contain" },
};

const preservedFiles = new Set([
  "hero-pizza.jpg",
  "deal-binary-star.jpg",
  "deal-solo-explorer.jpg",
  "toppingImages.ts",
]);

async function encodeAvif(inputPath, fit) {
  let quality = 52;

  for (let attempt = 0; attempt < 6; attempt += 1) {
    const buffer = await sharp(inputPath)
      .rotate()
      .resize(width, height, {
        fit,
        position: "centre",
        background: { r: 0, g: 0, b: 0, alpha: 1 },
      })
      .avif({ quality, effort: 4 })
      .toBuffer();

    const sizeKb = buffer.length / 1024;
    if (sizeKb <= 80 || quality <= 28) {
      return { buffer, quality, sizeKb };
    }

    quality -= 6;
  }

  const buffer = await sharp(inputPath)
    .rotate()
    .resize(width, height, {
      fit,
      position: "centre",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .avif({ quality: 28, effort: 4 })
    .toBuffer();

  return { buffer, quality: 28, sizeKb: buffer.length / 1024 };
}

async function main() {
  const tempDir = path.join(assetsDir, ".converted");
  await mkdir(tempDir, { recursive: true });

  const convertedSources = [];

  for (const [outputName, { source, fit = "cover" }] of Object.entries(
    conversions,
  )) {
    const inputPath = path.join(assetsDir, source);

    try {
      await stat(inputPath);
    } catch {
      console.warn(`Skipping ${outputName}: source ${source} not found`);
      continue;
    }

    const outputPath = path.join(tempDir, outputName);
    const { buffer, quality, sizeKb } = await encodeAvif(inputPath, fit);

    await sharp(buffer).toFile(outputPath);
    convertedSources.push(source);

    console.log(
      `${outputName}: ${sizeKb.toFixed(1)} KB (quality ${quality})`,
    );
  }

  for (const file of await readdir(assetsDir)) {
    if (file === ".converted") {
      continue;
    }

    const filePath = path.join(assetsDir, file);
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      continue;
    }

    if (preservedFiles.has(file)) {
      continue;
    }

    if (convertedSources.includes(file)) {
      await rm(filePath);
    }
  }

  for (const file of await readdir(tempDir)) {
    await copyFile(path.join(tempDir, file), path.join(assetsDir, file));
  }

  await rm(tempDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
