<script>
	import { SITE_DESC, SITE_NAME, SITE_TITLE } from '$lib/config';
</script>

<svelte:head>
	<title>{SITE_NAME} - White paper</title>
	<meta name="description" content="In this drugstore y'll find all kinds of Hackers pill's: web, cracking, networking, cryptanalysis, osint and more... " />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin&display=swap" rel="stylesheet">
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<div class="w-full h-[400px] flex flex-col items-center justify-center mt-16 py-10" >
	<div class="flex items-center justify-center relative w-[300px]">
		<lottie-player src="./pill.json" class="animate-pulse" background="transparent" speed="1"  loop autoplay></lottie-player>
		<h2 class="absolute text-4xl font-bold text-shadow-xl ">White paper</h2>
	</div>
	<p class="w-10/12 md:w-4/12 text-center mt-5 text-lg code">Frequently Asked Questions</p>
</div>
<section class="w-11/12 md:w-8/12 mt-16" style="min-height:400px">	

</section>
