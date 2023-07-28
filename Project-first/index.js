let blog = [
  {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000",
    blogtitle: "First Blog",
    blogdescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    readmore:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?",
  },

  {
    image:
      "https://t3.ftcdn.net/jpg/06/06/72/28/360_F_606722855_SJUzIBUPtG1CqWyW22dpxGpaSZHGIvtW.jpg",
    blogtitle: "Second Blog",
    blogdescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    readmore:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbbOVUGcaqI7VPbi1p1yxueFmNriEMr60rPfRCCEAaCpn536NvDEQy5ItRm_9VNYf3x4&usqp=CAU",
    blogtitle: "Third Blog",
    blogdescription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    readmore:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?",
  },
];

const blogSection = document.querySelector("#displayBlog");
const readButton = document.querySelector(".btn");

const displayBlog = () => {
  let element = " ";
  blog.forEach((obj, idx) => {
    element += `<div id="card">
        <div id="imageBlog">
          <img
            src='${obj.image}'
            alt="img"
            id="blogImage"
          />
        </div>
        <h3>Blog title : <span>${obj.blogtitle}</span></h3>
        <p id="blogdescription">
          Blog Description :
          <span>
          ${obj.blogdescription}
          </span>
        </p>
         <a href='./readBlogPage.html' onclick = 'readmore(${idx})'>
        <button class="btn" >Read More</button> 
         </a>
         
      </div>`;
  });

  blogSection.innerHTML = element;
};

displayBlog();

// Javascript for readmore function
// const blogPageContainer = document.querySelector("#BlogPageContainer");
// function readmore(index) {
//   let readObject = blog[index];
//     console.log(readObject);
//   let readPageElement = ` <div id="introduction">
//       <div id="blogTitle">

//           <h3>${readObject.blogtitle}</h3>
//           <p>
//             ${readObject.blogdescription}
//           </p>

//       </div>
//       <div id="blogImage">
//         <img
//           src="${readObject.image}"
//           alt="BlogImage"
//           id="blogImage"
//         />
//       </div>
//     </div>
//     <div id="blogDescription">
//       <p>
//        ${readObject.readmore}
//       </p>
//     </div>`;
//     blogPageContainer.innerHTML = `${readPageElement}`
// }

// javascript for AddBlog Page

const addBlogInputFrom = document.getElementById("addblog");
const crossIcon = document.getElementById("crossIcon");
const addBlogPlusButton = document.getElementById("AddBtn");

addBlogPlusButton.addEventListener("click", () => {
  addBlogInputFrom.style.display = "block";
});
crossIcon.addEventListener("click", () => {
  addBlogInputFrom.style.display = "none";
});
