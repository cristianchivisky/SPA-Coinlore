const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        CoinLore
                    </a>  
                </h1>
            </div>

            <div class="Header-nav">
                <a href="#/about">
                    About
                </a>
            </div>
        </div>

        <canvas id="cryptoChart" width="60" height="20"></canvas>
    `;
    return view;
};

export default Header;