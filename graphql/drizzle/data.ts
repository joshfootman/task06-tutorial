export const institutions: Institution[] = [
  {
    name: 'University of Bristol',
    city: 'Bristol',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Edinburgh',
    city: 'Edinburgh',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Cambridge',
    city: 'Cambridge',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Leeds',
    city: 'Leeds',
    type: 'INSTITUTION',
  },
  {
    name: "Queen's University Belfast",
    city: 'Belfast',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Nottingham',
    city: 'Nottingham',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Newcastle',
    city: 'Newcastle upon Tyne',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Glasgow',
    city: 'Glasgow',
    type: 'INSTITUTION',
  },
  {
    name: 'University of Leicester',
    city: 'Leicester',
    type: 'INSTITUTION',
  },
]

export type Institution = {
  name: string
  city: string
  type: 'INSTITUTION'
}

export type Project = {
  name: string
  description: string
  startedDate: string
  finishedDate: string | null
  goal: string
  type: 'PROJECT'
  department: 'Biological Sciences' | 'Chemistry' | 'Physics & Astronomy'
}

export type Laboratory = {
  name: string
  description: string
  room: string
  equipment: string[]
  physicalLocation: { latitude: number; longitude: number }[]
  type: 'LABORATORY'
  department: 'Biological Sciences' | 'Chemistry' | 'Physics & Astronomy'
}

export type Researcher = {
  name: string
  expertise: string
  position: string
  contactEmail: string
  type: 'RESEARCHER'
  department: 'Biological Sciences' | 'Chemistry' | 'Physics & Astronomy'
}

export type Relationship = {
  source: number
  target: number
  type: string
}

export type Department = {
  projects: Array<Project>
  laboratories: Array<Laboratory>
  researchers: Array<Researcher>
  relationships: Array<Relationship>
}

