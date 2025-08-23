<script lang="ts">
	import { showOnboarding } from '$lib/stores/ui';

	function close() {
		showOnboarding.set(false);
	}
</script>

<div class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
	<div class="bg-gray-800 p-8 rounded-lg shadow-2xl text-center max-w-md">
		<h2 class="text-2xl font-bold text-cyan-400 mb-4">Welcome to The Browser Lab!</h2>
		<p class="mb-6">
			You can use your browser's real DevTools to solve the puzzles (press ⌥⌘I on macOS or
			Ctrl+Shift+I on Windows/Linux), or use our built-in Coach Panel on the right.
		</p>
		<button on:click={close} class="bg-cyan-500 text-white px-6 py-2 rounded">Got It!</button>
	</div>
</div>
