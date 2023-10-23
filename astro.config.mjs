import { defineConfig } from 'astro/config';
import { S3Client } from '@aws-sdk/client-s3'

export default defineConfig({
    site: 'https://anhhtdang.com',
});

export const s3 = new S3Client({
  region: 'us-east-2',
  credentials: {
    'accessKeyId': process.env.AWS_ACCESS_KEY_ID,
    'secretAccessKey': process.env.AWS_SECRET_ACCESS_KEY,
  },
})