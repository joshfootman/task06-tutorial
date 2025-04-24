import { sql } from 'drizzle-orm/sql'
import {
  blob,
  int,
  sqliteTable,
  text,
  unique,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'

export const idTable = sqliteTable(
  'id_table',
  {
    id: int().primaryKey({ autoIncrement: true }),
    table: text().notNull(),
  },
  (t) => [uniqueIndex(`id_idx`).on(t.id)]
)

export const projectsTable = sqliteTable(
  'projects_table',
  {
    id: int().notNull(),
    name: text().notNull(),
    description: text(),
    startedDate: text().notNull(),
    finishedDate: text(),
    goal: text().notNull(),
    type: text({ enum: ['PROJECT'] }).notNull(),
    department: text({
      enum: ['Biological Sciences', 'Chemistry', 'Physics & Astronomy'],
    }).notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
  },
  (t) => [
    uniqueIndex(`project_id_idx`).on(t.id),
    uniqueIndex(`project_name_idx`).on(t.name),
  ]
)

export const laboratoriesTable = sqliteTable(
  'laboratories_table',
  {
    id: int().notNull(),
    name: text().notNull(),
    description: text().notNull(),
    room: text().notNull(),
    equipment: blob({ mode: 'json' }).$type<string[]>().default([]),
    physicalLocation: blob({ mode: 'json' })
      .$type<{ latitude: number; longitude: number }[]>()
      .default([]),
    type: text({ enum: ['LABORATORY'] }).notNull(),
    department: text({
      enum: ['Biological Sciences', 'Chemistry', 'Physics & Astronomy'],
    }).notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
  },
  (t) => [
    uniqueIndex(`laboratory_id_idx`).on(t.id),
    uniqueIndex(`laboratory_name_idx`).on(t.name),
  ]
)

export const researchersTable = sqliteTable(
  'researchers_table',
  {
    id: int().notNull(),
    name: text().notNull(),
    expertise: text().notNull(),
    position: text().notNull(),
    contactEmail: text().notNull(),
    type: text({ enum: ['RESEARCHER'] }).notNull(),
    department: text({
      enum: ['Biological Sciences', 'Chemistry', 'Physics & Astronomy'],
    }).notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
  },
  (t) => [
    uniqueIndex(`researcher_id_idx`).on(t.id),
    uniqueIndex(`researcher_name_idx`).on(t.name),
  ]
)

export const institutionsTable = sqliteTable(
  'institutions_table',
  {
    id: int().notNull(),
    name: text().notNull(),
    city: text().notNull(),
    type: text({ enum: ['INSTITUTION'] }).notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
  },
  (t) => [
    uniqueIndex(`institution_id_idx`).on(t.id),
    uniqueIndex(`institution_name_idx`).on(t.name),
  ]
)

export const relationshipsTable = sqliteTable(
  'relationships_table',
  {
    id: int().notNull(),
    source: int().notNull(),
    target: int().notNull(),
    type: text({
      enum: [
        'PERFORMED_BY',
        'DEPENDS_ON',
        'REDUNDANCY_FROM',
        'OWNED_BY',
        'OPERATED_BY',
        'MANAGED_BY',
        'DIRECTED_BY',
        'SUPPLIED_BY',
        'AFFILIATED_WITH',
      ],
    }).notNull(),
    createdAt: text().default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: text().$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
  },
  (t) => [
    uniqueIndex(`relationship_id_idx`).on(t.id),
    unique('relationship_unique').on(t.source, t.type, t.target),
  ]
)
