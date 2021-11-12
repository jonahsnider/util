/**
 * The rank of a card going from ace to king, where aces are `1`.
 *
 * @public
 */
export enum Rank {
	Ace = 1,
	Two,
	Three,
	Four,
	Five,
	Six,
	Seven,
	Eight,
	Nine,
	Ten,
	Jack,
	Queen,
	King,
}

/**
 * A suit of cards, sorted in alphabetical order.
 *
 * @public
 */
export enum Suit {
	Clubs,
	Diamonds,
	Hearts,
	Spades,
}

/**
 * A playing card.
 *
 * @public
 */
export interface Card {
	rank: Rank;
	suit: Suit;
}

const deck = [
	{rank: Rank.Ace, suit: Suit.Clubs},
	{rank: Rank.Two, suit: Suit.Clubs},
	{rank: Rank.Three, suit: Suit.Clubs},
	{rank: Rank.Four, suit: Suit.Clubs},
	{rank: Rank.Five, suit: Suit.Clubs},
	{rank: Rank.Six, suit: Suit.Clubs},
	{rank: Rank.Seven, suit: Suit.Clubs},
	{rank: Rank.Eight, suit: Suit.Clubs},
	{rank: Rank.Nine, suit: Suit.Clubs},
	{rank: Rank.Ten, suit: Suit.Clubs},
	{rank: Rank.Jack, suit: Suit.Clubs},
	{rank: Rank.Queen, suit: Suit.Clubs},
	{rank: Rank.King, suit: Suit.Clubs},
	{rank: Rank.Ace, suit: Suit.Diamonds},
	{rank: Rank.Two, suit: Suit.Diamonds},
	{rank: Rank.Three, suit: Suit.Diamonds},
	{rank: Rank.Four, suit: Suit.Diamonds},
	{rank: Rank.Five, suit: Suit.Diamonds},
	{rank: Rank.Six, suit: Suit.Diamonds},
	{rank: Rank.Seven, suit: Suit.Diamonds},
	{rank: Rank.Eight, suit: Suit.Diamonds},
	{rank: Rank.Nine, suit: Suit.Diamonds},
	{rank: Rank.Ten, suit: Suit.Diamonds},
	{rank: Rank.Jack, suit: Suit.Diamonds},
	{rank: Rank.Queen, suit: Suit.Diamonds},
	{rank: Rank.King, suit: Suit.Diamonds},
	{rank: Rank.Ace, suit: Suit.Hearts},
	{rank: Rank.Two, suit: Suit.Hearts},
	{rank: Rank.Three, suit: Suit.Hearts},
	{rank: Rank.Four, suit: Suit.Hearts},
	{rank: Rank.Five, suit: Suit.Hearts},
	{rank: Rank.Six, suit: Suit.Hearts},
	{rank: Rank.Seven, suit: Suit.Hearts},
	{rank: Rank.Eight, suit: Suit.Hearts},
	{rank: Rank.Nine, suit: Suit.Hearts},
	{rank: Rank.Ten, suit: Suit.Hearts},
	{rank: Rank.Jack, suit: Suit.Hearts},
	{rank: Rank.Queen, suit: Suit.Hearts},
	{rank: Rank.King, suit: Suit.Hearts},
	{rank: Rank.Ace, suit: Suit.Spades},
	{rank: Rank.Two, suit: Suit.Spades},
	{rank: Rank.Three, suit: Suit.Spades},
	{rank: Rank.Four, suit: Suit.Spades},
	{rank: Rank.Five, suit: Suit.Spades},
	{rank: Rank.Six, suit: Suit.Spades},
	{rank: Rank.Seven, suit: Suit.Spades},
	{rank: Rank.Eight, suit: Suit.Spades},
	{rank: Rank.Nine, suit: Suit.Spades},
	{rank: Rank.Ten, suit: Suit.Spades},
	{rank: Rank.Jack, suit: Suit.Spades},
	{rank: Rank.Queen, suit: Suit.Spades},
	{rank: Rank.King, suit: Suit.Spades},
] as const;

/**
 * Get a sorted deck of cards.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * import { shuffle } from '@jonahsnider/util';
 *
 * const deck = newDeck();
 * ```
 *
 * @returns A sorted deck of cards
 *
 * @public
 */
export function newDeck(): Card[] {
	return [...deck];
}
