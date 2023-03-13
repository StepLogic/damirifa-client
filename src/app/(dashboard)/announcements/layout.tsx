
import Layout from "@root/src/app/(home)/components";
import AnnouncementLayout from "./components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<AnnouncementLayout>
      {children}
</AnnouncementLayout>
  )
}
