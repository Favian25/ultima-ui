import "./globals.css";
import Providers from "./Provider";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";


export const metadata = {
  title: "Ultima UI Design System",
  description: "Ultima UI Shell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Providers>
          <AppHeader />
          <main style={{ flex: 1, paddingTop: '64px', width: '100%' }}>{children}</main>
          <AppFooter />
        </Providers>
      </body>
    </html>
  );
}
