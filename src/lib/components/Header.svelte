<script>
	import { onMount } from 'svelte'
	import Web3 from 'web3'
	import { userState } from '../../stores/userstate';
	import {SITE_NAME} from '$lib/config.js'

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
			<button class="flex items-center bg-indigo-800 px-4 py-2 rounded-md" on:click={()=> connect()}>
				{#if $userState}
					<span class="flex relative h-3 w-3 mr-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
					</span>
					{account.substr(0,6)}...{account.substr(-4)}
				{:else}
					<img src="./Metamask.svg" class="w-8 h-8 mr-2" alt="">
					Connect to MetaMask
				{/if}
			</button>
		</div>
		
</header>