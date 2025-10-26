import { AboutMeWidget } from "@/components/AboutMeWidget";
import { GalleryWidget } from "@/components/GalleryWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 min-h-screen">
          {/* Empty left side - responsive for laptop */}
          <div className="hidden lg:block" />
          
          {/* Right side with widgets */}
          <div className="flex flex-col gap-8 justify-start pt-12">
            <AboutMeWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
