<script lang="ts">
	import { writable } from 'svelte/store';

	// Puzzle A State
	export const isVeilVisible = writable(true);
	export const puzzleACode = writable('214');

	// Puzzle B State
	export const puzzleBWord = writable('OPEN');
	export const puzzleBRevealedWord = writable('');

	// Puzzle C State
	export const puzzleCCode = writable('370');
	export const puzzleCRevealedCode = writable('');
	export const lastRequest = writable<any>(null);
</script>
