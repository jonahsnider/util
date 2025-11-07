import { expect, it } from 'vitest';
import { newDeck } from './cards.js';
import { concatIterables } from './iterable/index.js';

it('creates a new deck of cards', () => {
	const deck = newDeck();

	expect(deck.length).toBe(52);
});

it('does not reuse cards in a new deck', () => {
	const deck1 = newDeck();
	const deck2 = newDeck();

	expect(new Set(concatIterables(deck1, deck2)).size).toBe(deck1.length + deck2.length);
});
