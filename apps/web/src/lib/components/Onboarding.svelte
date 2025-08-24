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
			Your mission is to find three secret codes hidden in this page. You'll need to use your
			browser's DevTools to uncover them.
		</p>
		<div class="text-left mb-6 space-y-2 text-gray-300">
			<p>
				<strong class="text-cyan-400">1. The Console:</strong> Your first clue is waiting in the
				JavaScript console.
			</p>
			<p>
				<strong class="text-cyan-400">2. The Elements Panel:</strong> Inspect the HTML and CSS.
				Sometimes things are hidden in plain sight.
			</p>
			<p>
				<strong class="text-cyan-400">3. The Network Tab:</strong> Watch the network requests. A
				special header might hold the key.
			</p>
		</div>
		<p class="mb-4">
			Stuck? The <strong class="text-cyan-400">Coach Panel</strong> on the right has tools to
			help you.
		</p>
		<p class="text-xs text-gray-400 mb-6">(⌥⌘I on macOS or Ctrl+Shift+I on Windows/Linux)</p>
		<button on:click={close} class="bg-cyan-500 text-white px-6 py-2 rounded">Let's Go!</button>
	</div>
</div>
