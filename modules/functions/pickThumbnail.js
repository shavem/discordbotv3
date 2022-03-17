/*
  PICK THUMBNAIL

  This function will pick a random thumbnail from the list of thumbnails

*/

thumbnails = [
    "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcyNDgwODUyNjM3MjYyOTMx/korean-war-gettyimages-3233406.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/033/701/PTSD_Chihuahua_Banner.jpg",
    "https://www.history.com/.image/t_share/MTU3OTIzNjU0NDk4NzIzNDc0/the-pictures-that-defined-world-war-iis-featured-photo.jpg",
    "https://cdn.theatlantic.com/media/img/photo/2015/03/the-vietnam-war-part-i-early-years/v01_AP6503010453-1/original.jpg",
    "https://img.jakpost.net/c/2020/01/07/2020_01_07_84421_1578366020._large.jpg",
    "https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/06/54d411862e2d1_-_2717016.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    "https://images04.military.com/sites/default/files/styles/full/public/2020-08/Korean%20War%20NKPA%201200.jpg",
];

function pickThumbnail() {
    return thumbnails[Math.floor(Math.random() * thumbnails.length)];
}

module.exports = {pickThumbnail};