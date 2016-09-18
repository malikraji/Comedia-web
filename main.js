$(document).ready(function(){

   $('.my_account').click(function(){  	
	   $('.profile-cont').bPopup({
	      onOpen: function() {  /*alert('onOpen fired');*/ }, 
	      onClose: function() { /*alert('onClose fired');*/ }
	   }, 
	   function() {
	           //alert("Login");   
	   });
   })

   $('.nav-fav .sp').click(function(){  	
	   $('.favorites-cont').bPopup({
	      onOpen: function() {  /*alert('onOpen fired');*/ }, 
	      onClose: function() { /*alert('onClose fired');*/ }
	   }, 
	   function() {
	           //alert("Login");   
	   });
   })

   $('.nav-pop .sp').click(function(){  	
	   $('.popular-cont').bPopup({
	      onOpen: function() {  /*alert('onOpen fired');*/ }, 
	      onClose: function() { /*alert('onClose fired');*/ }
	   }, 
	   function() {
	           //alert("Login");   
	   });
   })
});
