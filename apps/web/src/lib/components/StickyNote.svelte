<script lang="ts">
	export let code: string = '123';
	export let isVeilVisible: boolean = true;
</script>

<div class="relative p-6 bg-yellow-200 text-gray-800 rounded-lg shadow-lg w-64 h-64 flex flex-col">
	<h3 class="font-bold border-b border-yellow-400 pb-2 mb-2">Note to Self</h3>
	<div class="flex-grow flex items-center justify-center">
		<span class="text-5xl font-mono tracking-widest">{code}</span>
	</div>

	{#if isVeilVisible}
		<div
			class="veil absolute inset-0 bg-yellow-200 bg-opacity-80 backdrop-blur-sm flex items-center justify-center rounded-lg"
		>
			<span class="text-lg font-bold text-gray-700">Hidden Code</span>
		</div>
	{/if}
</div>
