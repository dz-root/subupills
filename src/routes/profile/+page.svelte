<script>
	import { onMount } from 'svelte'
    import { userState , userProfil} from '../../stores/userstate'
	import { SITE_NAME } from '$lib/config'
	import {web3Init} from '$lib/web3init'
	import { supabase } from '$lib/supabaseClient';


    async function uploadImage(e){
        let file = e.target.files[0]
        const {data, error} = await supabase.storage.from('pp').upload($userProfil.address+"/"+$userProfil.name, file)
    }
	onMount(async ()=>{
		web3Init()
	})

</script>

<svelte:head>
	<title>{SITE_NAME} - Profile</title>
	<meta name="description" content="In this drugstore y'll find all kinds of Hackers pill's: web, cracking, networking, cryptanalysis, osint and more... " />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin&display=swap" rel="stylesheet">
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<section class="w-11/12 md:w-8/12 mt-16" style="min-height:400px">	
    <h2>Update Profile</h2>
	<input type="text" class="w-full bg-transparent border-b text-indigo-600 border-indigo-600" value="{$userProfil.name}">
    
    <div class="flex flex-col items-center justify-center w-full">
        <img src="{$userProfil.image}" alt="" class="rounded-full w-16 h-16">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-indigo-900 border-dashed rounded-lg cursor-pointer bg-black/20 hover:bg-black/30 transition ">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-indigo-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-indigo-800"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-indigo-800">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" on:input={(e) => uploadImage(e)}/>
        </label>
    </div> 

    
</section>
