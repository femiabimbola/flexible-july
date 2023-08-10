import { UserProfile } from "@/common.types";
import { getUserProjects } from "@/lib/actions";

type Props = {
  params: {
    id: string
  }
}

const UserProfile = async ({ params }: Props) => {
  //  The 100 is not compulsory
  const result = await getUserProjects(params.id, 100) as { user: UserProfile }

  if (!result?.user)

    return (
      <div>Profile</div>
    )
}

export default UserProfile;