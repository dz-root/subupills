<script>
	import { onMount } from 'svelte'
	import Web3 from 'web3'
	import { userState } from '../../stores/userstate';
	import {SITE_NAME} from '$lib/config.js'
	import { Drawer } from 'flowbite';

	let drawer =''
	let web3 = null
	let account = ''
	let ethBalance = ''
	let connect =()=>{}

	onMount(async ()=>{

		web3 = new Web3(Web3.givenProvider)
		connect =()=>{
			ethereum.request({ method: "eth_requestAccounts" }).then((accounts)=>{
				account = accounts[0]	
				userState.set(true)
				web3.eth.getBalance(account).then((wei)=>{
					ethBalance = web3.utils.fromWei(wei, 'ether')
				})
			})
		}

		const targetEl = document.getElementById('drawer-js-example');
		const options = {
			placement: 'right',
			backdrop: true,
			bodyScrolling: false,
			edge: false,
			edgeOffset: '',
			backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30',
		};
		drawer = new Drawer(targetEl, options)
		drawer.hide();

	})
	
</script>

<header class="w-full flex fixed items-center justify-center shadow-indigo-900/30 shadow-2xl bg-primary/95 z-10">
	<div class="w-11/12 md:w-8/12 flex items-center justify-between py-4">
		<div class="logo text-lg font-semibold">
			☠️ {SITE_NAME} 
		</div>
		<div class="flex items-center">
			{#if $userState}
				<p class="mr-2">{ethBalance.substr(0,6)}<span class="text-sm font-bold ml-1">ETH</span></p>
			{/if}
			<button class="hidden md:flex items-center bg-indigo-900 px-4 py-2 rounded-md" on:click={()=> connect()}>
				{#if $userState}
					<span class="flex relative h-3 w-3 mr-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					</span>
					{account.substr(0,6)}...{account.substr(-4)}
				{:else}
					<img src="./Metamask.svg" class="w-6 h-6 mr-2" alt="">
					Connect to MetaMask
				{/if}
			</button>
			<button class="flex items-center border border-indigo-900 px-4 py-2 ml-4 rounded-md" on:click={()=>drawer.show()}>
				<svg class="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
				  </svg>
			</button>
		</div>

</header>

<div id="drawer-js-example" class="fixed z-40 h-screen p-4 overflow-y-auto bg-primary w-80" tabindex="-1" aria-labelledby="drawer-js-label">
	<h5 id="drawer-js-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info</h5>
	<button on:click={()=>drawer.hide()} id="drawer-hide-button" type="button" aria-controls="drawer-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
	   <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
	   <span class="sr-only">Close menu</span>
	</button>
	<button class="flex sm:hidden w-full items-center bg-indigo-900 px-4 py-2 rounded-md" on:click={()=> connect()}>
		{#if $userState}
			<span class="flex relative h-3 w-3 mr-2">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
			</span>
			{account.substr(0,6)}...{account.substr(-4)}
		{:else}
			<img src="./Metamask.svg" class="w-6 h-6 mr-2" alt="">
			Connect to MetaMask
		{/if}
	</button>

 </div>