import { LandingNavbar } from "@/components/LandingNavbar";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
