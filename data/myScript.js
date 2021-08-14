var itemNumber = 0;
var orderTotal = 0;
var isSubmit = 0;

$(document).ready(function(){
$("#country").click(function(){
	$("#img-description").attr("src", "media/country.jpg");
	$("#name-description").text("Country Style");
		$("#text-descriprion").text("True King of All Breads with thick crust and coarse texture with soft inside full of aroma. Each loaf is baked with high precision and only using best natural ingredients");
	$("#price-description").text("1.99");
	$("#ingredients-description").text("Rye flour , water, wheat flour , yeast, salt, wheat gluten , emulsifier mono- and diglycerides of fatty acids, sugar, citric sodium diacetate, corn steep powder, thickening agent (guar gum, xanthan gum)");
	$("#weight-description").text("800g");
	$("#energy-description").text("259kcal (Per 100g)");
	});

$("#sunflower").click(function(){
	$("#img-description").attr("src", "media/sunflower.jpg");
	$("#name-description").text("Rustic");
		$("#text-descriprion").text("This rustic bread specialty with sunflower seeds, pumpkin kernels and linseed in the dough is characterized by a loose and juicy crumb, a slightly nutty character and a crispy crust.");
	$("#price-description").text("1.78");
	$("#ingredients-description").text("Wheat flour , water, rye flour , natural sourdough ( rye flour , water, wholemeal rye flour ), linseed, yeast, oats , sunflower seeds, pumpkin seeds, malted wheat flour , wheat gluten , mono- and diglycerides of fatty acids, sugar, rye pastry dough, potato starch");
	$("#weight-description").text("750g");
	$("#energy-description").text("271kcal (Per 100g)");
	});

$("#baguette").click(function(){
	$("#img-description").attr("src", "media/baguette.jpg");
	$("#name-description").text("Hearty Baguette");
		$("#text-descriprion").text("The best Baguette you will ever have, with crispy crust, delicate inside with uncomparable taste and aroma. All our baguette are at least 3 foot long.");
	$("#price-description").text("1.49");
	$("#ingredients-description").text("Wheat flour , water, onions, roasted onions (onions, palm oil, wheat flour , food salt), yeast, dining salt.");
	$("#weight-description").text("300g");
	$("#energy-description").text("237kcal (Per 100g)");
	});

$("#raisen").click(function(){
	$("#img-description").attr("src", "media/raisen.jpg");
	$("#name-description").text("Raisen Bread");
		$("#text-descriprion").text("Juicy fresh raisin bread baked in a rectangular shape. Balanced taste with raisins and butter. Perfect breakfast pastry that goes perfectly with jam or penut-butter.");
	$("#price-description").text("2.29");
	$("#ingredients-description").text("Wheat flour , raisins, egg , cottage cheese preparation ( fat quark , skimmed milk yoghurt ), butter , wheat swelling flour , sugar, yeast, emulsifiers (mono- and diglycerides of fatty acids, diacetyl tartaric acid esters of mono- and diglycerides of fatty acids).");
	$("#weight-description").text("250g");
	$("#energy-description").text("340kcal (Per 100g)");
	});

$("#rosebread").click(function(){
	$("#img-description").attr("src", "media/rosebred.jpg");
	$("#name-description").text("Rosebread Roll");
		$("#text-descriprion").text("This hearty, wholegrain roll is a perfect for a quickh and health snack, full of proteins that get you power to go through the day.");
	$("#price-description").text("0.59");
	$("#ingredients-description").text("Wheat flour , water, rye flour , yeast, salt, sugar, rapeseed oil, Weizenröstmalzmehl , acidity regulator diphosphates, malted wheat flour , wholemeal oat flour , stabilizer carboxymethyl cellulose, pea extract, dried wheat sourdough.");
	$("#weight-description").text("75g");
	$("#energy-description").text("353kcal (Per 100g");
	});

$("#potato").click(function(){
	$("#img-description").attr("src", "media/potato.jpg");
	$("#name-description").text("Potato Bread Roll");
		$("#text-descriprion").text("Best of the potato, super juicy with crispy texture and great flavour. Harmonious taste meets rustic look. ");
	$("#price-description").text("0.47");
	$("#ingredients-description").text("Wheat flour , water, potato flakes, rye flour , wholemeal rye meal , wheat gluten , salt, yeast, sugar, wheat malt flour , pregelatinized wheat flour , dextrose.");
	$("#weight-description").text("83g");
	$("#energy-description").text("259kcal (Per 100g");
	});

$(".frame").click(function(){
	$("#ourrange").slideToggle();
	$("#item-description").slideToggle();
	});

$(".btn-roll").click(function(){
	$("#ourrange").slideToggle();
	$("#item-description").slideToggle();
	$("#quantityInput").val(1);
	});

$("#basketClose").click(function(){
	$(".navbar").fadeIn();
	$("#myCarousel").fadeIn();
	$("#aboutus").fadeIn();
	$("#item-description").fadeOut();
	$("#ourrange").fadeIn();
	$("#contactus").fadeIn();
	$("#basket").fadeOut();
	$("#footer").css("position", "relative");
	$("#orderForm").hide();
	$("#checkoutBtn").text("Go to Checkout");
	$("#footer").show();
	isSubmit = 0;
	});
});


