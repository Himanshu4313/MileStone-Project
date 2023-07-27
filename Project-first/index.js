let blog =
    [
         {
            image : 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
            blogtitle: 'First Blog',
            blogdescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            readmore: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?',
         },

         {
            image : 'https://t3.ftcdn.net/jpg/06/06/72/28/360_F_606722855_SJUzIBUPtG1CqWyW22dpxGpaSZHGIvtW.jpg',
            blogtitle: 'Second Blog',
            blogdescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            readmore: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?',
         },
         {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbbOVUGcaqI7VPbi1p1yxueFmNriEMr60rPfRCCEAaCpn536NvDEQy5ItRm_9VNYf3x4&usqp=CAU',
            blogtitle: 'Third Blog',
            blogdescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            readmore: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum magni a totam minima tempore soluta, praesentium, autem consequuntur quod dicta commodi vel ex sed beatae animi doloribus laborum blanditiis?',
         },
      

    ];


 const blogSection = document.getElementById('displayBlog');
    const readButton = document.getElementsByClassName('btn');

const displayBlog = () =>{
     let element= " ";
    blog.forEach((obj) => {
       
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
        <button class="btn">Read More</button>
      </div>`
    });
    console.log(element);
    blogSection.innerHTML = element;
    
};

displayBlog();




    
