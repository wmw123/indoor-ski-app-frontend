import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/NavBar";
import AddCount from "../components/AddCount";
import Link from "next/link";
import fetch from "node-fetch";
import Footer from "../components/Footer";
import { useState } from "react";

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/indoorskiplaces");
  const allIndoorskiplacesData = await res.json();

  return {
    props: {
      allIndoorskiplacesData,
    },
  };
}

export default function Home({ allIndoorskiplacesData }) {
  const indoorskiplaces = allIndoorskiplacesData.indoorskiplaces;
  const [facility, setFacility] = useState();
  const [location, setLocation] = useState();

  const selectTypeOfFacility = (event) => {
    console.log(event.target.value);
    const selectedType = event.target.value;
    console.log("selected type", selectedType);
    setFacility(selectedType);
  };

  const selectTypeOfLocation = (event) => {
    console.log(event.target.value);
    const selectedType = event.target.value;
    console.log("selected type", selectedType);
    setLocation(selectedType);
  };

  // const filtered_indoorskiplaces = () => {
  //   if (facility === "indoor dome") {
  //     return filter_indoor_dome;
  //   } else if (facility === "ski simulator") {
  //     return filter_ski_simulator;
  //   } else if (facility === "dry slopes") {
  //     return filter_dry_slopes;
  //   } else {
  //     return indoorskiplaces;
  //   }
  // };

  // const filter_indoorskiplaces_array = filtered_indoorskiplaces();

  return (
    <>
      <Head>
        <title>Indoor Ski Places in the Netherlands</title>
        <meta
          name="description"
          content={`Check out all the ${indoorskiplaces.length} indoor ski places! Invite your friends and write a review now`}
        />
      </Head>
      <NavBar />
      <div className={utilStyles.container}>
        <h1>Indoor Ski Places in the Netherlands</h1>
        <div className={utilStyles.indoorskiplacesList}>
          {indoorskiplaces.map(({ id, name, imageUrl }) => (
            <div className={utilStyles.indoorskiplaceItem} key={id}>
              <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className={utilStyles.indoorskiplaceImage}
              >
                <div className={utilStyles.name}>
                  <br />
                  <AddCount id={id} />
                  <br />
                  <Link href="/[id]" as={`${id}`}>
                    <a>Show details</a>
                  </Link>
                </div>
                <p>{name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={utilStyles.default}>
          <h2>Find all indoor domes, dry slopes, and ski simulators</h2>
          <label htmlFor="facility">Select type of facility:</label>
          <br />
          <select
            name="indoorskiplaces"
            id="indoorskiplaces"
            onChange={selectTypeOfFacility}
          >
            <option value="all">All</option>
            <option value="indoor dome">Indoor dome</option>
            <option value="ski simulator">Ski simulator</option>
            <option value="dry slopes">Dry slopes</option>
          </select>
          <br />
          <label htmlFor="location">Select province:</label>
          <br />
          <select name="location" id="location" onChange={selectTypeOfLocation}>
            <option value="all">All</option>
            <option value="north holland">North Holland</option>
            <option value="south holland">South Holland</option>
            <option value="limburg">Limburg</option>
            <option value="north brabant">North Brabant</option>
          </select>
        </div>
      </div>
      <Footer />
    </>
  );
}