function getDate(){
	var day1 = new Date();
	var day2 = new Date();
	var day3 = new Date();
	var day4 = new Date();
	var day5 = new Date();

	day2.setDate(day2.getDate() + 1);
	day3.setDate(day3.getDate() + 2);
	day4.setDate(day4.getDate() + 3);
	day5.setDate(day5.getDate() + 4);

	document.getElementById("day1").innerHTML = getDateString(day1);
	document.getElementById("day2").innerHTML = getDateString(day2);
	document.getElementById("day3").innerHTML = getDateString(day3);
	document.getElementById("day4").innerHTML = getDateString(day4);
	document.getElementById("day5").innerHTML = getDateString(day5);
}

function getDateString(date){
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var dayOfTheWeek = days[date.getDay()];
	var day = date.getDate();
	var month = date.getMonth()+ 1;
	var	year = date.getFullYear();
	var dateString = dayOfTheWeek + ' - ' + day + ' / ' + month + ' / ' + year;
	return dateString;
}

function testFunction() {
	var name = document.getElementById("customerName");
	var email = document.getElementById("customerEmail");
	if (name.checkValidity() == false || email.checkValidity() == false){ }else{
	document.getElementById("successScreen").style.display ="block";
	document.getElementById("orderScreen").style.display ="none";
	}
}

function resetOrder(){
	document.getElementById("successScreen").style.display ="none";
	document.getElementById("orderScreen").style.display ="block";
	document.getElementById("customerName").value = "";
	document.getElementById("customerEmail").value = "";
}

function initMap() {
var myCenter = new google.maps.LatLng(54.595186, -5.926013);
var mapProp = {center:myCenter,
				zoom:14,
				mapTypeId:google.maps.MapTypeId.ROADMAP,
				scrollwheel: false,
				draggable: false,
				panControl: true,
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: true,
				streetViewControl: false,
				overviewMapControl: false,
				rotateControl: false};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}

function addToBasket() {
	itemNumber ++;

	var itemName = document.getElementById("name-description").innerHTML;
	var itemQuantity = document.getElementById("quantityInput").value;
	var itemPrice = document.getElementById("price-description").innerHTML;
	var totalPrice = round(itemQuantity * itemPrice, 2);

	orderTotal += totalPrice;
	orderTotal = round(orderTotal,2);
	var orderLine = {lineNumber:itemNumber, name:itemName, quantity:itemQuantity, price:itemPrice, total:totalPrice};


	var td1 = "<td><button class='btn btn-danger' onclick='remove("+itemNumber+")'>&times;</button></td>";
	var td2 = "<td>"+orderLine.name+"</td>";
	var td3 = "<td>"+orderLine.quantity+"</td>";
	var td4 = "<td>"+orderLine.price+"</td>";
	var td5 = "<td id='price"+itemNumber+"'>"+orderLine.total+"</td>";
	var row = "<tr id='tr"+itemNumber+"'>"+td1+td2+td3+td4+td5+"</tr>";
	$("#orderTable").append(row);
	$(".badge").text(itemNumber);
	$("#ourrange").slideToggle();
	$("#item-description").slideToggle();
	$("#quantityInput").val(1);
	$("#modalMessage").text("Item has been added to your basket.");
	$("#modal").modal("show");
}

