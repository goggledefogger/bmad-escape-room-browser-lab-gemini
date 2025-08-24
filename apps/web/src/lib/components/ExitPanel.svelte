<script lang="ts">
	import {
		lastRequest,
		puzzleAInput,
		puzzleASolved,
		puzzleBInput,
		puzzleBSolved,
		puzzleCInput,
		puzzleCSolved,
		allPuzzlesSolved
	} from '$lib/stores/puzzle';

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

	function unlock() {
		if ($allPuzzlesSolved) {
			success = true;
		}
	}
</script>

<div id="exit-panel" class="bg-gray-700 p-3 md:p-6 rounded-lg shadow-md w-80 mx-auto md:mx-0">
	{#if success}
		<div class="text-center">
			<h3 class="text-2xl font-bold text-green-400">Access Granted!</h3>
			<p>You've escaped The Browser Lab!</p>
		</div>
	{:else}
		<h3 class="text-xl font-bold mb-4">Exit Panel</h3>
		<div class="space-y-4">
			<div class="flex flex-col">
				<label for="code-a" class="text-sm text-gray-400 mb-1">Console Code (3 digits)</label>
				<input
					id="code-a"
					type="text"
					bind:value={$puzzleAInput}
					class="bg-gray-800 rounded p-2 text-center font-mono text-lg"
					class:border-green-500={$puzzleASolved}
					class:border-gray-600={!$puzzleASolved}
					maxlength="3"
				/>
			</div>
			<div class="flex flex-col">
				<label for="code-b" class="text-sm text-gray-400 mb-1">Style Code (4 letters)</label>
				<input
					id="code-b"
					type="text"
					bind:value={$puzzleBInput}
					class="bg-gray-800 rounded p-2 text-center font-mono text-lg uppercase"
					class:border-green-500={$puzzleBSolved}
					class:border-gray-600={!$puzzleBSolved}
					maxlength="4"
				/>
			</div>
			<div class="flex flex-col">
				<label for="code-c" class="text-sm text-gray-400 mb-1">Network Code (3 digits)</label>
				<button on:click={requestAccess} class="text-xs text-cyan-400 hover:underline mb-1"
					>Make Request to get Code</button
				>
				<input
					id="code-c"
					type="text"
					bind:value={$puzzleCInput}
					class="bg-gray-800 rounded p-2 text-center font-mono text-lg"
					class:border-green-500={$puzzleCSolved}
					class:border-gray-600={!$puzzleCSolved}
					maxlength="3"
				/>
			</div>
		</div>
		<button
			on:click={unlock}
			disabled={!$allPuzzlesSolved}
			class="w-full bg-green-500 text-white px-4 py-2 rounded mt-6 disabled:bg-gray-600 disabled:cursor-not-allowed"
		>
			Unlock
		</button>
	{/if}
</div>

<style>
	input {
		border: 2px solid transparent;
	}
	.border-green-500 {
		border-color: #22c55e;
	}
	.border-gray-600 {
		border-color: #4b5563;
	}
</style>
