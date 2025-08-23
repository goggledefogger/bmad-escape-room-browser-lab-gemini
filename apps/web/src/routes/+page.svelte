<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Workbench from '$lib/components/Workbench.svelte';
	import { puzzleACode, puzzleBWord } from '$lib/stores/puzzle';
	import { get } from 'svelte/store';

	onMount(() => {
		// New Puzzle A: The Welcome Console Message
		const code = get(puzzleACode);
		const message = `%cWelcome, Agent!\\n%cThe first code is: %c${code}`;
		const styles = [
			'color: cyan; font-size: 24px; font-weight: bold;',
			'color: white; font-size: 16px;',
			'color: yellow; font-size: 16px; font-family: monospace;'
		];
		console.log(message, ...styles);

		// Puzzle B: The helper function (previously puzzle B)
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
