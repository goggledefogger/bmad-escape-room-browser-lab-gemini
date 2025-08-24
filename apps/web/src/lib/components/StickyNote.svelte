<script lang="ts">
	import { isNoteTextColorVisible } from '$lib/stores/puzzle';
</script>

<div
	class="relative p-6 bg-yellow-200 text-yellow-200 rounded-lg shadow-lg w-full h-full max-w-[256px] max-h-[256px] aspect-square flex flex-col"
>
	<h3 class="font-bold border-b border-yellow-400 pb-2 mb-2 text-gray-800">Note to Self</h3>
	<div class="flex-grow flex items-center justify-center">
		<span
			class="text-5xl font-mono tracking-widest"
			class:text-gray-800={$isNoteTextColorVisible}
		>
			OPEN
		</span>
	</div>
</div>
