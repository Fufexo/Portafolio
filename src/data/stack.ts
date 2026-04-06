export interface TechTagData {
  label: string;
  icon: string;
  delay: string;
}

export const frontendTags: TechTagData[] = [
  { label: 'Next.js',      icon: '▲',  delay: '0s'    },
  { label: 'React',        icon: '⚛',  delay: '0.08s' },
  { label: 'Angular',      icon: '🔴', delay: '0.16s' },
  { label: 'TypeScript',   icon: 'TS', delay: '0.24s' },
  { label: 'Tailwind CSS', icon: '🌊', delay: '0.32s' },
  { label: 'Astro',        icon: '🚀', delay: '0.40s' },
  { label: 'HTML & CSS',   icon: '🌐', delay: '0.48s' },
];

export const backendTags: TechTagData[] = [
  { label: 'Java',        icon: '☕', delay: '0.05s' },
  { label: 'C#',          icon: '🔷', delay: '0.12s' },
  { label: 'Spring Boot', icon: '🍃', delay: '0.19s' },
  { label: 'NestJS',      icon: '🦁', delay: '0.26s' },
  { label: 'Node.js',     icon: '🟢', delay: '0.33s' },
  { label: 'WordPress',   icon: '🌐', delay: '0.40s' },
];

export const databaseTags: TechTagData[] = [
  { label: 'MySQL',      icon: '🐬', delay: '0.05s' },
  { label: 'SQL Server', icon: '🏢', delay: '0.13s' },
  { label: 'DynamoDB',   icon: '⚡', delay: '0.21s' },
  { label: 'NoSQL',      icon: '📦', delay: '0.29s' },
  { label: 'Supabase',   icon: '🐘', delay: '0.37s' },
];

export const cloudTags: TechTagData[] = [
  { label: 'Azure',    icon: '☁️', delay: '0.05s' },
  { label: 'AWS',      icon: '🌩️', delay: '0.12s' },
  { label: 'Vercel',   icon: '▼',  delay: '0.19s' },
  { label: 'Git',      icon: '🌿', delay: '0.26s' },
  { label: 'Postman',  icon: '📬', delay: '0.33s' },
  { label: 'Insomnia', icon: '😴', delay: '0.40s' },
  { label: 'DBeaver',  icon: '🦫', delay: '0.47s' },
  { label: 'Figma',    icon: '🎨', delay: '0.54s' },
];
