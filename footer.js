class Footer {
    constructor() {
        this.el = document.getElementById("myFooter");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return  `
    <div class="second-bar">
       <div class="container">
       <div class="social-icons">
            <a href="https://instagram.com/shirazlinux?igshid=OGQ5ZDc2ODk2ZA==" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/instagram.svg" alt=""></a>
            <a href="https://www.linkdin.com/company/shirazlinuxcommunity/" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/linkedin.svg" alt=""></a>
            <a href="https://t.me/shirazlinuxcommunity" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/telegram.svg" alt=""></a>
            <a href="https://www.youtube.com/@shirazlinux" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/youtube.svg" alt=""></a>
            <img class="logo" src="https://shirazlinuxcommunity.ir/assets/jpg/IMG_8509.PNG" alt="">
            <p>تمامی حقوق محفوظ است. &copy; جامعه لینوکسی شیراز - ۱۴۰۰ </p>
        </div>
        </div>
    </div>`; 
    }
}

new Footer()