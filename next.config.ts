import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const nextConfig: NextConfig = {};

// Força o caminho absoluto
const withNextIntl = createNextIntlPlugin(

);

export default withNextIntl(nextConfig);