import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "next/font/google";
import Load from "./components/load/Load";
import Notification from "./components/alert/Notification";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Mech App",
  description: "Warehouse stock management",
};

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Load />
          <Notification />
          {children}
        </body>
      </html>
    </GlobalProvider>
  );
}
