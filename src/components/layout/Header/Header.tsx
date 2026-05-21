import { cn } from "@/lib/utils";
import { useTransHeader } from "@/hooks/useTransHeader";
import { AnnouncementBar } from "@/components/layout/Header/AnnouncementBar";
import { TopNav } from "@/components/layout/Header/TopNav";
import { MainNav } from "@/components/layout/Header/MainNav";
import { SideMenu } from "@/components/layout/SideMenu";

export function Header() {
  const scrolled = useTransHeader();

  return (
    <header
      className={cn(
        "store-header sticky top-0 z-40 transition-all duration-500",
        scrolled && "is-scrolled",
      )}
    >
      <AnnouncementBar />
      <div className={cn("glass-header transition-all duration-500", scrolled && "glass-panel")}>
        <TopNav scrolled={scrolled} />
        <MainNav />
      </div>
      <SideMenu />
    </header>
  );
}
