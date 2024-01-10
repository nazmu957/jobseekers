import Image from "next/image";

import Head from "next/head";

import Topbar from "@/components/UI/Topbar";
import Searchbar from "@/components/UI/Searchbar";
import Footer from "@/components/UI/Footer";

const HomePage = ({ allJobs }) => {
  return (
    <>
      <Head>
        <title>JobSeekers</title>
        <meta
          name="description"
          content="This is travel web site made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/Scywkr8/2461656.jpg" />
      </Head>
      <div className="bg-white">
        <Topbar />
        <Searchbar allJobs={allJobs} />
        <Slogan />
        <Partners />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;

import axios from "axios"; // Import axios
import Slogan from "@/components/UI/Slogan";
import Partners from "@/components/UI/Partners";

export const getStaticProps = async () => {
  try {
    const apiUrl1 = "https://job-server-rosy.vercel.app/jobs";

    const [response1] = await Promise.all([axios.get(apiUrl1)]);

    console.log(response1);

    return {
      props: {
        allJobs: response1.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error as needed
    return {
      props: {
        allJobs: [],
      },
      revalidate: 10,
    };
  }
};
