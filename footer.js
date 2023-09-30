class Footer {
    constructor() {
        this.el = document.getElementById("myFooter");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return  `<div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h5>اطلاعات بیشتر</h5>
                <ul>
                    <li><a href="#">هیت مدیره</a></li>
                    <li><a href="#">تیم اجرایی</a></li>
                    <li><a href="https://github.com/shirazlinux/shirazlinuxcommunity">مشارکت در طراحی سایت</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5>دسترسی سریع</h5>
                <ul>
                    <li><a href="https://shirazlinux.blogix.ir/">وبلاگ</a></li>
                    <li><a href="#">محتوای آزاد</a></li>
                    <li><a href="#">سوالات متداول</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5>درباره ما</h5>
                <ul>
                    <li><a href="https://shirazlinuxcommunity.ir/assets/page/asasname">اساسنامه جامعه</a></li>
                    <li><a href="#">مرام نامه جامعه</a></li>
                    <li><a href="#">درباره جامعه</a></li>
                </ul>
            </div>
            <div class="col-sm-3 info">
                <h5>جامعه لینوکسی شیراز</h5>
                <p>جامعه لینوکسی شیراز، جایی برای افرادی است که به فناوری و جامعه باز و متن باز علاقه‌مندند. با هم‌نشینی در این جامعه، می‌توانید از دانش و تجربیات یکدیگر بهره‌مند شوید و با هم به رشد و پیشرفت جامعه لینوکسی در شیراز کمک کنید.</p>
            </div>
        </div>
    </div>
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