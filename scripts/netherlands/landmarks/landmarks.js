export const landmark = (landmarkObj) => {
    return `
      <article class="landmark_card">
          <div><img class="landmark_card_image" src="images/netherlands_img/${landmarkObj.landmarkImage}" alt="Netherlands Landmark Image"></div>
          <div class="landmark_name"><h3>${landmarkObj.landmarkName}</h3></div>
          <div class="landmark_location">Location: ${landmarkObj.landmarkLocation}</div>
          <div class="landmark_covid">Open during Pandemic: ${landmarkObj.openWithCovid === true ? "Yes" : "No"}</div>
      </article>
      `;
  };
  