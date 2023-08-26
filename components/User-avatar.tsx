import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar() {
    const { user } = useUser()
  return (
    <Avatar>
        <AvatarImage src={user?.profileImageUrl} />
        <AvatarFallback>
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
        </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar;