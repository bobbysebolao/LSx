import React from "react";

const checkResponse = response => {
  if (response.status !== 200) {
    console.log("Error with request", response.status);
    return (
      <React.Fragment>
        <p>Ideas will come later</p>
      </React.Fragment>
    );

    return response.json();
  }
};

const dataRequest = url => {
  return fetch(url)
    .then(checkResponse)
    .catch(err => {
      throw new Error("fetch function failed", Error);
    });
};

export { dataRequest };
