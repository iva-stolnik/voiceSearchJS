export function drzavaIspis(rez){
    return   `<div class="resultWrapper">
                <h1>There is ${--(Object.getOwnPropertyNames(rez).length)} universities in <em>${rez[0].country}</em>:</h1>
                <div id="sveucilista"> 
                  ${rez.map((e)=>{                    
                      return  `<div id="container">
                              <h3>${e.name}</h3>
                              <a href="${e.web_pages}" target="_blank">${e.domains}</a>
                              <button class="btn" value="${e.web_pages}" onclick="pozoviiFrame(this.value)">Learn more...</button>                       
                              </div>`
                  }).join("")}
                </div>    
              </div>`
   };
