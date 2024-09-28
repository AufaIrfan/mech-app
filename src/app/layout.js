import "./globals.css";
import { LoadingProvider } from "./context/loadingContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "@fortawesome/fontawesome-svg-core/styles.css";

import { Poppins } from "next/font/google";
import Loading from "./components/Loading";

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
    <LoadingProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Loading />
          {children}
          <div className="container mx-auto max-w-[50rem] flex min-h-[3vh] items-center justify-start px-6 lg:px-12">
            <p className="text-xs text-dark font-semibold">Repack App</p>
          </div>
        </body>
      </html>
    </LoadingProvider>
  );
}
