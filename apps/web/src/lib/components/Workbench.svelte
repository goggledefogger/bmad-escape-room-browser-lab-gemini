<script lang="ts">
	import CoachPanel from './CoachPanel.svelte';
	import ExitPanel from './ExitPanel.svelte';
	import StickyNote from './StickyNote.svelte';
	import Onboarding from './Onboarding.svelte';
	import { showOnboarding } from '$lib/stores/ui';
</script>

{#if $showOnboarding}
	<Onboarding />
{/if}

<div
	class="w-[960px] h-[720px] bg-gray-800 rounded-lg shadow-2xl p-8 flex justify-between relative"
>
	<div class="flex flex-col">
		<h1 class="text-3xl font-bold text-cyan-400 mb-6">The Browser Lab</h1>
		<div class="flex-grow flex items-center relative">
			<StickyNote />
		</div>
		<ExitPanel />
	</div>

	<CoachPanel />
</div>
