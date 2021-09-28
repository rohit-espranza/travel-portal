import React from "react";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="loader bg-primary">
      <div className="loader-inner">
        <img
          src={require(`../assets/images/logo2.png`).default}
          alt=""
          width={200}
        />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
