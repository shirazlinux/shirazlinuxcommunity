class Nav {
    constructor() {
        this.el = document.getElementById("navbar");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `<nav class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand white" href="https://shirazlinuxcommunity.ir">جامعه لینوکسی شیراز</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Shiraz Linux Community</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active " aria-current="page" href="https://shirazlinuxcommunity.ir">خانه</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://shirazlinuxcommunity.ir/#event">نشست ها</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://shirazlinuxcommunity.ir/#conference">همایش ها</a>
                      </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="https://shirazlinuxcommunity.ir/#myFooter" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        درباره ما
                      </a>
                      <ul class="dropdown-menu rtl">
                        <li><a class="dropdown-item" href="https://shirazlinuxcommunity.ir/assets/page/asasname">اساسنامه جامعه</a></li>
                        <li><a class="dropdown-item" href="#">مرامنامه جامعه</a></li>
                        <li><a class="dropdown-item" href="#">درباره جامعه</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">هیت مدیره</a></li>
                        <li><a class="dropdown-item" href="#">تیم اجرایی</a></li>
                        <li><a class="dropdown-item" href="">مشارکت در طراحی سایت</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>`; 
    }
}

new Nav()   