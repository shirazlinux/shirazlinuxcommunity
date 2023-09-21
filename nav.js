class Nav {
    constructor() {
        this.el = document.getElementById("navbar");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `
        <a href="http://shirazlinuxcommunity.ir/">صفحه اصلی</a>
        <a href="https://shirazlinuxcommunity.ir/#event">نشست ها</a>
        <a href="https://shirazlinuxcommunity.ir/#conference">همایش ها</a>
        <a href="https://shirazlinuxcommunity.ir/#myFooter">درباره ما</a>
        <img src="https://shirazlinuxcommunity.ir/assets/jpg/55566.jpeg" alt="">
        `; 
    }
}

new Nav()   