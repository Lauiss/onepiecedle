<script>
    export let as = 'p';
    export let size = 1;

    let sizeClass = `size-${size}`
</script>

<svelte:element this={as} class={sizeClass + " text"} >
<slot></slot>
</svelte:element>

<style>

    .size-1 {
        font-size: 3rem;
		text-shadow: 1px 1px 0 #000,
                    -1px 1px 0 #000,
                    1px -1px 0 #000,
                    -1px -1px 0 #000,
                    0px 1px 0 #000,
                    0px -1px 0 #000,
                    -1px 0px 0 #000,
                    1px 0px 0 #000,
                    2px 2px 0 #000,
                    -2px 2px 0 #000,
                    2px -2px 0 #000,
                    -2px -2px 0 #000,
                    0px 2px 0 #000,
                    0px -2px 0 #000,
                    -2px 0px 0 #000,
                    2px 0px 0 #000,
                    1px 2px 0 #000,
                    -1px 2px 0 #000,
                    1px -2px 0 #000,
                    -1px -2px 0 #000,
                    2px 1px 0 #000,
                    -2px 1px 0 #000,
                    2px -1px 0 #000,
                    -2px -1px 0 #000;
    }

    .size-2 {
        font-size: 2rem;
		text-shadow: 1px 1px 0 #000,
                    -1px 1px 0 #000,
                    1px -1px 0 #000,
                    -1px -1px 0 #000,
                    0px 1px 0 #000,
                    0px -1px 0 #000,
                    -1px 0px 0 #000,
                    1px 0px 0 #000,
                    2px 2px 0 #000,
                    -2px 2px 0 #000,
                    2px -2px 0 #000,
                    -2px -2px 0 #000,
                    0px 2px 0 #000,
                    0px -2px 0 #000,
                    -2px 0px 0 #000,
                    2px 0px 0 #000,
                    1px 2px 0 #000,
                    -1px 2px 0 #000,
                    1px -2px 0 #000,
                    -1px -2px 0 #000,
                    2px 1px 0 #000,
                    -2px 1px 0 #000,
                    2px -1px 0 #000,
                    -2px -1px 0 #000;
    }

    .size-3 {
        font-size: 1.25rem;
        -webkit-text-stroke: black;
        -webkit-text-stroke-width: 1px;
    }
    
	.text {
		font-family: Luckiest Guy;
		color: white;
		text-transform: uppercase;
	}
</style>