function remove(item) {
	var differnece = document.getElementById("price"+item).innerHTML;
	itemNumber --;
	orderTotal -= differnece;
	orderTotal = round(orderTotal,2);
	$(".badge").text(itemNumber);
	$("#tr"+item).remove();
	$("#orderTotal").text(orderTotal);
	if (itemNumber == 0) {
		$("#modalMessage").text("You have no items in your basket.");
		$("#modal").modal("show");
		basketClose();
	} else {
		return;
		}
}

function showBasket(){
	if (itemNumber == 0) {
		$("#modalMessage").text("You have no items in your basket.");
		$("#modal").modal("show");
	} else {
		$(".navbar").fadeOut();
		$("#myCarousel").fadeOut();
		$("#aboutus").fadeOut();
		$("#item-description").fadeOut();
		$("#ourrange").fadeOut();
		$("#contactus").fadeOut();
		$("#basket").fadeIn();
		$("#footer").hide();
		$("#orderTotal").text(orderTotal);
		$("#orderForm").hide();
		$("#checkoutBtn").text("Go to Checkout");
	}
}


function basketClose() {
		$(".navbar").fadeIn();
		$("#myCarousel").fadeIn();
		$("#aboutus").fadeIn();
		$("#item-description").fadeOut();
		$("#ourrange").fadeIn();
		$("#contactus").fadeIn();
		$("#basket").fadeOut();
		$("#footer").css("position", "relative");
		$("#orderForm").hide();
		$("#checkoutBtn").text("Go to Checkout");
		clearForm();
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function submitOrder() {
		if ( isSubmit == 0) {
  		$("#checkoutBtn").text("Submit");
			$("#errorLabel").text("*Complete your details and select time & date of your pick-up");
			$("#orderForm").fadeIn();
			isSubmit = 1;
		} else {
			validateInputs();
		}
}


function validateInputs() {
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		var timeSelection = document.getElementById("orderTime");
		var timeIndexValue = timeSelection.options[timeSelection.selectedIndex].value;
		var dateSelection = document.getElementById("orderDate");
		var dateIndexValue = dateSelection.options[dateSelection.selectedIndex].value;

		if (name == "") {
			displayErrorOn("#name");
			$("#errorLabel").text("*Enter your name.");
		}	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
			displayErrorOn("#email");
			$("#errorLabel").text("*Enter valid email address");
			displayErrorOff("#name");
		} else if (timeIndexValue == "Select Time") {
			displayErrorOn("#orderTime");
			$("#errorLabel").text("*Select time of your pick-up");
			displayErrorOff("#name");
			displayErrorOff("#email");
		} else if (dateIndexValue == "Select Day") {
			displayErrorOn("#orderDate");
			$("#errorLabel").text("*Select date of your pick-up");
			displayErrorOff("#name");
			displayErrorOff("#email");
			displayErrorOff("#orderTime")
		} else {
			$("#errorLabel").text("*Order has been submitted.");
			$("#errorLabel").css("color", "green");
			displayErrorOff("#name");
			displayErrorOff("#email");
			displayErrorOff("#orderTime");
			displayErrorOff("#orderDate");
			$("#modalMessage").text("Your order has been placed.");
			$("#modal").modal("show");
			$("#orderTable").empty();
			itemNumber = 0;
			basketClose();
			$(".badge").text(itemNumber);
			$("#errorLabel").text("");
			$("#errorLabel").css("color", "black");
			isSubmit = 0;
			clearForm();
		}



}

function displayErrorOn(inputName){
		$("#errorLabel").css("color", "red");
		$("#errorLabel").css("font-weight", "bold");
		$(inputName).css("border-color", "#FF0000");
		$(inputName).css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6)");
}

function displayErrorOff(inputName){
		$(inputName).css("border-color", "");
		$(inputName).css("box-shadow", "");
}

function clearForm(){
	    $("#name").val("");
			$("#email").val("");
			$("#orderTime").val("Select Time");
			$("#orderDate").val("Select Day");
			orderTotal = 0;
			$("#errorLabel").css("font-weight", "normal");
}
