import React, { Fragment } from "react";
import Menu1 from "./Menu1";

function Index() {
  return (
    <Fragment>
      <>
        <header>
          <div class="header-area header-transparent" />
          <Menu1 />
        </header>
        <main>
          <section className="slider-area ">
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInLeft" data-delay="0.2s">
                          Coffe Space
                          <br /> platform
                        </h1>
                        <p data-animation="fadeInLeft" data-delay="0.4s">
                          Sumber utama pengetahuan, inspirasi, dan menghubungkan
                          pecinta kopi di seluruh dunia, menjembatani perjalanan
                          mereka dalam menjelajahi dunia kopi yang kaya.
                        </p>
                        <a
                          href="register.html"
                          className="btn hero-btn"
                          data-animation="fadeInLeft"
                          data-delay="0.7s"
                        >
                          Gabung Gratis
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="services-area">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon1.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Edukasi</h3>
                      <p>Pelatihan intensif dari para ahli industri kopi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon2.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Pelatihan Barista</h3>
                      <p>Pelatihan intensif dari para ahli industri kopi.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon3.svg" alt="" />
                    </div>
                    <div className="features-caption">
                      <h3>Rekomendasi </h3>
                      <p>Coffee space merekomendasi resep kopi kreatif.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-area section-padding40 fix">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="section-tittle text-center mb-55">
                    <h2>Coffe Space untuk Berita Kopi Terkini</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img
                            src="assets/img/Foto Kopi/Americano.jpeg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            “Racikan Kopi Campur Madu Lebih Menyehatkan? Ini
                            Faktanya”
                          </a>
                        </h3>
                        <p>
                          Kopi bisa diracik menggunakan pemanis tambahan, kalau
                          ingin yang alami bisa menambahkan madu. Ternyata,
                          racikan kopi dan madu lebih menyehatkan.
                        </p>

                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img
                            src="assets/img/Foto Kopi/capuccino.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            Catat! Ini 5 Racikan Kopi Kekinian yang Disebut
                            Menyehatkan
                          </a>
                        </h3>
                        <p>
                          Selama beberapa tahun terakhir muncul berbagai tren
                          racikan kopi. Racikan kopi ini ada yang dicampur
                          dengan jamur sampai mentega tawar.
                        </p>

                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="properties properties2 mb-30">
                    <div className="properties__card">
                      <div className="properties__img overlay1">
                        <a href="#">
                          <img src="assets/img/Foto Kopi/latte.jpg" alt="" />
                        </a>
                      </div>
                      <div className="properties__caption">
                        <h3>
                          <a href="#">
                            Cocok Diminum Pagi Hari, Ini 8 Khasiat Kopi Pahit
                            Bagi Kesehatan
                          </a>
                        </h3>
                        <p>
                          Selain membangkitkan semangat di pagi hari, minum kopi
                          pahit nyatanya menyimpan banyak khasiat untuk
                          kesehatan. Tak heran jika rutinitas yang satu ini
                          digemari banyak orang.
                        </p>

                        <a href="#" className="border-btn border-btn2">
                          Jelajahi Lebih Lanjut
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-wrappper footer-bg">
            {/* Footer Start*/}
            <div className="footer-area footer-padding">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="single-footer-caption mb-30">
                        {/* logo */}
                        <div className="footer-logo mb-26 text-left">
                          <a href="index.html">
                            <img
                              src="assets/img/logo/logo2_footer.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="footer-tittle">
                          <div className="footer-pera text-left">
                            <p>
                              Menyediakan informasi mendalam tentang dunia kopi,
                              termasuk sejarah kopi, berbagai jenis biji kopi,
                              teknik pemanggangan, dan proses penyeduhan.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Hubungi Kami</h4>
                        <ul>
                          <li>
                            <a href="#">
                              Coffeespace2023@gmail.com 0210-1234567
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Media Sosial</h4>
                        {/* social */}
                        <div className="footer-social">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-whatsapp" />
                          </a>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-bottom area */}
            <div className="footer-bottom-area">
              <div className="container">
                <div className="footer-border">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-12 ">
                      <div className="footer-copy-right text-center">
                        <p>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          © 2023 Coffee Space. All Rights Reserved.{" "}
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer End*/}
          </div>
        </footer>
      </>
    </Fragment>
  );
}

export default Index;
