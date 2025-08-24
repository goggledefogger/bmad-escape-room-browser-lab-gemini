<script lang="ts">
	import CoachPanel from './CoachPanel.svelte';
	import ExitPanel from './ExitPanel.svelte';
	import StickyNote from './StickyNote.svelte';
	import Onboarding from './Onboarding.svelte';
	import { showOnboarding, showCoachPanel } from '$lib/stores/ui';
</script>

{#if $showOnboarding}
	<Onboarding />
{/if}

<div
	class="wb-container w-full max-w-5xl h-auto max-h-[98svh] md:max-h-[720px] bg-gray-800 rounded-lg shadow-2xl p-8 relative overflow-hidden"
>
	<div class="vh-compact">
		<div class="wb-grid grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 h-full">
		<!-- Main Content Column -->
		<div class="flex flex-col min-w-0 h-full">
			<div>
				<h1 class="wb-title text-3xl font-bold text-cyan-400 mb-6 flex-shrink-0">The Browser Lab</h1>
				<div class="relative">
					<StickyNote />
				</div>
			</div>

			<div class="mt-auto flex-shrink-0 self-center md:self-end">
				<ExitPanel />
			</div>
		</div>

		<!-- Coach Panel Column -->
		<div class="hidden md:block w-80 h-full flex-shrink-0">
			{#if $showCoachPanel}
				<CoachPanel />
			{/if}
		</div>
		</div>
	</div>
	{#if !$showCoachPanel}
		<button
			on:click={() => showCoachPanel.set(true)}
			class="absolute top-8 right-0 transform md:translate-x-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-r-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
			aria-label="Open coach panel"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.546-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</button>
	{/if}

	<!-- Mobile Coach Panel (Overlay) -->
	{#if $showCoachPanel}
		<div class="md:hidden absolute inset-0 z-10">
			<CoachPanel />
		</div>
	{/if}
 </div>

<style>
@media (max-height: 800px) {
	.wb-container { padding: 0.75rem !important; }
	.wb-grid { gap: 0.75rem !important; }
	.wb-title { margin-bottom: 0.5rem !important; }
}
@media (max-height: 700px) {
	.wb-container { padding: 0.5rem !important; }
	.wb-grid { gap: 0.5rem !important; }
	.wb-title { margin-bottom: 0.25rem !important; }
}
@media (max-height: 760px) {
	.vh-compact { transform: scale(0.92); transform-origin: center bottom; }
}
@media (max-height: 700px) {
	.vh-compact { transform: scale(0.88); }
}
@media (max-height: 640px) {
	.vh-compact { transform: scale(0.84); }
}
@media (max-height: 580px) {
	.vh-compact { transform: scale(0.8); }
	.wb-container { padding: 0.25rem !important; }
	.wb-grid { gap: 0.25rem !important; }
}
@media (max-height: 540px) {
	.wb-container { padding: 0rem !important; }
	.wb-title { margin-bottom: 0.125rem !important; }
}
</style>
