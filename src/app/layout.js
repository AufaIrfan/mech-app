import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "next/font/google";
import Loading from "./components/loading/Loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Reapack App",
  description: "Warehouse stock management",
  icons: {
    icon: "/img/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Loading />
          {children}
        </body>
      </html>
    </GlobalProvider>
  );
}
