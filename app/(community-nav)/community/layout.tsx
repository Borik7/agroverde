import CommunityNavigation from "@/components/CommunityNavigation";
import "../../globals.css";
import CommunityFooter from "@/components/CommunityFooter";

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return <>{children}</>;
  return (
    <html lang="am">
      <body>
        <CommunityNavigation />
        <main className="min-h-screen">{children}</main>
        {/* <Toaster /> */}
        <CommunityFooter></CommunityFooter>
      </body>
    </html>
  );
}
