import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const HomePage = ({  }) => {

    return (
      <>
        <Head>
          <title>Travel-Gide</title>
          <meta
            name="description"
            content="This is travel web site made by next-js"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="https://i.ibb.co/Scywkr8/2461656.jpg" />
          <div>
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
          </div>
        </Head>
      </>
    );
};
export default HomePage;
