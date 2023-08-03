import { ProjectInterface } from "@/common.types";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreciousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
    }
  }
}

const Home = async () => {

  //  The as ensure the result comes out that way
  const data = await fetchAllProjects() as ProjectSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <p className="no-result-text text-center">
          No project found, Create one now.
        </p>
      </section>
    )
  }

  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1> Categories </h1>
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard />
        ))}
      </section>
      <h1> Load More </h1>
    </section>
  )
}

export default Home;