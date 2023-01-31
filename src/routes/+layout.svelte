<script>
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	import './styles.css';
</script>

<div class="app">
	<Header />

	<main class="w-full flex flex-col items-center justify-center pt-5">
		<slot />
	</main>
	<Footer />

</div>