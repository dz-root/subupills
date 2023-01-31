<script>
	import { onMount } from 'svelte'
    import { userState } from '../../stores/userstate';
    import { popupState } from '../../stores/popup';
    import { fade, scale } from 'svelte/transition';
    import { quintOut } from "svelte/easing";
	import Web3 from 'web3';
	import { RECEIVER_ADDR } from '$lib/config';

    /* Data Structur */
    export let info = {
        name:'',
        url:'',
        price:'',
        description:'',        
        meta:{
            web_server: '',
            web_client: '',
            network: '',
            cryptanalysis: '',
            cracking:'',
            forensic: '',
            osint: '',
        }
    }

    $: isLoggin = false
    let checkout =()=>{}
    userState.subscribe((v) => isLoggin = v)
    
    onMount(()=>{

       checkout = async(price)=>{
            let transactionParameters = {
                nonce: '0x00', 
                gas: '21000', 
                to: RECEIVER_ADDR, 
                from: ethereum.selectedAddress, 
                value: Web3.utils.toWei(price), 
                chainId: '0x1',
            }

            const txHash = await ethereum.request({
                method: 'eth_sendTransaction',
                params: [transactionParameters],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.log(error));
        }
    })
    

</script>

{#if $popupState}
<div class="w-full h-screen flex items-center justify-center bg-primary/90 fixed top-0 left-0 z-30" transition:fade >
    <div class="w-11/12 md:w-6/12 bg-primary p-5 border border-indigo-900 rounded-lg shadow-indigo-900 shadow-md">
        <div class="grid md:grid-cols-2 gap-4">
            <div>
                <img src="./thumbs/{info.url}" class="rounded-lg" alt="" transition:scale>
            </div>
            <div class="flex flex-col justify-between relative">
                <button on:click={()=> popupState.set(false)} class="w-8 h-6 bg-red-600/50 rounded-full absolute top-0 right-0 hover:bg-red-600/80">x</button>
                <div>
                    <p class="text-xl mb-2 uppercase font-semibold text-indigo-600 code">{info.name}</p>
                </div>
                
                <div>
                    {#if info.meta.web_server != 0}
                        <div class="mb-1 text-sm text-indigo-600">Web server</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                        <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.web_server}%" transition:scale={{ delay: 100, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    {#if info.meta.web_client != 0}
                        <div class="mb-1 text-sm text-indigo-600">Web Client</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                        <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.web_client}%" transition:scale={{ delay: 250, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    {#if info.meta.cryptanalysis != 0}
                        <div class="mb-1 text-sm text-indigo-600">Cryptanalysis</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.cryptanalysis}%" transition:scale={{ delay: 350, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    {#if info.meta.network != 0}
                        <div class="mb-1 text-sm text-indigo-600">Network</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.network}%" transition:scale={{ delay: 450, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    
                    {#if info.meta.cracking != 0}
                        <div class="mb-1 text-sm text-indigo-600">Cracking</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.cracking}%" transition:scale={{ delay: 450, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    {#if info.meta.forensic != 0}
                        <div class="mb-1 text-sm text-indigo-600">Forensic</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.forensic}%" transition:scale={{ delay: 450, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}
                    {#if info.meta.osint != 0}
                        <div class="mb-1 text-sm text-indigo-600">OSINT</div>
                        <div class="w-full bg-indigo-900 rounded-full h-2.5 mb-4">
                            <div class="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style="width: {info.meta.psint}%" transition:scale={{ delay: 450, duration: 300, easing: quintOut }}></div>
                        </div>
                    {/if}

                    Description:
                    <p class="text-sm opacity-80 mt-2 code">{info.description}</p>
                </div>
         
                <div>
                    {#if $userState}
                        <button class="w-full flex justify-between p-5 rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-600/50 ease-in-out duration-300" on:click={()=> checkout(info.price)}>
                            <p class="font-semibold uppercase">
                                Mint It !
                            </p>
                            <div class="flex items-center">
                                <img src="./eth.png" class="w-6 h-6"alt="">
                                <p class="text-lg">{info.price} ETH</p>
                            </div>
                        </button>
                    {:else}
                        <div class="flex items-center">
                            <span class="flex items-center justify-center relative h-3 w-3 mr-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </span>
                            <span class="text-red-600">Please log in first to Metamask</span>
                        </div>
                        <button class="w-full flex justify-between p-5 rounded-md bg-indigo-700 cursor-not-allowed mt-2 shadow-lg hover:shadow-indigo-600/50 ease-in-out duration-300" on:click={()=> checkout(info.price)} disable>
                            <p class="font-semibold uppercase">
                                Mint It !
                            </p>
                            <div class="flex items-center">
                                <img src="./eth.png" class="w-6 h-6"alt="">
                                <p class="text-lg">{info.price} ETH</p>
                            </div>
                        </button>
                    {/if}
                </div> 
            </div>
        </div>

    </div>

</div>
{/if}