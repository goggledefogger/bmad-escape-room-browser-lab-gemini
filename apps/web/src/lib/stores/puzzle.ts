import { writable, derived } from 'svelte/store';

// Puzzle A State (Console)
export const puzzleACode = writable('123');
export const puzzleAInput = writable('');
export const puzzleASolved = derived(
	[puzzleACode, puzzleAInput],
	([$puzzleACode, $puzzleAInput]) => $puzzleACode === $puzzleAInput
);

// New Puzzle B State (CSS)
export const puzzleBWord = writable('OPEN');
export const puzzleBInput = writable('');
export const puzzleBSolved = derived(
	[puzzleBWord, puzzleBInput],
	([$puzzleBWord, $puzzleBInput]) => $puzzleBWord.toLowerCase() === $puzzleBInput.toLowerCase()
);

// Puzzle C State (Network)
export const puzzleCCode = writable('370');
export const puzzleCInput = writable('');
export const puzzleCSolved = derived(
	[puzzleCCode, puzzleCInput],
	([$puzzleCCode, $puzzleCInput]) => $puzzleCCode === $puzzleCInput
);
export const lastRequest = writable<any>(null);

// Shared State (for CSS puzzle B)
export const isNoteTextColorVisible = writable(false);

// Game State
export const allPuzzlesSolved = derived(
	[puzzleASolved, puzzleBSolved, puzzleCSolved],
	([$puzzleASolved, $puzzleBSolved, $puzzleCSolved]) =>
		$puzzleASolved && $puzzleBSolved && $puzzleCSolved
);
