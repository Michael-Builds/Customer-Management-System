import { Inter } from "next/font/google";
import { PageLayout } from "@/components/Auth/PageLayout";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main className={`flex min-h-screen bg-white w-full flex-col items-center justify-between ${inter.className}`} >
        <MantineProvider>
          <PageLayout />
        </MantineProvider>
      </main>

  );
}
