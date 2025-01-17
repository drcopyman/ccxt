import Exchange from './abstract/blockchaincom.js';
import { Int, Order, OrderSide, OrderType } from './base/types.js';
/**
 * @class blockchaincom
 * @extends Exchange
 */
export default class blockchaincom extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchL3OrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    fetchL2OrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    parseOrderState(state: any): string;
    parseOrder(order: any, market?: any): Order;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<{
        id: string;
        info: any;
    }>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<{
        symbol: string;
        info: any;
    }>;
    fetchTradingFees(params?: {}): Promise<{}>;
    fetchCanceledOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrdersByState(state: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
    }>;
    parseTransactionState(state: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: any;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        comment: any;
        fee: any;
    };
    fetchWithdrawalWhitelist(params?: {}): Promise<any[]>;
    fetchWithdrawalWhitelistByCurrency(code: string, params?: {}): Promise<any[]>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: any;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        comment: any;
        fee: any;
    }>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawal(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: any;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        comment: any;
        fee: any;
    }>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchDeposit(id: string, code?: string, params?: {}): Promise<{
        info: any;
        id: any;
        txid: string;
        timestamp: number;
        datetime: string;
        network: any;
        addressFrom: any;
        address: string;
        addressTo: string;
        tagFrom: any;
        tag: any;
        tagTo: any;
        type: any;
        amount: number;
        currency: any;
        status: string;
        updated: any;
        comment: any;
        fee: any;
    }>;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
