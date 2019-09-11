
    let img = document.getElementById('image1');
    let img2 = document.getElementById('image2');
    let img3 = document.getElementById('image3');
    let img4 = document.getElementById('image4');
    let img5 = document.getElementById('image5');


    function hoverImg(x) {
        if( x == img) {
            img.setAttribute('src', 'images/image1_2.jpg');
        }
         else if( x == img2) {
            img2.setAttribute('src', 'images/image2_2.jpg');
        }
         else if( x == img3) {
            img3.setAttribute('src', 'images/image3_2.jpg');
        }
         else if( x == img4) {
            img4.setAttribute('src', 'images/image4_2.jpg');
        }
         else if( x == img5) {
            img5.setAttribute('src', 'images/image5_2.jpg');
        } 
    }

function normalImg(x) {
        img.setAttribute('src', 'images/image1.jpg');
        img2.setAttribute('src', 'images/image2.jpg');
        img3.setAttribute('src', 'images/image3.jpg');
        img4.setAttribute('src', 'images/image4.jpg');
        img5.setAttribute('src', 'images/image5.jpg');
    }

