# Decentralized Exchange

Most of us are used to buying crypto through centralized exchanges - Binance, Coinbase, etc. Often times, we resolve to the same platforms when trading between different cryptocurrencies.
However, centralized exchanges are rife with problems. They can get hacked and lose all their user's money, or worse yet, the company behind the exchange can close up shop and run away with all the money.
This may seem extreme, but this is not fiction.

Centralized exchanges typically work on an order-book system. Alice puts up a listing saying she is willing to sell 100 of 'TokenA' for 50 of 'TokenB', and the listing is added to the order book. At some point, if Bob comes along and says he wants to buy 100 of 'TokenA' for 50 of 'TokenB' - their orders are matched together, and the trade is executed.

## Market Makers

Uniswap is an Automated Market Maker. Let's try to understand what that means.

Market Makers are entities that provide liquidity (assets) to trading markets. In non-orderbook systems, liquidity is what allows trading to be possible. That means if you want to sell BTC to buy ETH, the exchange must have an ETH balance you can purchase from in exchange for BTC. Some trading pairs have very high liquidity (eg. BTC/ETH trading pair), but some have extremely low or no liquidity at all (eg. scam tokens, or newly created tokens).

A DEX must have enough liquidity to function and serve as an alternative to centralized exchanges.

One way to get that liquidity is that the developers (or investors) put in their own money and become market makers. However, this is not realistic as they would need a huge amount of money to provide enough liquidity for all possible trading pairs. Moreover, this hurts decentralization, as the developers/investors would hold all the power in the market.

Another way, which Uniswap implemented, was to let anyone be a market maker - and this is what makes Uniswap an automated market maker. Any user can deposit funds to a specific trading pair and add liquidity, and in exchange earn money for doing so through trading fees taken from the users.

## Features

- Anyone can add liquidity to become a liquidity provider
- Liquidity providers can remove their liquidity and get back their crypto whenever they want
- Users can swap between assets present in the trading pool, assuming there is enough liquidity
- Users are charged a small trading fees, that gets distributed amongst the liquidity providers so they can earn for providing liquidity

## Installation

Install  dependicies before starting the development server.

```sh
npm i --yes
```

To start the dev server

```sh
npm start
```