export const biology: Department = {
  projects: [
    {
      name: 'Investigating the Role of Microbiota in Inflammatory Bowel Disease',
      description:
        'A research project focused on characterizing the gut microbiome composition and its impact on the pathogenesis and progression of inflammatory bowel disease (IBD). This project aims to identify key microbial signatures and potential therapeutic targets.',
      startedDate: '2023-09-15',
      finishedDate: null,
      goal: 'To elucidate the specific roles of different microbial species and their interactions in the development and severity of IBD.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Microbiome Profiling in IBD Patients',
      description:
        'Sub-project focused on the detailed characterization of the gut microbial communities in individuals with different subtypes and stages of IBD using advanced sequencing techniques.',
      startedDate: '2023-10-01',
      finishedDate: null,
      goal: 'To identify specific microbial taxa and their relative abundance associated with IBD.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Functional Analysis of Key Microbial Species in IBD',
      description:
        'Sub-project investigating the metabolic pathways and functional roles of specific bacteria identified as potentially important in IBD pathogenesis through in vitro and in vivo studies.',
      startedDate: '2024-01-15',
      finishedDate: null,
      goal: 'To determine the mechanisms by which specific gut microbes influence inflammation and disease progression in IBD.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'CRISPR-Cas9 Gene Editing for Targeted Cancer Therapy',
      description:
        'This project explores the application of CRISPR-Cas9 technology for precise gene editing in cancer cells. The goal is to develop novel therapeutic strategies by targeting oncogenes and restoring tumor suppressor gene function.',
      startedDate: '2022-11-01',
      finishedDate: '2026-05-30',
      goal: 'To develop and validate CRISPR-Cas9 based gene editing tools for specific cancer therapies with reduced off-target effects.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Target Identification and Validation in Specific Cancer Types',
      description:
        'Sub-project focused on identifying and validating specific oncogenes or tumor suppressor genes as potential therapeutic targets for CRISPR-Cas9 editing in selected cancer models (e.g., lung cancer, leukemia).',
      startedDate: '2022-12-01',
      finishedDate: null,
      goal: 'To pinpoint key genetic targets for CRISPR-based cancer therapy in specific cancer contexts.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Optimization of CRISPR-Cas9 Delivery Systems',
      description:
        'Sub-project aimed at developing and optimizing efficient and safe delivery methods for CRISPR-Cas9 components into cancer cells, including viral and non-viral delivery vectors.',
      startedDate: '2023-05-01',
      finishedDate: null,
      goal: 'To enhance the precision and efficacy of CRISPR-Cas9 gene editing in cancer cells while minimizing off-target effects.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Understanding the Molecular Mechanisms of Neurodegenerative Diseases',
      description:
        "A long-term research initiative investigating the underlying molecular pathways involved in the development and progression of neurodegenerative diseases such as Alzheimer's and Parkinson's. The project employs various molecular biology and neuroscience techniques.",
      startedDate: '2020-06-01',
      finishedDate: null,
      goal: 'To identify key protein misfolding events, cellular dysfunctions, and genetic factors contributing to neurodegeneration.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: "Investigating Amyloid-beta and Tau Protein Dynamics in Alzheimer's Disease",
      description:
        "Sub-project focusing on the formation, aggregation, and clearance mechanisms of amyloid-beta plaques and tau tangles, the hallmark pathological features of Alzheimer's disease.",
      startedDate: '2020-07-01',
      finishedDate: null,
      goal: "To understand the molecular events leading to amyloid and tau pathology in Alzheimer's disease.",
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: "Studying Alpha-synuclein Aggregation and Propagation in Parkinson's Disease",
      description:
        "Sub-project examining the misfolding and aggregation of alpha-synuclein protein and its cell-to-cell transmission in the context of Parkinson's disease pathogenesis.",
      startedDate: '2021-02-15',
      finishedDate: null,
      goal: "To elucidate the mechanisms of alpha-synuclein pathology and its role in neuronal dysfunction in Parkinson's disease.",
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Developing Novel Antivirals Against Emerging Viral Pathogens',
      description:
        'This project focuses on the discovery and development of new antiviral drugs to combat emerging viral threats. It involves high-throughput screening of compound libraries and the study of viral replication mechanisms.',
      startedDate: '2024-03-01',
      finishedDate: null,
      goal: 'To identify and characterize novel antiviral compounds with broad-spectrum activity against emerging and re-emerging viral pathogens.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'High-Throughput Screening of Antiviral Compound Libraries',
      description:
        'Sub-project involving the automated screening of large chemical compound libraries to identify molecules that inhibit the replication of target emerging viruses in cell culture.',
      startedDate: '2024-04-01',
      finishedDate: null,
      goal: 'To identify potential lead compounds with antiviral activity against emerging viral pathogens.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Characterization of Viral Replication Mechanisms',
      description:
        'Sub-project focused on detailed investigation of the molecular processes involved in the replication cycle of specific emerging viruses to identify potential drug targets.',
      startedDate: '2024-07-01',
      finishedDate: null,
      goal: 'To understand the vulnerabilities in viral replication that can be exploited for antiviral drug development.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'The Impact of Environmental Pollutants on Aquatic Ecosystems',
      description:
        'A research project investigating the effects of various environmental pollutants (e.g., heavy metals, microplastics) on the health and biodiversity of freshwater ecosystems. This includes field studies and laboratory experiments.',
      startedDate: '2021-07-10',
      finishedDate: '2025-12-15',
      goal: 'To assess the ecological impact of specific pollutants on aquatic organisms and develop strategies for mitigating their effects.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Analysis of Heavy Metal Accumulation in Aquatic Organisms',
      description:
        'Sub-project focused on measuring the concentration and distribution of heavy metals in different tissues of key aquatic species collected from polluted and unpolluted sites.',
      startedDate: '2021-08-01',
      finishedDate: null,
      goal: 'To determine the extent of heavy metal contamination and bioaccumulation in aquatic food webs.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Effects of Microplastic Ingestion on Fish Physiology',
      description:
        'Sub-project investigating the physiological impacts of microplastic ingestion on freshwater fish, including effects on digestion, growth, and behavior under controlled laboratory conditions.',
      startedDate: '2022-03-01',
      finishedDate: null,
      goal: 'To understand the potential harm caused by microplastic pollution to aquatic fauna.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Investigating Plant Responses to Climate Change-Induced Stress',
      description:
        'This project examines how different plant species respond to environmental stresses associated with climate change, such as drought and heat waves. The research includes physiological and genetic analyses.',
      startedDate: '2023-01-15',
      finishedDate: null,
      goal: 'To understand the mechanisms of plant stress tolerance and identify potential strategies for developing climate-resilient crops.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Physiological Responses of Plants to Drought Stress',
      description:
        'Sub-project focusing on measuring physiological parameters (e.g., water potential, photosynthetic rate, stomatal conductance) in different plant species under varying levels of drought stress.',
      startedDate: '2023-02-01',
      finishedDate: null,
      goal: 'To characterize the physiological mechanisms by which plants cope with water scarcity.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
    {
      name: 'Genetic Analysis of Heat Stress Tolerance in Plants',
      description:
        'Sub-project investigating the genetic basis of heat stress tolerance in selected plant species using molecular markers and gene expression analysis.',
      startedDate: '2023-06-01',
      finishedDate: null,
      goal: 'To identify genes and genetic pathways associated with heat tolerance in plants.',
      type: 'PROJECT',
      department: 'Biological Sciences',
    },
  ],
  laboratories: [
    {
      name: 'Microbiome Analysis Laboratory',
      description:
        'Equipped for high-throughput DNA sequencing, microbial culturing, and bioinformatics analysis to study the composition and function of microbial communities.',
      room: 'Building A, Room 205',
      equipment: [
        'Next-generation sequencer (Illumina)',
        'Anaerobic chambers',
        'Real-time PCR system',
        'Bioinformatics workstation',
      ],
      physicalLocation: [{ latitude: 53.4808, longitude: -2.2426 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Gene Editing and Cell Engineering Facility',
      description:
        'A specialized lab for performing CRISPR-Cas9 gene editing, cell culture, and developing viral vectors for gene delivery.',
      room: 'Building B, Room 312',
      equipment: [
        'Flow cytometer',
        'Confocal microscope',
        'Cell culture incubators',
        'Electroporation system',
        'CRISPR-Cas9 delivery systems',
      ],
      physicalLocation: [{ latitude: 52.4064, longitude: -1.5076 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Neurobiology and Molecular Pathology Lab',
      description:
        'A laboratory focused on studying the molecular mechanisms of neurodegenerative diseases, with equipment for protein analysis, histology, and cell imaging.',
      room: 'Building C, Room 110',
      equipment: [
        'Western blot system',
        'Immunohistochemistry equipment',
        'Microplate reader',
        'Cell culture system',
        'High-resolution microscope',
      ],
      physicalLocation: [{ latitude: 55.9532, longitude: -3.1893 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Virology and Antiviral Discovery Lab',
      description:
        'A facility for culturing and studying various viruses, performing antiviral drug screening assays, and analyzing viral replication.',
      room: 'Building D, Room 221',
      equipment: [
        'Biosafety level 3 (BSL-3) containment',
        'High-throughput screening system',
        'Viral plaque assay equipment',
        'PCR system',
        'Fluorescence microscope',
      ],
      physicalLocation: [{ latitude: 51.4545, longitude: -2.5879 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Aquatic Toxicology Laboratory',
      description:
        'A lab dedicated to studying the effects of pollutants on aquatic organisms, with facilities for maintaining aquatic systems, analyzing water samples, and conducting toxicity tests.',
      room: 'Building E, Room 102',
      equipment: [
        'Aquatic exposure systems',
        'Water quality analyzers',
        'Atomic absorption spectrometer',
        'Gas chromatograph',
        'Microscopy equipment',
      ],
      physicalLocation: [{ latitude: 54.5973, longitude: -5.9301 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Plant Stress Physiology Laboratory',
      description:
        'A laboratory focused on investigating plant responses to environmental stresses, with equipment for measuring physiological parameters and analyzing gene expression.',
      room: 'Building F, Room 301',
      equipment: [
        'Photosynthesis measurement system',
        'Plant growth chambers',
        'Quantitative PCR system',
        'Gel electrophoresis equipment',
        'Spectrophotometer',
      ],
      physicalLocation: [{ latitude: 52.2053, longitude: 0.1218 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Genomics Core Facility',
      description:
        'Provides high-throughput sequencing, genotyping, and other genomic services.',
      room: 'Building G, Room 101',
      equipment: [
        'Next-generation sequencers (Illumina, PacBio)',
        'Microarray system',
        'Robotic liquid handling',
      ],
      physicalLocation: [{ latitude: 53.8008, longitude: -1.549 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Advanced Imaging Center',
      description:
        'Offers advanced microscopy and imaging technologies, including confocal, electron, and light-sheet microscopy.',
      room: 'Building H, Room 202',
      equipment: [
        'Confocal microscopes',
        'Electron microscopes',
        'Light-sheet microscope',
        'Image analysis workstations',
      ],
      physicalLocation: [{ latitude: 54.9779, longitude: -1.613 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Cell Culture Core Facility',
      description:
        'Provides services and resources for cell culture, including media preparation, cell line authentication, and specialized culture systems.',
      room: 'Building A, Room 008',
      equipment: [
        'Cell culture incubators',
        'Biosafety cabinets',
        'Cell counters',
        'Media preparation equipment',
      ],
      physicalLocation: [{ latitude: 52.9548, longitude: -1.1581 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Protein Analysis Facility',
      description:
        'Provides services for protein characterization, including mass spectrometry, protein sequencing, and protein interaction analysis.',
      room: 'Building C, Room 009',
      equipment: [
        'Mass spectrometers',
        'Protein sequencers',
        'HPLC systems',
        '2D electrophoresis system',
      ],
      physicalLocation: [{ latitude: 55.8642, longitude: -4.2518 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Infectious Disease Research Center',
      description:
        'A facility dedicated to the study of infectious diseases, with resources for culturing pathogens, performing in vivo studies, and developing diagnostic assays.',
      room: 'Building D, Room 123',
      equipment: [
        'BSL-3 and BSL-2+ laboratories',
        'Animal housing',
        'Flow cytometers',
        'Real-time PCR systems',
      ],
      physicalLocation: [{ latitude: 52.3555, longitude: -1.1743 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Environmental Analysis Facility',
      description:
        'Provides comprehensive analytical services for environmental samples, including water, soil, and air quality analysis.',
      room: 'Building E, Room 201',
      equipment: ['ICP-MS', 'GC-MS', 'HPLC', 'Ion chromatography systems'],
      physicalLocation: [{ latitude: 53.7963, longitude: -1.5481 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
    {
      name: 'Controlled Environment Facility',
      description:
        'Provides controlled environments for plant growth and experimentation, including growth chambers and greenhouses.',
      room: 'Building F, Room 007',
      equipment: [
        'Growth Chambers',
        'Greenhouses',
        'Hydroponics systems',
        'Environmental sensors',
      ],
      physicalLocation: [{ latitude: 52.0513, longitude: 1.1581 }],
      type: 'LABORATORY',
      department: 'Biological Sciences',
    },
  ],
  researchers: [
    {
      name: 'Dr. Eleanor Vance',
      expertise: 'Microbial Genomics',
      position: 'Principal Investigator',
      contactEmail: 'e.vance@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Prof. James Carter',
      expertise: 'Gene Editing Technology',
      position: 'Professor',
      contactEmail: 'j.carter@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Sarah Meyer',
      expertise: 'Neurodegenerative Disease',
      position: 'Senior Researcher',
      contactEmail: 's.meyer@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. David Chen',
      expertise: 'Virology',
      position: 'Research Fellow',
      contactEmail: 'd.chen@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Anya Petrova',
      expertise: 'Aquatic Toxicology',
      position: 'Lecturer',
      contactEmail: 'a.petrova@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Prof. Robert Green',
      expertise: 'Plant Physiology',
      position: 'Professor',
      contactEmail: 'r.green@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Lena Hoffman',
      expertise: 'Genomics',
      position: 'Facility Manager',
      contactEmail: 'l.hoffman@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Marcus Reed',
      expertise: 'Microscopy',
      position: 'Facility Director',
      contactEmail: 'm.reed@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Emily White',
      expertise: 'Cell Culture',
      position: 'Core Facility Manager',
      contactEmail: 'e.white@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Prof. Simon Baker',
      expertise: 'Protein Chemistry',
      position: 'Facility Director',
      contactEmail: 's.baker@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Maria Rodriguez',
      expertise: 'Infectious Diseases',
      position: 'Research Group Leader',
      contactEmail: 'm.rodriguez@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Peter Hall',
      expertise: 'Environmental Chemistry',
      position: 'Senior Analyst',
      contactEmail: 'p.hall@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
    {
      name: 'Dr. Susan Young',
      expertise: 'Plant Biology',
      position: 'Facility Manager',
      contactEmail: 's.young@example.ac.uk',
      type: 'RESEARCHER',
      department: 'Biological Sciences',
    },
  ],
  relationships: [
    {
      source: 10,
      target: 11,
      type: 'PERFORMED_BY',
    },
    {
      source: 10,
      target: 12,
      type: 'PERFORMED_BY',
    },
    {
      source: 13,
      target: 14,
      type: 'PERFORMED_BY',
    },
    {
      source: 13,
      target: 15,
      type: 'PERFORMED_BY',
    },
    {
      source: 16,
      target: 17,
      type: 'PERFORMED_BY',
    },
    {
      source: 16,
      target: 18,
      type: 'PERFORMED_BY',
    },
    {
      source: 19,
      target: 20,
      type: 'PERFORMED_BY',
    },
    {
      source: 19,
      target: 21,
      type: 'PERFORMED_BY',
    },
    {
      source: 22,
      target: 23,
      type: 'PERFORMED_BY',
    },
    {
      source: 22,
      target: 24,
      type: 'PERFORMED_BY',
    },
    {
      source: 25,
      target: 26,
      type: 'PERFORMED_BY',
    },
    {
      source: 25,
      target: 27,
      type: 'PERFORMED_BY',
    },
    {
      source: 11,
      target: 28,
      type: 'PERFORMED_BY',
    },
    {
      source: 12,
      target: 28,
      type: 'PERFORMED_BY',
    },
    {
      source: 14,
      target: 29,
      type: 'PERFORMED_BY',
    },
    {
      source: 15,
      target: 29,
      type: 'PERFORMED_BY',
    },
    {
      source: 17,
      target: 30,
      type: 'PERFORMED_BY',
    },
    {
      source: 18,
      target: 30,
      type: 'PERFORMED_BY',
    },
    {
      source: 20,
      target: 31,
      type: 'PERFORMED_BY',
    },
    {
      source: 21,
      target: 31,
      type: 'PERFORMED_BY',
    },
    {
      source: 23,
      target: 32,
      type: 'PERFORMED_BY',
    },
    {
      source: 24,
      target: 32,
      type: 'PERFORMED_BY',
    },
    {
      source: 26,
      target: 33,
      type: 'PERFORMED_BY',
    },
    {
      source: 27,
      target: 33,
      type: 'PERFORMED_BY',
    },
    {
      source: 28,
      target: 34,
      type: 'DEPENDS_ON',
    },
    {
      source: 28,
      target: 34,
      type: 'REDUNDANCY_FROM',
    },
    {
      source: 29,
      target: 35,
      type: 'DEPENDS_ON',
    },
    {
      source: 29,
      target: 36,
      type: 'DEPENDS_ON',
    },
    {
      source: 29,
      target: 36,
      type: 'REDUNDANCY_FROM',
    },
    {
      source: 30,
      target: 35,
      type: 'DEPENDS_ON',
    },
    {
      source: 30,
      target: 37,
      type: 'DEPENDS_ON',
    },
    {
      source: 30,
      target: 37,
      type: 'REDUNDANCY_FROM',
    },
    {
      source: 31,
      target: 34,
      type: 'DEPENDS_ON',
    },
    {
      source: 31,
      target: 38,
      type: 'DEPENDS_ON',
    },
    {
      source: 31,
      target: 38,
      type: 'REDUNDANCY_FROM',
    },
    {
      source: 32,
      target: 39,
      type: 'DEPENDS_ON',
    },
    {
      source: 33,
      target: 34,
      type: 'DEPENDS_ON',
    },
    {
      source: 33,
      target: 40,
      type: 'DEPENDS_ON',
    },
    {
      source: 33,
      target: 34,
      type: 'REDUNDANCY_FROM',
    },
    {
      source: 41,
      target: 28,
      type: 'OWNED_BY',
    },
    {
      source: 47,
      target: 34,
      type: 'OPERATED_BY',
    },
    {
      source: 42,
      target: 29,
      type: 'OWNED_BY',
    },
    {
      source: 48,
      target: 35,
      type: 'OPERATED_BY',
    },
    {
      source: 49,
      target: 36,
      type: 'MANAGED_BY',
    },
    {
      source: 43,
      target: 30,
      type: 'OWNED_BY',
    },
    {
      source: 50,
      target: 37,
      type: 'DIRECTED_BY',
    },
    {
      source: 44,
      target: 31,
      type: 'OWNED_BY',
    },
    {
      source: 51,
      target: 38,
      type: 'SUPPLIED_BY',
    },
    {
      source: 45,
      target: 32,
      type: 'OWNED_BY',
    },
    {
      source: 52,
      target: 39,
      type: 'SUPPLIED_BY',
    },
    {
      source: 46,
      target: 33,
      type: 'OWNED_BY',
    },
    {
      source: 53,
      target: 40,
      type: 'MANAGED_BY',
    },
    {
      source: 28,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 31,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 41,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 44,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 29,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 30,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 42,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 43,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 33,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 40,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 46,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 53,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 34,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 39,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 47,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 52,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 32,
      target: 5,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 45,
      target: 5,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 36,
      target: 6,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 49,
      target: 6,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 35,
      target: 7,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 48,
      target: 7,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 37,
      target: 8,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 50,
      target: 8,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 38,
      target: 9,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 51,
      target: 9,
      type: 'AFFILIATED_WITH',
    },
  ],
}

export const chemistry: Department = {
  projects: [
    {
      name: 'Development of Novel Catalysts for Sustainable Chemical Synthesis',
      description:
        'A research project focused on designing and synthesizing new catalytic materials to enable more efficient and environmentally friendly chemical reactions, reducing waste and energy consumption.',
      startedDate: '2023-11-01',
      finishedDate: null,
      goal: 'To discover and characterize highly active and selective catalysts for key industrial chemical transformations.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Synthesis and Characterization of Heterogeneous Catalysts',
      description:
        'Sub-project focused on the synthesis and detailed characterization (e.g., surface area, pore size, composition) of solid catalysts for various chemical reactions.',
      startedDate: '2023-12-01',
      finishedDate: null,
      goal: 'To create and understand the properties of solid catalysts relevant to sustainable synthesis.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Synthesis and Characterization of Advanced Functional Polymers',
      description:
        'This project aims to create novel polymeric materials with tailored properties for specific applications, such as drug delivery, sensing, and energy storage.',
      startedDate: '2022-09-15',
      finishedDate: '2026-03-31',
      goal: 'To synthesize and fully characterize new functional polymers with precisely controlled structures and properties.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Understanding Reaction Mechanisms at the Molecular Level',
      description:
        'A project employing advanced spectroscopic and computational techniques to elucidate the detailed step-by-step pathways of chemical reactions, providing fundamental insights into reactivity and selectivity.',
      startedDate: '2021-05-01',
      finishedDate: null,
      goal: 'To gain a comprehensive understanding of the elementary steps and transition states involved in important chemical transformations.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Spectroscopic Investigation of Reaction Intermediates',
      description:
        'Sub-project utilizing techniques like NMR, IR, and UV-Vis spectroscopy to identify and characterize short-lived intermediate species formed during chemical reactions.',
      startedDate: '2021-06-01',
      finishedDate: null,
      goal: 'To directly observe and understand the nature of transient species in chemical reactions.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Development of New Analytical Methods for Environmental Monitoring',
      description:
        'This project focuses on creating sensitive and selective analytical techniques for the detection and quantification of pollutants and contaminants in various environmental matrices (water, air, soil).',
      startedDate: '2024-01-15',
      finishedDate: null,
      goal: 'To develop robust and field-deployable analytical tools for effective environmental monitoring and assessment.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Exploring the Chemistry of Natural Products for Drug Discovery',
      description:
        'A research initiative investigating the structures and biological activities of compounds derived from natural sources (plants, microorganisms) with the aim of identifying potential lead molecules for new pharmaceuticals.',
      startedDate: '2022-07-01',
      finishedDate: null,
      goal: 'To isolate, characterize, and evaluate the bioactivity of novel natural products with therapeutic potential.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Isolation and Structural Elucidation of Natural Products',
      description:
        'Sub-project focused on the extraction, purification, and structural determination of novel chemical compounds from natural sources using techniques like chromatography and NMR spectroscopy.',
      startedDate: '2022-08-01',
      finishedDate: null,
      goal: 'To obtain and identify the chemical structures of bioactive compounds from nature.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Biological Activity Screening of Natural Product Extracts and Compounds',
      description:
        'Sub-project involving the testing of crude extracts and isolated compounds against various biological targets to identify potential pharmacological activities.',
      startedDate: '2023-01-01',
      finishedDate: null,
      goal: 'To identify natural products with promising therapeutic potential.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Computational Design of Novel Materials with Desired Properties',
      description:
        'This project utilizes computational chemistry methods (e.g., molecular dynamics, density functional theory) to predict and design new materials with specific electronic, optical, or mechanical properties.',
      startedDate: '2023-03-01',
      finishedDate: '2025-12-31',
      goal: 'To computationally identify promising material candidates for various technological applications before experimental synthesis.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Quantum Chemical Calculations for Material Property Prediction',
      description:
        'Sub-project employing advanced quantum mechanical calculations to predict the electronic, optical, and magnetic properties of potential new materials.',
      startedDate: '2023-04-01',
      finishedDate: null,
      goal: 'To theoretically determine the fundamental properties of designed materials.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Molecular Dynamics Simulations of Material Behavior',
      description:
        'Sub-project utilizing molecular dynamics simulations to model the behavior of materials at the atomic level under different conditions (e.g., temperature, pressure) to predict their macroscopic properties.',
      startedDate: '2023-07-01',
      finishedDate: null,
      goal: 'To simulate and understand the dynamic behavior and stability of designed materials.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
    {
      name: 'Development of Novel Electrochemical Sensors',
      description:
        'A project focused on the design and fabrication of new electrochemical sensors for the detection of specific analytes in various applications.',
      startedDate: '2024-05-01',
      finishedDate: null,
      goal: 'To create highly sensitive and selective electrochemical sensing devices.',
      type: 'PROJECT',
      department: 'Chemistry',
    },
  ],
  laboratories: [
    {
      name: 'Catalysis Characterization Laboratory',
      description:
        'Specializes in the characterization of heterogeneous catalysts.',
      room: 'Building C, Room 012',
      equipment: [
        'Gas Chromatograph',
        'Mass Spectrometer',
        'Gas Chromatograph-Mass Spectrometer',
      ],
      physicalLocation: [{ longitude: -0.1278, latitude: 51.5074 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Polymer Synthesis and Analysis Laboratory',
      description:
        'Focuses on the synthesis and characterization of functional polymers.',
      room: 'Building C, Room 105',
      equipment: [
        'NMR Spectrometer',
        'GPC System',
        'Polymerization Reactors',
        'Differential Scanning Calorimeter (DSC)',
      ],
      physicalLocation: [{ longitude: -1.4701, latitude: 52.4064 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Molecular Spectroscopy Laboratory',
      description:
        'Dedicated to the study of reaction intermediates using spectroscopic methods.',
      room: 'Building W, Room 201',
      equipment: [
        'Advanced NMR Spectrometer',
        'FTIR Spectrometer',
        'UV-Vis Spectrometer',
        'Laser Spectroscopy System',
      ],
      physicalLocation: [{ longitude: -3.1883, latitude: 55.9532 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Environmental Analytical Chemistry Laboratory',
      description:
        'Develops and applies analytical methods for environmental monitoring.',
      room: 'Building E, Room 302',
      equipment: ['GC-MS', 'HPLC', 'ICP-MS', 'Electrochemical Workstation'],
      physicalLocation: [{ longitude: -2.5879, latitude: 51.4545 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Natural Products Isolation and Characterization Laboratory',
      description:
        'Specializes in the isolation, structural elucidation, and bioactivity screening of natural products.',
      room: 'Building H, Room 112',
      equipment: [
        'LC-MS',
        'Preparative HPLC',
        'High-Resolution Mass Spectrometer',
        'Bioassay Equipment',
      ],
      physicalLocation: [{ longitude: -1.1581, latitude: 52.9548 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Computational Materials Science Laboratory',
      description:
        'Focuses on computational design and simulation of novel materials.',
      room: 'Building C, Room 404',
      equipment: [
        'High-Performance Computing Cluster',
        'Quantum Chemistry Software (e.g., Gaussian, VASP)',
        'Molecular Dynamics Software (e.g., LAMMPS, AMBER)',
        'Visualization and Analysis Software',
      ],
      physicalLocation: [{ longitude: -0.08, latitude: 51.53 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Electrochemical Sensor Development Laboratory',
      description: 'Designs and fabricates new electrochemical sensors.',
      room: 'Building C, Room 203',
      equipment: [
        'Electrochemical Workstations',
        'Screen Printing Equipment',
        'Microfabrication Facilities',
        'Materials Characterization Equipment',
      ],
      physicalLocation: [{ longitude: -0.1, latitude: 51.51 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Materials Characterization Facility',
      description: 'Provides advanced materials characterization services.',
      room: 'Building M, Room 101',
      equipment: [
        'X-ray Diffraction',
        'Scanning Electron Microscopy',
        'Atomic Force Microscopy',
        'Surface Area Analyzer',
      ],
      physicalLocation: [{ longitude: -1.549, latitude: 53.8008 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Analytical Chemistry Facility',
      description: 'Offers comprehensive analytical chemistry services.',
      room: 'Building A, Room 202',
      equipment: ['NMR Spectrometer', 'GC-MS', 'HPLC', 'ICP-MS'],
      physicalLocation: [{ longitude: -2.9915, latitude: 53.4084 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
    {
      name: 'Electronics Fabrication Facility',
      description:
        'Specializes in the design and fabrication of electronic components and devices.',
      room: 'Building E, Room 303',
      equipment: [
        'PCB Printer',
        'Pick and Place Machine',
        'Reflow Oven',
        'Soldering Station',
      ],
      physicalLocation: [{ longitude: -0.09, latitude: 51.5 }],
      type: 'LABORATORY',
      department: 'Chemistry',
    },
  ],
  researchers: [
    {
      name: 'Dr. Teobaldo Melitta',
      expertise: 'Heterogeneous Catalysis',
      position: 'Lab Manager',
      contactEmail: 'teobaldo.melitta@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Hadad Margita',
      expertise: 'Polymer Chemistry',
      position: 'Senior Researcher',
      contactEmail: 'hadad.margita@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Lena Young',
      expertise: 'Spectroscopy',
      position: 'Lab Technician',
      contactEmail: 'lena.young@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Owen Hughes',
      expertise: 'Environmental Chemistry',
      position: 'Research Scientist',
      contactEmail: 'owen.hughes@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Freya Jenkins',
      expertise: 'Natural Products Chemistry',
      position: 'Principal Investigator',
      contactEmail: 'freya.jenkins@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Noah Carter',
      expertise: 'Computational Chemistry',
      position: 'Senior Researcher',
      contactEmail: 'noah.carter@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Sofia Perez',
      expertise: 'Electrochemistry',
      position: 'Research Fellow',
      contactEmail: 'sofia.perez@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Daniel Harris',
      expertise: 'Materials Science',
      position: 'Facility Manager',
      contactEmail: 'daniel.harris@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Chloe Green',
      expertise: 'Analytical Chemistry',
      position: 'Facility Manager',
      contactEmail: 'chloe.green@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
    {
      name: 'Dr. Ethan Ward',
      expertise: 'Electronics Engineering',
      position: 'Facility Manager',
      contactEmail: 'ethan.ward@example.com',
      type: 'RESEARCHER',
      department: 'Chemistry',
    },
  ],
  relationships: [
    {
      source: 132,
      target: 133,
      type: 'PERFORMED_BY',
    },
    {
      source: 132,
      target: 134,
      type: 'PERFORMED_BY',
    },
    {
      source: 135,
      target: 136,
      type: 'PERFORMED_BY',
    },
    {
      source: 135,
      target: 137,
      type: 'PERFORMED_BY',
    },
    {
      source: 138,
      target: 139,
      type: 'PERFORMED_BY',
    },
    {
      source: 138,
      target: 140,
      type: 'PERFORMED_BY',
    },
    {
      source: 141,
      target: 142,
      type: 'PERFORMED_BY',
    },
    {
      source: 141,
      target: 143,
      type: 'PERFORMED_BY',
    },
    {
      source: 133,
      target: 145,
      type: 'PERFORMED_BY',
    },
    {
      source: 134,
      target: 146,
      type: 'PERFORMED_BY',
    },
    {
      source: 136,
      target: 147,
      type: 'PERFORMED_BY',
    },
    {
      source: 137,
      target: 148,
      type: 'PERFORMED_BY',
    },
    {
      source: 139,
      target: 149,
      type: 'PERFORMED_BY',
    },
    {
      source: 140,
      target: 149,
      type: 'PERFORMED_BY',
    },
    {
      source: 142,
      target: 150,
      type: 'PERFORMED_BY',
    },
    {
      source: 143,
      target: 150,
      type: 'PERFORMED_BY',
    },
    {
      source: 144,
      target: 151,
      type: 'PERFORMED_BY',
    },
    {
      source: 145,
      target: 152,
      type: 'DEPENDS_ON',
    },
    {
      source: 146,
      target: 152,
      type: 'DEPENDS_ON',
    },
    {
      source: 147,
      target: 153,
      type: 'DEPENDS_ON',
    },
    {
      source: 148,
      target: 153,
      type: 'DEPENDS_ON',
    },
    {
      source: 151,
      target: 154,
      type: 'DEPENDS_ON',
    },
    {
      source: 145,
      target: 155,
      type: 'OWNED_BY',
    },
    {
      source: 146,
      target: 156,
      type: 'OWNED_BY',
    },
    {
      source: 147,
      target: 157,
      type: 'OPERATED_BY',
    },
    {
      source: 148,
      target: 158,
      type: 'OWNED_BY',
    },
    {
      source: 149,
      target: 159,
      type: 'OWNED_BY',
    },
    {
      source: 150,
      target: 160,
      type: 'OWNED_BY',
    },
    {
      source: 151,
      target: 161,
      type: 'OWNED_BY',
    },
    {
      source: 152,
      target: 162,
      type: 'SUPPLIED_BY',
    },
    {
      source: 153,
      target: 163,
      type: 'SUPPLIED_BY',
    },
    {
      source: 154,
      target: 164,
      type: 'SUPPLIED_BY',
    },
    {
      source: 145,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 146,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 147,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 148,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 149,
      target: 6,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 150,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 151,
      target: 7,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 152,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 153,
      target: 8,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 154,
      target: 5,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 155,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 156,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 157,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 158,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 159,
      target: 6,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 160,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 161,
      target: 7,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 162,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 163,
      target: 8,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 164,
      target: 5,
      type: 'AFFILIATED_WITH',
    },
  ],
}

export const physics: Department = {
  projects: [
    {
      name: 'Quantum Computing and Information Science',
      description:
        'A broad project exploring the theoretical and experimental aspects of quantum computing, quantum information processing, and related quantum phenomena.',
      startedDate: '2023-01-15',
      finishedDate: null,
      goal: 'To advance the development of quantum technologies and understand the fundamental principles of quantum information.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Quantum Hardware Development',
      description:
        'Sub-project focused on the design, fabrication, and characterization of physical systems for quantum computation, such as superconducting circuits, trapped ions, and photonic devices.',
      startedDate: '2023-03-01',
      finishedDate: null,
      goal: 'To build robust and scalable quantum hardware platforms.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Quantum Algorithm Design and Complexity',
      description:
        'Sub-project dedicated to the development of new quantum algorithms for solving complex computational problems and analyzing the computational complexity of quantum algorithms.',
      startedDate: '2023-04-01',
      finishedDate: null,
      goal: 'To create efficient quantum software and understand the limits and potential of quantum computation.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Quantum Error Correction and Fault Tolerance',
      description:
        'Sub-project investigating methods for protecting quantum information from noise and errors, and developing fault-tolerant quantum computing techniques.',
      startedDate: '2023-06-01',
      finishedDate: null,
      goal: 'To achieve reliable and scalable quantum computation in the presence of noise.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Astrophysics and Cosmology',
      description:
        'A project investigating the fundamental questions about the universe, including its origin, evolution, structure, and composition, using observational and theoretical approaches.',
      startedDate: '2022-09-01',
      finishedDate: null,
      goal: 'To understand the universe and its constituents, from the smallest particles to the largest cosmic structures.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Observational Cosmology',
      description:
        'Sub-project focused on acquiring and analyzing astronomical data from telescopes and other instruments to study the large-scale structure of the universe, the cosmic microwave background, and other cosmological phenomena.',
      startedDate: '2022-10-15',
      finishedDate: null,
      goal: 'To test cosmological models and constrain cosmological parameters through observations.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Theoretical Cosmology',
      description:
        'Sub-project dedicated to developing and refining theoretical models of the universe, including the study of dark matter, dark energy, and the early universe.',
      startedDate: '2023-02-01',
      finishedDate: null,
      goal: 'To provide a theoretical framework for understanding the fundamental processes governing the evolution of the universe.',
      type: 'PROJECT',
      department: 'Physics & Astronomy',
    },
  ],
  laboratories: [
    {
      name: 'Quantum Hardware Fabrication Laboratory',
      description:
        'Specializes in the design, fabrication, and characterization of quantum hardware.',
      room: 'Building P, Room 101',
      equipment: [
        'Cleanroom Facilities',
        'Electron Beam Lithography System',
        'Cryogenic Systems',
        'Microwave Measurement Equipment',
      ],
      physicalLocation: [{ longitude: -0.1278, latitude: 51.5074 }],
      type: 'LABORATORY',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Quantum Algorithm and Complexity Laboratory',
      description:
        'Focuses on the development and analysis of quantum algorithms.',
      room: 'Building P, Room 202',
      equipment: [
        'High-Performance Computing Cluster',
        'Quantum Circuit Simulation Software',
        'Complexity Analysis Tools',
      ],
      physicalLocation: [{ longitude: -1.4701, latitude: 52.4064 }],
      type: 'LABORATORY',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Quantum Error Correction Laboratory',
      description:
        'Dedicated to research on quantum error correction and fault-tolerant quantum computing.',
      room: 'Building P, Room 303',
      equipment: [
        'Quantum Noise Characterization Setup',
        'Entanglement Distribution System',
        'Fault-Tolerant Gate Implementation Testbed',
      ],
      physicalLocation: [{ longitude: -2.9915, latitude: 53.4084 }],
      type: 'LABORATORY',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Observational Cosmology Laboratory',
      description: 'Focuses on acquiring and analyzing astronomical data.',
      room: 'Building A, Room 101',
      equipment: [
        'Telescopes',
        'CCD Cameras',
        'Spectrographs',
        'Data Processing Cluster',
      ],
      physicalLocation: [{ longitude: -3.1883, latitude: 55.9532 }],
      type: 'LABORATORY',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Theoretical Cosmology Laboratory',
      description:
        'Dedicated to developing and refining theoretical models of the universe.',
      room: 'Building A, Room 202',
      equipment: [
        'Supercomputing Facilities',
        'Cosmological Simulation Software',
        'General Relativity Software',
      ],
      physicalLocation: [{ longitude: -0.08, latitude: 51.53 }],
      type: 'LABORATORY',
      department: 'Physics & Astronomy',
    },
  ],
  researchers: [
    {
      name: 'Dr. Alicia Thornton',
      expertise: 'Quantum Device Fabrication',
      position: 'Senior Research Scientist',
      contactEmail: 'alicia.thornton@example.com',
      type: 'RESEARCHER',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Dr. Ben Carter',
      expertise: 'Quantum Algorithm Design',
      position: 'Research Fellow',
      contactEmail: 'ben.carter@example.com',
      type: 'RESEARCHER',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Dr. Sarah Mitchell',
      expertise: 'Quantum Error Correction',
      position: 'Postdoctoral Researcher',
      contactEmail: 'sarah.mitchell@example.com',
      type: 'RESEARCHER',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Prof. John Davies',
      expertise: 'Observational Cosmology',
      position: 'Professor',
      contactEmail: 'john.davies@example.com',
      type: 'RESEARCHER',
      department: 'Physics & Astronomy',
    },
    {
      name: 'Dr. Emily Brown',
      expertise: 'Theoretical Cosmology',
      position: 'Senior Researcher',
      contactEmail: 'emily.brown@example.com',
      type: 'RESEARCHER',
      department: 'Physics & Astronomy',
    },
  ],
  relationships: [
    {
      source: 217,
      target: 218,
      type: 'PERFORMED_BY',
    },
    {
      source: 217,
      target: 219,
      type: 'PERFORMED_BY',
    },
    {
      source: 217,
      target: 220,
      type: 'PERFORMED_BY',
    },
    {
      source: 221,
      target: 222,
      type: 'PERFORMED_BY',
    },
    {
      source: 221,
      target: 223,
      type: 'PERFORMED_BY',
    },
    {
      source: 218,
      target: 224,
      type: 'PERFORMED_BY',
    },
    {
      source: 219,
      target: 225,
      type: 'PERFORMED_BY',
    },
    {
      source: 220,
      target: 226,
      type: 'PERFORMED_BY',
    },
    {
      source: 222,
      target: 227,
      type: 'PERFORMED_BY',
    },
    {
      source: 223,
      target: 228,
      type: 'PERFORMED_BY',
    },
    {
      source: 224,
      target: 229,
      type: 'OWNED_BY',
    },
    {
      source: 225,
      target: 230,
      type: 'OWNED_BY',
    },
    {
      source: 226,
      target: 231,
      type: 'OPERATED_BY',
    },
    {
      source: 227,
      target: 232,
      type: 'OWNED_BY',
    },
    {
      source: 228,
      target: 233,
      type: 'OWNED_BY',
    },
    {
      source: 224,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 225,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 226,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 227,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 228,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 229,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 230,
      target: 1,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 231,
      target: 4,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 232,
      target: 2,
      type: 'AFFILIATED_WITH',
    },
    {
      source: 233,
      target: 3,
      type: 'AFFILIATED_WITH',
    },
  ],
}
