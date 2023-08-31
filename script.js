let url = "https://kontests.net/api/v1/all";
let CardContainer = document.getElementById("CardContainer");
let ihtml = "";
let search = document.getElementById("filtering");

let response = fetch(url);

response
  .then((v) => {
    return v.json();
  })

  .then((contest) => {
    // console.log(contest)

    for (item in contest) {
      console.log(contest[item]);

      ihtml += `
        <div class="card" style="width: 22rem;">
        <img src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?cs=srgb&dl=pexels-mikhail-nilov-7988086.jpg&fm=jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contest[item].name}</h5>
          <p class="card-text">Status is: ${contest[item].status}</p>
          <p class="card-text">in 24 hours: ${contest[item].in_24_hours}</p>
          <p class="card-text"><a href="${contest[item].url}">Visit here</a></p>
          <p class="card-text">Starts at:${contest[item].start_time}</p>
          <p class="card-text">Starts at:${contest[item].end_time}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `;
      CardContainer.innerHTML = ihtml;
    }
  });

search.addEventListener("onkeyup", () => {
  contest.filter((filt) => {
    return filt == contest[item].name;
  });
});
