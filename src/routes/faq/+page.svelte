<script>
	import { onMount } from 'svelte'
	import { SITE_NAME } from '$lib/config';
	import {web3Init, contractName} from '$lib/web3init';
	import {contractInteract} from '$lib/web3init';

	onMount(async ()=>{
		web3Init()
		contractInteract()

	})

</script>

<svelte:head>
	<title>{SITE_NAME} - faq</title>
	<meta name="description" content="In this drugstore y'll find all kinds of Hackers pill's: web, cracking, networking, cryptanalysis, osint and more... " />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin&display=swap" rel="stylesheet">
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>
<div class="w-full h-[400px] flex flex-col items-center justify-center mt-16 py-10" >
	<div class="flex items-center justify-center relative w-[300px]">
		<lottie-player src="./pill.json" class="animate-pulse" background="transparent" speed="1"  loop autoplay></lottie-player>
		<h2 class="absolute text-4xl font-bold text-shadow-xl ">F.A.Q</h2>
	</div>
	<p class="w-10/12 md:w-4/12 text-center mt-5 text-lg code">Frequently Asked Questions</p>
</div>
<section class="w-11/12 md:w-8/12 mt-16" style="min-height:400px">	
	<div class="w-full grid grid-cols-2 gap-4">
		<div></div>

		<div>
			<button class="bg-black/30 text-indigo-600 px-4 py-1 code border border-indigo-900/20 rounded-sm hover:border-indigo-600 transition" on:click={()=>{}}>Name</button>
			<button class="bg-black/30 text-indigo-600 px-4 py-1 code border border-indigo-900/20 rounded-sm hover:border-indigo-600 transition" on:click={()=>{}}>Symbol</button>
			<button class="bg-black/30 text-indigo-600 px-4 py-1 code border border-indigo-900/20 rounded-sm hover:border-indigo-600 transition" on:click={()=>{}}>Total Supply</button>

			<div class="bg-black/40 p-5 rounded-lg text-indigo-600 border border-indigo-600/30 mt-4">
				<span>> subuPillsContract.methods.totalSupply().call()</span>
				<div>18</div>
			</div>
		</div>

	</div>
</section>
