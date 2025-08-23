<script lang="ts">
	import CoachPanel from './CoachPanel.svelte';
	import ExitPanel from './ExitPanel.svelte';
	import StickyNote from './StickyNote.svelte';
	import { isVeilVisible, puzzleACode } from '$lib/stores/puzzle';
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
			<StickyNote code={$puzzleACode} isVeilVisible={$isVeilVisible} />
			<p class="absolute -top-8 left-0 text-sm text-gray-400">
				Hint: Some styles can be... removed.
			</p>
		</div>
		<ExitPanel />
		<p class="text-xs text-gray-500 mt-4 text-center">
			Hint: Look for a function in the footer... maybe `window.helperWord()`?
		</p>
	</div>

	<CoachPanel />
</div>
