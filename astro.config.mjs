import { defineConfig } from 'astro/config';
import AWS from 'aws-sdk';


export default defineConfig({
    site: 'https://anhhtdang.com',
});


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
});