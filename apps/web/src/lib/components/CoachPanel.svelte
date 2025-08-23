<script lang="ts">
	import { isVeilVisible, puzzleBRevealedWord, lastRequest } from '$lib/stores/puzzle';
	import { writable } from 'svelte/store';

	let command = '';
	let output = writable<string[]>([]);

	function toggleVeil() {
		isVeilVisible.update((v) => !v);
	}

	function executeCommand() {
		output.update((o) => [...o, `> ${command}`]);

		if (command.trim() === 'window.helperWord()') {
			const word = (window as any).helperWord();
			output.update((o) => [...o, word]);
			puzzleBRevealedWord.set(word);
		} else {
			output.update((o) => [...o, 'Command not found.']);
		}
		command = '';
	}
</script>

<div class="absolute right-0 top-0 h-full bg-gray-800 p-4 rounded-l-lg shadow-2xl w-80 flex flex-col">
	<h3 class="text-xl font-bold mb-4">Coach Panel</h3>

	<div class="flex-grow bg-gray-900 rounded p-2 space-y-4">
		<!-- Styles Tab -->
		<div>
			<h4 class="font-bold text-cyan-400 mb-2">Styles</h4>
			<div class="p-2 bg-gray-700 rounded">
				<label class="flex items-center justify-between cursor-pointer">
					<span class="font-mono text-sm">.veil</span>
					<input
						type="checkbox"
						class="sr-only"
						on:change={toggleVeil}
						checked={$isVeilVisible}
					/>
					<div class="relative">
						<div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
						<div
							class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition-transform"
						></div>
					</div>
				</label>
			</div>
		</div>

		<!-- Logs Tab -->
		<div class="flex flex-col">
			<h4 class="font-bold text-cyan-400 mb-2">Logs</h4>
			<div
				class="bg-black rounded p-2 font-mono text-sm text-green-400 overflow-y-auto h-24"
			>
				{#each $output as line}
					<p>{line}</p>
				{/each}
			</div>
			<form on:submit|preventDefault={executeCommand} class="flex mt-2">
				<input
					type="text"
					bind:value={command}
					class="flex-grow bg-gray-700 rounded-l px-2 py-1 focus:outline-none"
					placeholder="Enter command..."
				/>
				<button type="submit" class="bg-cyan-500 text-white px-4 py-1 rounded-r">Run</button>
			</form>
		</div>

		<!-- Requests Tab -->
		<div class="flex flex-col flex-grow">
			<h4 class="font-bold text-cyan-400 mb-2">Requests</h4>
			<div
				class="flex-grow bg-black rounded p-2 font-mono text-xs text-green-400 overflow-y-auto h-32"
			>
				{#if $lastRequest}
					<div class="text-white">
						<p><span class="font-bold">URL:</span> {$lastRequest.url}</p>
						<p><span class="font-bold">Status:</span> {$lastRequest.status}</p>
					</div>
					<div class="mt-2">
						<p class="font-bold text-white">Headers:</p>
						{#each Object.entries($lastRequest.headers) as [key, value]}
							<p><span class="text-yellow-400">{key}:</span> {value}</p>
						{/each}
					</div>
				{:else}
					<p>No requests made yet.</p>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	input:checked ~ .relative .dot {
		transform: translateX(100%);
		background-color: #2dd4bf;
	}
</style>
