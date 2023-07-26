import { g, auth, config } from '@grafbase/sdk'

// @ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.relation(() => project).list().optional(),
}).auth((rules) => rules.public().read())

// @ts-ignore
const project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  githubUrl: g.url(),
  liveSiteUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
}).auth((rules) => {
  rules.public().read(),
    rules.private().create().delete().update()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  // secret: g.env('NEXTAUTH_SECRET')
  secret: g.env('ZlYXY+9c2pE3yTMevtT2zVknfXveHTgug6FYifs7M/k=')
})

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  }
})
