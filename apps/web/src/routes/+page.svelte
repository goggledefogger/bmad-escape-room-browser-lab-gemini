<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Workbench from '$lib/components/Workbench.svelte';
	import { puzzleBWord } from '$lib/stores/puzzle';
	import { get } from 'svelte/store';

	onMount(() => {
		// Define the global helper function for Puzzle B
		(window as any).helperWord = () => {
			const word = get(puzzleBWord);
			console.log(`The secret word is: %c${word}`, 'color: cyan; font-size: 16px;');
			return word;
		};
	});
</script>

<main class="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center font-sans">
	<Workbench />
</main>
