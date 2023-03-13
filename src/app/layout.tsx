import './globals.css'
// import "@assets/datepicker.css";
import "@assets/dropdown.css";
import "@assets/normalize.css";
import "@assets/palette.css";
import "@assets/tailwind.css";
import "@assets/typography.css";
import "@assets/modals.css";
import "@splidejs/react-splide/css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
