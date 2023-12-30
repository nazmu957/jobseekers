import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-white text-lg font-bold">
            JobSeekers
          </a>

          <div class="space-x-4">
            <a href="#" class="text-white">
              Home
            </a>
            <a href="#" class="text-white">
              About
            </a>
            <a href="#" class="text-white">
              Jobs
            </a>
            <a href="#" class="text-white">
              Others
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
