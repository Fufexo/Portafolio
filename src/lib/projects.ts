import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Proyectos ordenados por `order` (como aparecen en la portada). */
export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

/** Rutas estáticas de /proyectos/[slug] (se usa igual en español e inglés). */
export async function getProjectPaths() {
  const projects = await getProjects();
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}
