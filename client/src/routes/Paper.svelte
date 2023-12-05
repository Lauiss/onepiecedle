<script>
    import Fold from './Fold.svelte'
</script>

<div class="paper" role="button">
    <slot></slot>
    <Fold></Fold>
</div>

<style>
    .paper {
        border-radius: 0.5rem;
        padding: 0.55rem;
        background: url('/paper.png') #D0B285;
        background-blend-mode: color-burn;
        background-position: center;
        background-size: cover;
        position: relative;
        border: 1px solid #462A1030;
        cursor: pointer;
    }

    .paper :global(svg) {
        position: absolute;
        right: 0;
        top: 0;
        height: calc(100% + 2px);
        width: 30px;
        margin: -1px;
    }
</style>