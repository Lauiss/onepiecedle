<script>
  import Paper from './Paper.svelte';
  import Text from './Text.svelte';
</script>

<svelte:head>
	<title>One Piecedle</title>
	<meta name="Jouez à One Piecedle !" content="Jeu One Piecedle pour deviner le personnage de One Piece" />
</svelte:head>

<div class="menu">
	<Paper>
		<Text size={2}>Classique</Text>
	</Paper>
		<Paper>
		<Text size={2}>Emojis</Text>
	</Paper>
		<Paper>
		<Text size={2}>Fruits du démon</Text>
	</Paper>
	<Paper>
		<Text size={2}>Mode bizzaroïde de fouuuuu</Text>
	</Paper>
</div>

<style>
	.menu {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>