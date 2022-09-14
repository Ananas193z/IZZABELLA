
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
document.addEventListener("DOMContentLoaded", hiddenCloseclick());
document.getElementById('hiiih').addEventListener("click", hiddenCloseclick);
function hiddenCloseclick() {
let x = document.getElementById('hidden-element');
if (x.style.display == "none"){
	x.style.display = "block";
} else {
	x.style.display = "none"}
};


