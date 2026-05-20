/**
 * 生成生产环境 .min 静态资源
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { minify as minifyJs } from "terser";
import CleanCSS from "clean-css";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "assets");

const jsFiles = ["main.js", "data.js", "image-modal.js"];
const cssFiles = ["main.css"];

async function buildJs(name) {
  const input = join(assets, name);
  const output = join(assets, name.replace(/\.js$/, ".min.js"));
  const code = readFileSync(input, "utf8");
  const result = await minifyJs(code, {
    compress: true,
    mangle: false,
    format: { comments: false },
  });
  if (result.error) throw result.error;
  writeFileSync(output, result.code);
  console.log(`  ${name} -> ${name.replace(/\.js$/, ".min.js")}`);
}

function buildCss(name) {
  const input = join(assets, name);
  const output = join(assets, name.replace(/\.css$/, ".min.css"));
  const code = readFileSync(input, "utf8");
  const result = new CleanCSS({ level: 2 }).minify(code);
  if (result.errors.length) {
    throw new Error(result.errors.join("\n"));
  }
  writeFileSync(output, result.styles);
  console.log(`  ${name} -> ${name.replace(/\.css$/, ".min.css")}`);
}

console.log("Building minified assets...");
for (const file of jsFiles) {
  await buildJs(file);
}
for (const file of cssFiles) {
  buildCss(file);
}
console.log("Done.");
