/* eslint-env node */

import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY,
)
const seedProjects = async count => {
  const projects = []
  for (let i = 0; i < count; i++) {
    const name = faker.lorem.words(3)
    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: [faker.helpers.arrayElement([1, 2, 3])],
    })
  }
  await supabase.from('projects').insert(projects)
}
await seedProjects(10)