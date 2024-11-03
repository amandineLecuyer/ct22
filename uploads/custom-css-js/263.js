<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 
window.addEventListener("scroll", (event) => {
	console.log(document.documentElement.scrollTop)
	if(document.documentElement.scrollTop>=89)
	{
		document.getElementById('navbar').classList.add('fixed-header');
	}
	else
	{
		document.getElementById('navbar').classList.remove('fixed-header');
	}
});


</script>
<!-- end Simple Custom CSS and JS -->
