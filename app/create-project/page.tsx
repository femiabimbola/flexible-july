import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

// What is the difference between redirect and router.push('/') that is modal
//  Children is the element in a div

const CreateProject = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect('/')
  return (
    <Modal>
      <h3 className="modal-head-text">
        Create a New project
      </h3>
      <ProjectForm type='create' session={session} />
    </Modal>
  )
}

export default CreateProject;