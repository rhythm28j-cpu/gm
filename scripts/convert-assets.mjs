import { copyFile, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir = path.join(process.cwd(), "src/assets");
const width = 800;
const height = 533;

/** @type {Record<string, { source: string; fit?: "cover" | "contain" }>} */
const conversions = {
  "giant-pepperoni.avif": { source: "xoFjmQ-4faF-Y1Rg.png", fit: "contain" },
  "moon-dust-cheese.avif": { source: "YOj2xZUYEqyOKqFC.png", fit: "contain" },
  "black-hole-olives.avif": { source: "bLqEd2lHgA8x6hLq.png", fit: "contain" },
  "solar-jalapenos.avif": { source: "JMu4ed-AdASw4rIE.png", fit: "contain" },
  "cosmic-mushrooms.avif": { source: "Ten1QJ61yCLtbZU_.png", fit: "contain" },
  "orbital-pineapple.avif": { source: "-QMcNz7OBwoYsUaq.png", fit: "contain" },
  "bacon-meteor.avif": { source: "VgOI_vI_Om-sUT_6.png", fit: "contain" },
  "star-bell-peppers.avif": { source: "0DYbVwr14W24DdPL.png", fit: "contain" },
  "nebula-onions.avif": { source: "VJ5r2a4ML_3LMoKm.png", fit: "contain" },
  "fresh-space-basil.avif": { source: "AXeDM8ZNYZfEcw9c.png", fit: "contain" },
  "roasted-broccoli.avif": { source: "tFmt2Z4imBoWjAbS.png", fit: "contain" },
  "tomatoes.avif": { source: "U57gdH9Fw5fNM0iW.png", fit: "contain" },
  "artichokes.avif": { source: "cejI4o07ZlwiCv_L.png", fit: "contain" },
};

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

  const written = new Map();

  for (const [outputName, { source, fit = "cover" }] of Object.entries(
    conversions,
  )) {
    if (written.has(outputName)) {
      continue;
    }

    const inputPath = path.join(assetsDir, source);
    const outputPath = path.join(tempDir, outputName);
    const { buffer, quality, sizeKb } = await encodeAvif(inputPath, fit);

    await sharp(buffer).toFile(outputPath);
    written.set(outputName, { quality, sizeKb });

    console.log(
      `${outputName}: ${sizeKb.toFixed(1)} KB (quality ${quality})`,
    );
  }

  const sourcesToRemove = new Set([
    ...Object.values(conversions).map(({ source }) => source),
    "NtQ5GbxyqENSVZAe.png",
  ]);

  const preservedSources = new Set([
    "hero-pizza.jpg",
    "deal-binary-star.jpg",
    "deal-solo-explorer.jpg",
  ]);

  for (const file of await readdir(assetsDir)) {
    if (file === ".converted") {
      continue;
    }

    const filePath = path.join(assetsDir, file);
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      continue;
    }

    if (preservedSources.has(file)) {
      continue;
    }

    if (sourcesToRemove.has(file) || file.endsWith(".jpg") || file.endsWith(".png")) {
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
