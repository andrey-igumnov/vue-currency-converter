<template>
    <div>
        <input type="tel" v-model="value" @keyup="onChange">
        <select v-model="fromCurrency" @change="onChange">
           <option v-for="currency in currencies" v-bind:value="currency.code">{{ currency.code }}</option> 
        </select>     

        <button class="icon ion-ios-swap" @click="onSwap"></button>
        
        <select v-model="toCurrency" @change="onChange">
           <option v-for="currency in currencies" v-bind:value="currency.code">{{ currency.code }}</option> 
        </select>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                value: "1.00",
                fromCurrency: "USD",
                toCurrency: "EUR",
                currencies : [
                    { code: "AUD", name: "Australian Dollar", symbol: "$" },
                    { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
                    { code: "BRL", name: "Brazilian Real", symbol: "R$" },
                    { code: "CAD", name: "Canadian Dollar", symbol: "$" },
                    { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
                    { code: "CNY", name: "Chinese Yuan Renminbi", symbol: "¥" },
                    { code: "CZK", name: "Czech Koruna", symbol: "Kč" },
                    { code: "DKK", name: "Danish Krone", symbol: "kr" },
                    { code: "EUR", name: "Euro", symbol: "€" },
                    { code: "GBP", name: "British Pound", symbol: "£" },
                    { code: "HKD", name: "British Pound", symbol: "HK$" },
                    { code: "HRK", name: "Hong Kong Dollar", symbol: "kn" },
                    { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
                    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
                    { code: "ILS", name: "Israeli Shekel", symbol: "₪" },
                    { code: "INR", name: "Indian Rupee", symbol: "₹" },
                    { code: "JPY", name: "Japanese Yen", symbol: "¥" },
                    { code: "KRW", name: "South Korean Won", symbol: "₩" },
                    { code: "MXN", name: "Mexican Peso", symbol: "$" },
                    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
                    { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
                    { code: "NZD", name: "New Zealand Dollar", symbol: "$" },
                    { code: "PHP", name: "Philippine Peso", symbol: "₱" },
                    { code: "PLN", name: "Polish Zloty", symbol: "zł" },
                    { code: "RON", name: "Romanian Leu", symbol: "lei" },
                    { code: "RUB", name: "Russian Ruble", symbol: "₽" },
                    { code: "SEK", name: "Swedish Krona", symbol: "kr" },
                    { code: "SGD", name: "Singapore Dollar", symbol: "$" },
                    { code: "THB", name: "Thai Baht", symbol: "฿" },
                    { code: "TRY", name: "Turkish Lira", symbol: "TRY" },
                    { code: "USD", name: "US Dollar", symbol: "$" },
                    { code: "ZAR", name: "South African Rand", symbol: "R" }
                ]
            }
        },
        methods : {
            onSwap: function() {
                var tmp = this.fromCurrency;
                this.fromCurrency = this.toCurrency;
                this.toCurrency = tmp;
                this.$emit('converter-data-changed', { value : this.value, from: this.fromCurrency, to: this.toCurrency})
            },
            onChange: function() {
                this.$emit('converter-data-changed', { value : this.value, from: this.fromCurrency, to: this.toCurrency})
            }
        }
    }
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
}


input, select {
    font-size: 24px;
    font-weight: 300;
    font-family: 'Segoe UI';
    border-radius: 4px;
    border: solid 1px;
    width: 100px;
    padding: 0 6px;
    text-align: center;
}

#app {
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    color: #222;
}
button {
    background: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    outline: none;
    color: #1E90FF;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;
}
</style>