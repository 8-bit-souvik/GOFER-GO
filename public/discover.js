

var people = {
    discover: (e) => {


        fetch(`${hostURL}activity/onpost/discover`, {
            "method": "GET",
            "headers": {
                "key": "12345",
                "content-type": "application/json"
            }
        })
            .then((Response) => {
                return Response.json();
            })
            .then((discover) => {
                console.log(discover.discover[0]);
                console.log(discover);
                document.querySelector(".discover").innerHTML = `
                  
                  <h3>Discover people</h3>
                                
                  <a class="people" href="https://github.com/${discover.discover[0].github_ID}" target="_blank">
                      <div><img src="${discover.discover[0].profile_img}" height="50px"
                              width="50px" alt="DP"></div>
                      <div>
                          <div class="name">${discover.discover[0].name}</div>
                          <div class="bio">${discover.discover[0].github_ID}</div>
                      </div>
                  </a>
        
                  <a class="people" href="https://github.com/${discover.discover[1].github_ID}" target="_blank">
                      <div><img src="${discover.discover[1].profile_img}" height="50px"
                              width="50px" alt="DP"></div>
                      <div>
                          <div class="name">${discover.discover[1].name}</div>
                          <div class="bio">${discover.discover[1].github_ID}</div>
                      </div>
                  </a>
        
                  <a class="people" href="https://github.com/${discover.discover[2].github_ID}" target="_blank">
                      <div><img src="${discover.discover[2].profile_img}" height="50px"
                              width="50px" alt="DP"></div>
                      <div>
                          <div class="name">${discover.discover[2].name}</div>
                          <div class="bio">${discover.discover[2].github_ID}</div>
                      </div>
                  </a>
        
                  <a class="people" href="https://github.com/${discover.discover[3].github_ID}" target="_blank">
                      <div><img src="${discover.discover[3].profile_img}" height="50px"
                              width="50px" alt="DP"></div>
                      <div>
                          <div class="name">${discover.discover[3].name}</div>
                          <div class="bio">${discover.discover[3].github_ID}</div>
                      </div>
                  </a>
        
                  <a class="people" href="https://github.com/${discover.discover[4].github_ID}" target="_blank">
                      <div><img src="${discover.discover[4].profile_img}" height="50px"
                              width="50px" alt="DP"></div>
                      <div>
                          <div class="name">${discover.discover[4].name}</div>
                          <div class="bio">${discover.discover[4].github_ID}</div>
                      </div>
                  </a>
        
                  <div class="shuffle" onclick="people.discover()">
                      shuffle
                  </div>
                  
                  `
            })
    }
}


people.discover()
