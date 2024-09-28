let engineerData = [
    {
        image: "./Images/avatar-1.jpg",
        firstName : "Martin",
        lastName : "Smith",
        post : "Creative Manger"
    },
    {
        image: "./Images/avatar-2.jpg",
        firstName : "John",
        lastName : "Pitarshon",
        post : "Office Manger"
    },
    {
        image: "./Images/avatar-3.jpg",
        firstName : "Ali",
        lastName : "Mia",
        post : "Support Manger"
    },
    {
        image: "./Images/avatar-4.jpg",
        firstName : "Maria",
        lastName : "Blank",
        post : "Creative Manger"
    },
];
let data = document.getElementById("Engineer");

    engineerData.forEach((item) => 
    {
        return(
            data.innerHTML += `
                  <div class="col-lg-3">
        <div class="cards">
          <div class="team">
            <img src= ${item.image} alt="" class="img-fluid engineer" style="border-radius: 100%" />
          </div>
          <div class="team-details text-center">
            <h5><a class="nav-link" href="#">${item.firstName} ${item.lastName}</a></h5>
            <p>${item.post}</p>
            <ul>
              <li>
                <a href="#" class="nav-link"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#" class="nav-link"><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" class="nav-link"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#" class="nav-link"><i class="fa-brands fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
            `
        )
    }
    )
let dataLoad = document.getElementById("loader");
let body = document.getElementById("hidden");
window.onload = function(){
  setTimeout(() => {
    dataLoad.classList.add("loader")
    body.classList.add("hidden")
    setTimeout(() => {
      dataLoad.classList.remove("loader")
      body.classList.remove("hidden")
      dataLoad.style.display = "none"
    },2000)
  });
}




