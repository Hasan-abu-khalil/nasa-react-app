import React from "react";

function SideBar(props) {
  const { handleTogglemodal, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContent">
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionParagraph">{data?.explanation}</p>
        </div>
        <button onClick={handleTogglemodal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
