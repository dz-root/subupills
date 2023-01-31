<script>
	import Popup from '$lib/components/popup.svelte';
	import { popupState } from '../../stores/popup';
	import {manifest} from '$lib/config.js'

	let info
	let pillType = 'all'

	/* sending data to popuop*/
	function showDetails(data){
		info = {...data}
	}
	
	/* filter pills */
	function filter(type){
		pillType = type
	}
</script>

	<div class="flex justify-center sticky top-24 z-10">
		<button class="text-sm md:text-base bg-primary border border-indigo-900/70 rounded-full px-3 py-1 mx-1 code hover:text-indigo-500 ease-in-out duration-150 {pillType== 'all' ? 'text-indigo-500 font-semibold' :'text-indigo-700'}" on:click={()=> pillType= 'all'}>All</button>
		<button class="text-sm md:text-base bg-primary border border-indigo-900/70 rounded-full px-3 py-1 mx-1 code hover:text-indigo-500 ease-in-out duration-150 {pillType== 'web' ? 'text-indigo-500 font-semibold' :'text-indigo-700'}" on:click={()=> filter("web")}>Web</button>
		<button class="text-sm md:text-base bg-primary border border-indigo-900/70 rounded-full px-3 py-1 mx-1 code hover:text-indigo-500 ease-in-out duration-150 {pillType== 'cracking' ? 'text-indigo-500 font-semibold' :'text-indigo-700'}" on:click={()=> filter("cracking")}>Cracking</button>
		<button class="text-sm md:text-base bg-primary border border-indigo-900/70 rounded-full px-3 py-1 mx-1 code hover:text-indigo-500 ease-in-out duration-150 {pillType== 'network' ? 'text-indigo-500 font-semibold' :'text-indigo-700'}" on:click={()=> filter("network")}>Networking</button>
		<button class="text-sm md:text-base bg-primary border border-indigo-900/70 rounded-full px-3 py-1 mx-1 code hover:text-indigo-500 ease-in-out duration-150 {pillType== 'osint' ? 'text-indigo-500 font-semibold' :'text-indigo-700'}" on:click={()=> filter("osint")}>OSINT</button>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6">
		{#each manifest as d }
			{#if (pillType=="all")} 
				<button class="shadow border border-indigo-600/5 rounded-md hover:opacity-60 hover:shadow-lg hover:shadow-indigo-600/50 hover:border-indigo-600 transition ease-in-out duration-150 " on:click={()=> {
					showDetails({
						name: d.name, 
						url:d.url, 
						price:d.price, 
						description:d.description,
						meta:{
							web_server: d.meta.web_server,
							web_client: d.meta.web_client,
							network: d.meta.network,
							cryptanalysis: d.meta.Cryptanalysis,
							cracking:d.meta.Cracking,
							forensic: d.meta.forensic,
							osint: d.meta.osint,
						}
					})
					popupState.set(true)
				}}>
					<img src="./thumbs/{d.url}" alt="" class="w-full rounded-md">
				</button>
			{/if}

			{#if (d.type == pillType)} 
				<button class="shadow border border-indigo-600/5 rounded-md hover:opacity-60 hover:shadow-lg hover:shadow-indigo-600/50 hover:border-indigo-600 transition ease-in-out duration-150 " on:click={()=> {
					showDetails({
						name: d.name, 
						url:d.url, 
						price:d.price, 
						description:d.description,
						meta:{
							web_server: d.meta.web_server,
							web_client: d.meta.web_client,
							network: d.meta.network,
							cryptanalysis: d.meta.Cryptanalysis,
							cracking:d.meta.Cracking,
							forensic: d.meta.forensic,
							osint: d.meta.osint,
						}
					})
					popupState.set(true)
				}}>
					<img src="./thumbs/{d.url}" alt="" class="w-full rounded-md">
				</button>
			{/if}
		{/each}
	</div>


<Popup {info}/>


