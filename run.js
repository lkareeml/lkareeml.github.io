/*--------------------------------------------
*This Code is written by Kareem Atef        **
*->https://github.com/lkareeml              **
*->Kareem.atef@yahoo.com                    **
*->+2 01110973265                           **
*->+2 01092840909                           **
--------------------------------------------*/
$(document).ready(function() {
    //Navbar click function
	$(".navbar .icon").on("click", function() {
		var x = document.getElementById("navbarID");
		if (x.className === "navbar") {
			x.className += " responsive";
		} else {
			x.className = "navbar";
		}
	});
	//Getting Data from JSON API and Edit every section
	function getdata() {
		$.ajax({
			dataType: "json",
			url: "https://api.myjson.com/bins/l9pn3",
			success: function(data) {
				if (data.error === undefined) {
					var arr = [".action", ".casual", ".puzzle"];
					for (var k = 0; k < 3; k++) {
						for (var i = 0; i < data.length; i++) {
							$(arr[k] + " #card" + i + " .image ").css("background-image", "url(" + data[i].imageURL + ")");
							$(arr[k] + " #card" + i + " .gametitle ").text(data[i].name);
							$(arr[k] + " #card" + i + " .publisher").text(data[i].publisher);
							for (var z = 1; z <= data[i].rating; z++) {
								$(arr[k] + " #card" + i + " .rate .s" + z).addClass("hotstar");
							}
						}
					}
				} else {
					console.log(data.error);
				}
			},
			async: true
		});
	}
	//Calling the function above
	getdata();
	/**************************************************************/
	/***************** This code for clicking Menu ****************/
	/**************************************************************/
	$("#menu").on("click", function() {
		$(".division1").removeClass("animeOut").addClass("animeIn");
		$(".division2").removeClass("hide");
	});
	$(".division2").on("click", function() {
		$(".division1").removeClass("animeIn").addClass("animeOut");
		$(".division2").addClass("hide");
	});

	/**************************************************************/
	/******************** This code for Slider ********************/
	/**************************************************************/
	var dotClicked = "ball1";
	var urls = ["44610515_BridgeConstructorStunts_1024x500-min.png", "44610546_InBetween_1024x500-min.png", "45513271_Tower_1024x500-min.png", "44605418_TobyTheSecretMine_1024x500-min.png", "maxresdefault.jpg"];
	//When Hover by mouse
	$("#ball1, #ball2, #ball3, #ball4,#ball5").hover(function() {
		//Change the color of hovered ball
		$(this).css("background", "#ff0000");
	}, function() {
	}, function() {
		//Change the color to normal all but the clicked one
		if ($(this).attr('id') == dotClicked) $(this).css("background", "black");
		else $(this).css("background", "white");
	});
	//Changing background image
	function changeImg(n) {
		$(".slides").fadeTo('1000', 0, function() {
			$(this).css('background-image', 'url(https://raw.githubusercontent.com/lkareeml/frontend_engineer_assignment/master/assets/images/carousel/' + urls[n] + ')');
		}).fadeTo('slow', 1);
	}
	//Main function of SlideShow
	function slideShow() {
		$("#ball1, #ball2, #ball3, #ball4,#ball5").removeClass("clicked").addClass("unclicked").css("background", "white");
		$("#" + dotClicked).addClass("clicked").css("background", "black");
		//test who is clicked to change background 
		switch (dotClicked) {
			case "ball1":
				changeImg(0);
				break;
			case "ball2":
				changeImg(1);
				break;
			case "ball3":
				changeImg(2);
				break;
			case "ball4":
				changeImg(3);
				break;
			case "ball5":
				changeImg(4);
				break;
		}
	}
	//Making it Auto every 3 seconds ->
	var timer = setInterval(function() {
		if (dotClicked == "ball1") {
			dotClicked = "ball2";
		} else if (dotClicked == "ball2") {
			dotClicked = "ball3";
		} else if (dotClicked == "ball3") {
			dotClicked = "ball4";
		} else if (dotClicked == "ball4") {
			dotClicked = "ball5";
		} else if (dotClicked == "ball5") {
			dotClicked = "ball1";
		}
		slideShow();
	}, 5000);
	//Action whan click 
	$("#ball1, #ball2, #ball3, #ball4,#ball5").on("click", function() {
		dotClicked = $(this).attr('id');
		slideShow();
	});
});