import { ProjectForm } from "@/common.types";
import { createProjectMutation, createUserMutation, deleteProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production';

const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql'

const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'thisisjustanemptystring'

const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

const client = new GraphQLClient(apiUrl)

// Try varible<Record>
const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables)
  } catch (error) {
    throw error;
  }
}

// Calling graphql database
export const getUser = (email: string) => {
  client.setHeader('x-api-key', apiKey);
  return makeGraphQLRequest(getUserQuery, { email })
}


// calling graphql database
export const createUser = (name: string, email: string, avatarUrl: string) => {
  // Ensure there is an apikey
  client.setHeader('x-api-key', apiKey);
  const variables = {
    input: { name: name, email: email, avatarUrl: avatarUrl },
  };
  // You made the mistake of using { variables}
  return makeGraphQLRequest(createUserMutation, variables);
}

export const fetchToken = async () => {
  // `serverUrl targets out end point`
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`)
    return response.json();
  } catch (error) {
    throw error;
  }
}

//  Calling cloudinary database
// What is the difference between throw and return
export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: 'POST',
      body: JSON.stringify({ path: imagePath })
    })
    return response.json()
  } catch (error) {
    return error;
  }
}

export const createNewProject = async (form: ProjectForm, creatorId: string, token: string) => {
  const imageUrl = await uploadImage(form.image);
  client.setHeader("Authorization", `Bearer ${token}`)

  if (imageUrl.url) {
    const variable = {
      input: { ...form, image: imageUrl.url, createdBy: { link: creatorId } }

    }
    return makeGraphQLRequest(createProjectMutation, variable)
  }
}

export const fetchAllProjects = async (category?: string, endcursor?: string) => {
  client.setHeader('x-api-key', apiKey);
  return makeGraphQLRequest(projectsQuery, { category, endcursor })
}

export const getProjectDetails = (id: string) => {
  client.setHeader('x-api-key', apiKey);
  return makeGraphQLRequest(getProjectByIdQuery, { id })
}


// anything using setHeader is using a session
export const getUserProjects = (id: string, last?: number) => {
  client.setHeader('x-api-key', apiKey);
  return makeGraphQLRequest(getProjectsOfUserQuery, { id, last })
}

export const deleteProject = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`)
  return makeGraphQLRequest(deleteProjectMutation, { id })
}
