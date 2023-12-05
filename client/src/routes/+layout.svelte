<script>
	import Header from './Header.svelte';
	import Text from './Text.svelte';
	import './styles.css';
    import './fonts.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<Text size={3}>OnePiecedle - 2023</Text>
	</footer>
</div>

<style>
	.app {
		min-height: 100%;
		display: grid;
		grid-template-rows: min-content 1fr min-content;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 27rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
