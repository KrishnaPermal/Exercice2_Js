
    var img = document.getElementById('image1');
    var img2 = document.getElementById('image2');
    var img3 = document.getElementById('image3');
    var img4 = document.getElementById('image4');
    var img5 = document.getElementById('image5');

    //EXERCICE 5

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