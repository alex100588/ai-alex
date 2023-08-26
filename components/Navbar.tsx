import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./Mobile-sidebar"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

async function Navbar() {
  const apiLimicCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro ={isPro} apiLimitCount={apiLimicCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
