import React, { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";
import "./AllGun.css";

const AllGun = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);

  //   console.log(guns);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="allgun text-black">
      <h1 className="text-3xl font-bold text-center pt-14">
        Welcome To <span className="text-yellow-700">Fake</span> Guns Store
      </h1>
      <p className="text-center py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        harum incidunt, obcaecati, soluta laborum molestias et atque repudiandae
        in mollitia hic aspernatur aperiam, quibusdam necessitatibus placeat
        provident quo sint quia.
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-6">
        {guns.map((gun) => (
          <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
        ))}
      </div>
    </div>
  );
};

export default AllGun;
