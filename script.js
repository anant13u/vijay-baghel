// const img = document.getElementById('firstImage');
// const downloadBtn = document.getElementById('downloadBtn');

// img.addEventListener('mouseenter', () => {
//     downloadBtn.style.display = 'block';
//   });
  
// img.addEventListener('mouseleave', () => {
//     downloadBtn.style.display = 'none';
//     });

// // downloadBtn.style.position='relative'

// downloadBtn.addEventListener('click', () => {
//   const link = document.createElement('a');
//   link.href = img.src;
//   link.download = 'your-image.jpg';
//   link.click();
// });



// function downloadImage() {
//     const imgSrc = document.querySelector('#firstImage').getAttribute('src');
//     const imgName = imgSrc.split('/').pop();
//     fetch(imgSrc)
//       .then(res => res.blob())
//       .then(blob => {
//         const url = window.URL.createObjectURL(new Blob([blob]));
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', imgName);
//         document.body.appendChild(link);
//         link.click();
//         link.parentNode.removeChild(link);
//       });
//   }




const matterHeading = document.querySelector('.matter-heading');
matterHeading.addEventListener('click', openGoogle);

function openGoogle() {
    window.open('https://google.com')
}