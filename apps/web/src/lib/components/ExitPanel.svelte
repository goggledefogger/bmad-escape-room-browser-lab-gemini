<script lang="ts">
	import {
		lastRequest,
		puzzleACode,
		puzzleBRevealedWord,
		puzzleBWord,
		puzzleCCode
	} from '$lib/stores/puzzle';
	import { get } from 'svelte/store';

	let enteredCode = '';
	let success = false;

	async function requestAccess() {
		const res = await fetch('/api/permit');
		const data = await res.json();
		const headers = Object.fromEntries(res.headers.entries());

		lastRequest.set({
			url: res.url,
			status: res.status,
			statusText: res.statusText,
			headers,
			body: data
		});
	}

	function handleKeyPress(key: string) {
		if (success) return;
		if (key === 'clear') {
			enteredCode = '';
		} else if (enteredCode.length < 10) {
			enteredCode += key;
		}
	}

	function checkSolution() {
		const solution = `${get(puzzleACode)}${get(puzzleBWord)}${get(puzzleCCode)}`;
		const revealedWord = get(puzzleBRevealedWord);

		// A small cheat for the user - if they solved puzzle B, we use the word.
		// Otherwise, we check against the full code. This is a UX choice to guide them.
		const finalSolution = revealedWord ? `${get(puzzleACode)}${revealedWord}${get(puzzleCCode)}` : solution;


		if (enteredCode === finalSolution) {
			success = true;
		} else {
			// Add a shake animation on failure
			const panel = document.getElementById('exit-panel');
			panel?.classList.add('animate-shake');
			setTimeout(() => {
				panel?.classList.remove('animate-shake');
				enteredCode = '';
			}, 500);
		}
	}
</script>

<div id="exit-panel" class="bg-gray-700 p-6 rounded-lg shadow-md mt-8 w-64">
	{#if success}
		<div class="text-center">
			<h3 class="text-2xl font-bold text-green-400">Access Granted!</h3>
			<p>You've escaped The Browser Lab!</p>
		</div>
	{:else}
		<h3 class="text-xl font-bold mb-4">Exit Panel</h3>
		<button on:click={requestAccess} class="w-full bg-cyan-500 text-white px-4 py-2 rounded mb-4"
			>Request Access</button
		>
		<div class="bg-gray-800 rounded p-2 text-right font-mono text-2xl h-12 mb-4">{enteredCode}</div>
		<div class="grid grid-cols-3 gap-2">
			{#each ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as key}
				<button on:click={() => handleKeyPress(key)} class="p-2 bg-gray-600 rounded">{key}</button>
			{/each}
			<button on:click={() => handleKeyPress('clear')} class="p-2 bg-gray-600 rounded col-span-1"
				>C</button
			>
			<button on:click={() => handleKeyPress('0')} class="p-2 bg-gray-600 rounded">0</button>
		</div>
		<button on:click={checkSolution} class="w-full bg-green-500 text-white px-4 py-2 rounded mt-4"
			>Unlock</button
		>
	{/if}
</div>

<style>
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}

	.animate-shake {
		animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
</style>
