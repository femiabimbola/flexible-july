import { ProjectInterface } from "@/common.types";
import Categories from "@/components/Categories";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

// Node is one instance of the project 
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
      <Categories />


      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard key={node?.id} id={node?.id} image={node?.image} title={node?.title}
            name={node?.createdBy?.name} avatarUrl={node?.createdBy.avatarUrl} userId={node?.createdBy?.id}
          />
        ))}
      </section>

      <h1> Load More </h1>
    </section>
  )
}

export default Home;