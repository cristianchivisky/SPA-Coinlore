const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        Cripto SPA 
                    </a>  
                </h1>
            </div>
        </div>
        <div class="Character-chart-header">
            <canvas id="cryptoChart" width="60" height="14"></canvas>
        </div>
    `;
    return view;
};

export default Header;