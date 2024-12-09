/*Hover effect on thumbnails*/
$(document).ready(function () {
    $("#gallery img").hover(
        function() {
            $(this).css({
                'border': '2px solid darkgreen',
                'box-shadow': '0 0 10px darkgreen'
            });
        },
        function() {
            $(this).css({
                'border': '',
                'box-shadow': ''
            });
        }
    );

    /*loop through all img tags in the #gallery div (thumbnail images)*/
    $("#gallery img").each(function() {
        // get the src attribute of the thumbnail image
        var imgFile = $(this).attr("src");
        // when the image is clicked, assign the src attribute to the lgPic
        $(this).click(function() {
            $("#lgPic").attr("src", imgFile);
        });// end click
    }); // end each
        
    /*Add a click event listener to each small image*/
    $("#gallery img").on('click', function() {
        //Get alt attribute of the clicked small image
        var smallImageAlt = $(this).attr("alt");
        //Replace description text under the large image with the alt text of the clicked small images
        $("#lgTitle").text(smallImageAlt);
    });

    /*Open Image in new window*/
    $("#lgPic").on('click', function() {
        //Get the source of the image
        var imageSrc = $(this).attr("src");
        //Get the alt text for the image
        var imageAlt = $(this).attr("alt");

        //Open new window & display image
        var newWindow = window.open('', '_blank');
        newWindow.document.write('<html><head><title>' + imageAlt + '</title></head><body style="margin:0; padding:0; text-align:center;">');
        newWindow.document.write('<img src="' + imageSrc + '" style="max-width:100%; height:auto;" />');
        newWindow.document.write('</body></html>');
        newWindow.document.close();
    });
});
/*End of Program*/