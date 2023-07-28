import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";

const CreateProject = () => {
  //  Children is the element in a div
  return (
    <Modal>
      <h3 className="modal-head-text">
        Create a New project
      </h3>
      <ProjectForm />
    </Modal>
  )
}

export default CreateProject;