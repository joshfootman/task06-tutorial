import { institutes, laboratories, organisations, projects } from "./db.js";

export const randomWait = (): Promise<void> => {
  const waitTime = Math.floor(Math.random() * 4000) + 1000; // Random time between 1 and 5 seconds
  return new Promise((resolve) => {
    setTimeout(resolve, waitTime);
  });
};

type Institute = (typeof institutes)[number];
type Laboratories = (typeof laboratories)[number];
type Organisations = (typeof organisations)[number];
type Projects = (typeof projects)[number];

type Response = Institute | Laboratories | Organisations | Projects;

export const findById = (id: string): Response => {
  const results = [
    ...institutes,
    ...laboratories,
    ...organisations,
    ...projects,
  ];

  return results.find((r) => r.id === id);
};

export const findByName = (
  term: string,
  limit: number,
  department?: string
): Response[] => {
  const results = [
    ...institutes,
    ...laboratories,
    ...organisations,
    ...projects,
  ];

  const filtered = results.filter((val) => {
    if ("department" in val && department) {
      return val.name.includes(term) && val.department === department;
    } else {
      return val.name.includes(term);
    }
  });

  // lmao
  filtered.length = Math.min(filtered.length, limit);

  return filtered;
};

export const findByDepartment = (department: string): Response[] => {
  const institute = institutes.find((i) => i.department === department);
  const laboratory = laboratories.find((l) => l.department === department);
  const organisationFromLab = organisations.find(
    (o) => o.laboratory_id === laboratory.id
  );
  const projectsFromLab = projects.filter((pr) =>
    laboratory.project_ids.includes(pr.id)
  );

  return [institute, laboratory, organisationFromLab, ...projectsFromLab];
};

export const formatResponses = (response: Response[]) => {
  const results = response.map((result) => {
    if ("location" in result) {
      const { laboratory_id, ...rest } = result;
      const lab = laboratories.find((l) => l.id === laboratory_id);
      const relationships: any[] = [];
      if (lab) relationships.push({ id: `${rest.id}-${lab.id}`, target: lab });
      return { ...rest, relationships };
    }

    if ("equipment" in result) {
      const { institute_id, organisation_id, project_ids, ...rest } = result;
      const inst = institutes.find((i) => i.id === institute_id);
      const org = organisations.find((o) => o.id === organisation_id);
      const projs = projects.filter((pr) => project_ids.includes(pr.id));
      const relationships: any[] = [];
      if (inst)
        relationships.push({ id: `${rest.id}-${inst.id}`, target: inst });
      if (org) relationships.push({ id: `${rest.id}-${org.id}`, target: org });
      if (projs.length > 0)
        relationships.push(
          ...projs.map((pr) => ({
            id: `${rest.id}-${pr.id}`,
            target: pr,
          }))
        );
      return { ...rest, relationships };
    }

    if ("started_date" in result) {
      const { laboratory_id, organisation_id, ...rest } = result;
      const lab = laboratories.find((l) => l.id === laboratory_id);
      const org = organisations.find((o) => o.id === organisation_id);
      const relationships: any[] = [];
      if (lab) relationships.push({ id: `${rest.id}-${lab.id}`, target: lab });
      if (org) relationships.push({ id: `${rest.id}-${org.id}`, target: org });
      return { ...rest, relationships };
    }

    const { laboratory_id, project_ids, ...rest } = result;
    const lab = laboratories.find((l) => l.id === laboratory_id);
    const projs = projects.filter((pr) => project_ids.includes(pr.id));
    const relationships: any[] = [];
    if (lab) relationships.push({ id: `${rest.id}-${lab.id}`, target: lab });
    if (projs.length > 0)
      relationships.push(
        ...projs.map((pr) => ({
          id: `${rest.id}-${pr.id}`,
          target: pr,
        }))
      );
    return { ...rest, relationships };
  });

  return results;
};
