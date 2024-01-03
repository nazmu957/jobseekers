import Image from "next/image";

import Head from "next/head";

import Topbar from "@/components/UI/Topbar";
import Searchbar from "@/components/UI/Searchbar";
import Footer from "@/components/UI/Footer";


const HomePage = ({}) => {
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
        <Searchbar />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;



