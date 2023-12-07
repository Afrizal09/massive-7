import React, { Fragment } from "react";
import Menu from "./Menu";

function About() {
  return (
    <Fragment>
      <>
        {/* Header Start */}
        <Menu />
        {/* Header End */}
        <main>
          {/*? slider Area Start*/}
          <section className="slider-area slider-area2">
            <div className="slider-active">
              {/* Single Slider */}
              <div className="single-slider slider-height2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-11 col-md-12">
                      <div className="hero__caption hero__caption2">
                        <h1
                          className="Tentang Kami text-left"
                          data-animation="bounceIn"
                          data-delay="0.2s"
                        >
                          Tentang Kami
                        </h1>
                        {/* breadcrumb Start*/}
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">about</a>
                            </li>
                          </ol>
                        </nav>
                        {/* breadcrumb End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sample-text-area">
            <div className="container box_1170">
              <h3 className="text-heading">Apa sih coffee space itu?</h3>
              <p className="sample-text">
                Coffee Space adalah Sebuah platform untuk edukasi kopi
                menyediakan berbagai informasi. Mulai dari pengenalan sejarah
                kopi, ragam jenis kopi dan juga bisa jadi platform untuk
                membantu individu maupun komunitas belajar tentang berbagai
                aspek kopi, mulai dari budidaya hingga pembuatan kopi.
              </p>
            </div>
          </section>

          <div className="services-area services-area2 ">
            <h3 className="text-heading">Mengapa Memilih Kami</h3>
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon1.svg" alt="" />
                    </div>
                    <div className="features-caption text-left">
                      <h3>Edukasi</h3>
                      <p>Mendapatkan informasi terkini dan berguna.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="single-services mb-30">
                    <div className="features-icon">
                      <img src="assets/img/icon/icon2.svg" alt="" />
                    </div>
                    <div className="features-caption text-left">
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
                    <div className="features-caption text-left">
                      <h3>Rekomendasi</h3>
                      <p>Coffee space merekomendasi resep kopi kreatif. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="section-top-border text-center">
            <h3 className="mb-30">VISI DAN MISI</h3>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">VISI</h4>
                  <p>
                    Menjadi tujuan utama bagi pecinta kopi yang mencari
                    pengetahuan mendalam dan pengalaman yang memperkaya dalam
                    dunia kopi.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-defination">
                  <h4 className="mb-20">MISI</h4>
                  <p>
                    Menjadi sumber utama pengetahuan yang mendalam tentang
                    berbagai aspek dunia kopi, dari sejarah hingga teknik
                    penyeduhan.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <>
            {/*? About Area-2 Start */}
            <section className="about-area2 fix pb-padding ">
              <div className="support-wrapper align-items-center">
                <div className="right-content2">
                  {/* img */}
                  <div className="right-img">
                    <img src="assets/img/kopi/about2.jpg" alt="" />
                  </div>
                </div>
                <div className="left-content2">
                  {/* section tittle */}
                  <div className="section-tittle section-tittle2 mb-20">
                    <div className="front-text">
                      <h2 className="">
                        "Berkembanglah Sebagai Barista Profesional!"
                      </h2>
                      <p>
                        Pelatihan Intensif Belajar dari para ahli industri kopi
                        dalam pelatihan intensif kami. Teknik Latte Art Kuasai
                        seni membuat latte art yang memikat hati pelanggan Anda.
                        Pelatihan Berkelanjutan Ikuti pembaruan tren terbaru
                        dalam industri kopi.
                      </p>
                      <a href="register.html" className="btn">
                        Hubungi Kami
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* About Area End */}
          </>

          {/* Services End */}
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
                        <div className="footer-logo mb-25 text-left">
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
                        {/* social */}
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

        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
      </>
    </Fragment>
  );
}

export default About;
