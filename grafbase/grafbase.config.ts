import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name:g.string().length({min:2, max: 20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl: g.url().optional(),
  linkedlnUrl:g.url().optional(),
  projects:g.relation(() => project).list().optional(),
})

const project = g.model('Project', {
  title:g.string().length({min: 3}),
  description: g.string(),
  image:g.url(),
  githubUrl:g.url(),
  liveSiteUrl:g.url(),
  category: g.string().search(),
  createdBy:g.relation(() => User),
})

export default config({
  schema: g
})
