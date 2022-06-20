import React, { useState } from "react";
import Cards from "../components/Cards";
import { fetchUserData } from "../utils/fetchUserData";
import Loader from "../components/Loader";

export default function PortfolioPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((items) => {
        setData(items.projects);
        setIsLoading(false);
    })
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="row" data-portfolio>
          {data.map((e, i) => {
            return <Cards {...e} key={i} />;
          })}
        </div>
      )}
    </>
  );
}
