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

let downloadBtn = document.querySelector('#downloadBtn');
let myImg = document.querySelector('#firstImage');


// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
// downloadBtn.addEventListener('click', () => {
//     let imagePath = myImg.getAttribute('src');
//     let fileName = getFileName(imagePath);
//     saveAs(imagePath, fileName);
// });

function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}

const matterHeading = document.querySelector('.matter-heading');
matterHeading.addEventListener('click', openGoogle);

function openGoogle() {
    window.open('https://google.com')
}
