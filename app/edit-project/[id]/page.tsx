import { ProjectInterface } from "@/common.types";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getProjectDetails } from "@/lib/actions";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

// What is the difference between redirect and router.push('/') that is modal
//  Children is the element in a div

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  if (!session?.user) redirect('/')

  // To get the project details to edit
  const result = await getProjectDetails(id) as { project?: ProjectInterface }

  return (
    <Modal>
      <h3 className="modal-head-text">
        Edit Project
      </h3>
      <ProjectForm type='create' session={session} project={result?.project} />
    </Modal>
  )
}

export default EditProject;