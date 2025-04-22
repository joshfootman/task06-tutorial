import { institutions, biology, chemistry, physics, type Institution, type Project, type Laboratory, type Researcher, type Relationship } from "./db.js";

export const randomWait = (): Promise<void> => {
  const waitTime = Math.floor(Math.random() * 4000) + 1000; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime);
  });
};

type Entity = Project | Laboratory | Researcher | Institution

type FormattedEntity = Entity & {
  relationships: {
    id: number,
    type: string,
    target: Entity
  }[]
} 

export const findById = (id: number): FormattedEntity[] => {
  const results = [
    ...biology.projects,
    ...biology.laboratories,
    ...biology.researchers,
    ...chemistry.projects,
    ...chemistry.laboratories,
    ...chemistry.researchers,
    ...physics.projects,
    ...physics.laboratories,
    ...physics.researchers,
    ...institutions
  ];

  const result = results.find((r) => r.id === id);

  if (!result) {
    throw new Error("Invalid id")
  }

  return formatResponses([result])
};

export const findByName = (
  term: string,
  limit: number,
  department?: string[]
): FormattedEntity[] => {
  const datasets: Entity[] = []
  if (!department || department.length === 3) {
    datasets.push(
      ...institutions,
      ...biology.projects,
      ...biology.laboratories,
      ...biology.researchers,
      ...chemistry.projects,
      ...chemistry.laboratories,
      ...chemistry.researchers,
      ...physics.projects,
      ...physics.laboratories,
      ...physics.researchers,
    )
  } else {
    datasets.push(...institutions)

    if (department.includes('Biological Sciences')) {
      datasets.push(
        ...biology.projects,
        ...biology.laboratories,
        ...biology.researchers,
      )
    }

    if (department.includes('Chemistry')) {
      datasets.push(
        ...chemistry.projects,
        ...chemistry.laboratories,
        ...chemistry.researchers,
      )
    }

    if (department.includes('Physics & Astronomy')) {
      datasets.push(
        ...physics.projects,
        ...physics.laboratories,
        ...physics.researchers,
      )
    }
  }

  return formatResponses(datasets.filter((val) => val.name.includes(term)).slice(0, limit));
};

export const findByDepartment = (department: string): FormattedEntity[] => {
  if (department.includes('Biological Sciences')) {
    return formatResponses([
      ...institutions,
      ...biology.projects,
      ...biology.laboratories,
      ...biology.researchers,
    ])
  }

  if (department.includes('Chemistry')) {
    return formatResponses([
      ...institutions,
      ...chemistry.projects,
      ...chemistry.laboratories,
      ...chemistry.researchers,
    ])
  }

  if (department.includes('Physics & Astronomy')) {
    return formatResponses([
      ...institutions,
      ...physics.projects,
      ...physics.laboratories,
      ...physics.researchers,
    ])
  }

  throw new Error('Invalid department')
};

export const dashboardCounts = (department?: string[]) => {
  if (!department || department.length === 3) {
    return {
      institutions: institutions.length,
      projects: biology.projects.length + chemistry.projects.length + physics.projects.length,
      laboratories: biology.laboratories.length + chemistry.laboratories.length + physics.laboratories.length,
      researchers: biology.researchers.length + chemistry.researchers.length + physics.researchers.length,
    }
  } else {
    let projects = 0;
    let laboratories = 0;
    let researchers = 0;
    if (department.includes('Biological Sciences')) {
      projects += biology.projects.length
      laboratories += biology.laboratories.length
      researchers += biology.researchers.length
    }

    if (department.includes('Chemistry')) {
      projects += chemistry.projects.length
      laboratories += chemistry.laboratories.length
      researchers += chemistry.researchers.length
    }

    if (department.includes('Physics & Astronomy')) {
      projects += physics.projects.length
      laboratories += physics.laboratories.length
      researchers += biology.researchers.length
    }

    return {
      institutions: institutions.length,
      projects,
      laboratories,
      researchers,
    }
  }
}

export const formatResponses = (entities: Entity[]): FormattedEntity[] => {
  const results: FormattedEntity[] = []

  entities.forEach((entity) => {
    const formattedEntity: FormattedEntity = { ...entity, relationships: [] }
    const relationships: Relationship[] = []
    if (entity.type === "PROJECT" || entity.type === "LABORATORY" || entity.type === "RESEARCHER") {
      if (entity.department === 'Biological Sciences') {
        const relationships = biology.relationships.filter((relationship) => relationship.source === entity.id)
        relationships.forEach((relationship) => {
          const target = [...institutions, ...biology.projects, ...biology.laboratories, ...biology.researchers].find((e) => e.id === relationship.target)!
          formattedEntity.relationships.push({
            id: relationship.id,
            type: relationship.type,
            target
          })
        })
      } else if (entity.department === 'Chemistry') {
        const relationships = chemistry.relationships.filter((relationship) => relationship.source === entity.id)
        relationships.forEach((relationship) => {
          const target = [...institutions, ...chemistry.projects, ...chemistry.laboratories, ...chemistry.researchers].find((e) => e.id === relationship.target)!
          formattedEntity.relationships.push({
            id: relationship.id,
            type: relationship.type,
            target
          })
        })
      } else if (entity.department === 'Physics & Astronomy') {
        const relationships = physics.relationships.filter((relationship) => relationship.source === entity.id)
        relationships.forEach((relationship) => {
          const target = [...institutions, ...physics.projects, ...physics.laboratories, ...physics.researchers].find((e) => e.id === relationship.target)!
          formattedEntity.relationships.push({
            id: relationship.id,
            type: relationship.type,
            target
          })
        })
      }
    }
    results.push(formattedEntity)
  })

  return results;
};
