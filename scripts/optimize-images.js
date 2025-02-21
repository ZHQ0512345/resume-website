const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public';
const outputDir = 'public/optimized';

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 支持的图片格式
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// 处理单个图片
async function optimizeImage(inputPath, filename) {
  try {
    const image = sharp(inputPath);
    const outputBaseName = path.parse(filename).name;

    // 获取图片信息
    const metadata = await image.metadata();
    if (!metadata) {
      console.warn(`Skipping ${filename}: Unable to read metadata`);
      return;
    }

    // 生成不同尺寸的图片
    const sizes = [640, 750, 828, 1080, 1200, 1920];
    for (const size of sizes) {
      try {
        // 如果原图小于目标尺寸，跳过该尺寸
        if (metadata.width && metadata.width < size) {
          continue;
        }

        // JPG 版本
        await image
          .resize(size, null, { withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(path.join(outputDir, `${outputBaseName}-${size}.jpg`));

        // WebP 版本
        await image
          .resize(size, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(path.join(outputDir, `${outputBaseName}-${size}.webp`));

        console.log(`Generated ${size}px version for ${filename}`);
      } catch (err) {
        console.warn(`Failed to generate ${size}px version for ${filename}:`, err.message);
      }
    }

    // 生成缩略图
    await image
      .resize(200, 200, { fit: 'cover' })
      .jpeg({ quality: 80 })
      .toFile(path.join(outputDir, `${outputBaseName}-thumb.jpg`));

    console.log(`Successfully optimized ${filename}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err.message);
  }
}

// 处理所有图片
async function optimizeAllImages() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (supportedFormats.includes(ext)) {
      const inputPath = path.join(inputDir, file);
      console.log(`Processing ${file}...`);
      await optimizeImage(inputPath, file);
    }
  }
}

// 运行优化
optimizeAllImages()
  .then(() => console.log('Image optimization completed!'))
  .catch((err) => console.error('Error optimizing images:', err)); 