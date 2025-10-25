/**
 * @type {import('next').NextConfig}
 *
 * This configuration enables the Next.js App Router with support for
 * multiple locales. The default locale is French (fr) and English (en)
 * is provided as an alternative. Images will be served in modern
 * formats where possible. Additional configuration can be added here
 * if required.
 */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
