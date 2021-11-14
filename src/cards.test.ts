import {newDeck} from './cards';

it('creates a new deck of cards', () => {
	const deck = newDeck();

	expect(deck.length).toBe(52);
});
