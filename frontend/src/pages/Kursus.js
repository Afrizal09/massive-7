import React, { Fragment } from "react";
import Menu from "./Menu";

function Kursus() {
  return (
    <Fragment>
      <Fragment>
        <>
          <headet>
            <Menu />
          </headet>
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
                            className="Akademi Kopi  text-left"
                            data-animation="bounceIn"
                            data-delay="0.2s"
                          >
                            Akademi Kopi
                          </h1>
                          {/* breadcrumb Start*/}
                          <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                              </li>
                              <li className="breadcrumb-item">
                                <a href="#">Services</a>
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
            {/* Courses area start */}

            {/*? Start Sample Area */}
            <section className="sample-text-area">
              <div className="container box_1170">
                <h3 className="text-heading">Sejarah Kopi</h3>
                <p className="sample-text">
                  Indonesia memiliki kekayaan alam yang sangat melimpah, mulai
                  dari budaya, suku bangsa, hingga makanan dan minuman yang
                  legendaris. Salah satu minuman yang sangat terkenal dari
                  Indonesia adalah kopi. Dilansir dari laman
                  ppejp.kemendag.go.id, kopi menjadi salah satu produk ekspor
                  Indonesia ke beberapa negara. Perkembangan dan sejarah kopi di
                  Indonesia cukup banyak dipengaruhi oleh zaman penjajahan
                  Belanda. Bahkan, kata kopi yang saat ini dipakai pun merupakan
                  hasil adopsi dari bahasa belanda, yaitu koffie. Lantas,
                  bagaimana sejarah kopi dan ragam jenisnya di Indonesia? Simak
                  informasinya berikut ini.
                </p>
                <p>
                  Sejarah kopi di Indonesia dimulai sejak tahun 1696 saat
                  pendudukan Belanda di Nusantara. Saat itu, Belanda datang ke
                  pulau Jawa dengan membawa kopi berjenis Arabika dari Malabar,
                  India. Budidaya kopi pun mulai dilakukan untuk pertama kali di
                  daerah khusus agrikultur dekat Batavia bernama Kedawung.
                  Sayangnya, budidaya kopi pertama ini harus gagal karena
                  bencana alam dan cuaca ekstrim. Sekitar 3 tahun kemudian,
                  Belanda kembali membawa batang kopi dari Malabar yang
                  merupakan hasil stek. Kali ini, budidaya kopi oleh Belanda pun
                  berhasil. Pada 1706, biji kopi dari pulau Jawa sukses menjadi
                  barang yang sangat populer. Bahkan, kesuksesan ini membuat
                  Belanda menanam kopi di setiap pulau Indonesia yang kemudian
                  memunculkan berbagai ragam jenis kopi lokal.
                </p>
              </div>
            </section>
            {/* End Sample Area */}
          </main>
          <>
            {/*? Start Align Area */}
            <div className="whole-wrap">
              <div className="container box_1170">
                <div className="section-top-border text-left">
                  <h3 className="text-heading">Ragam Jenis Kopi Indonesia</h3>
                  <div className="row">
                    <div className="col-md-9">
                      <p className="text-left">
                        Indonesia memiliki beberapa jenis kopi lokal, seperti
                        kopi Gayo dari Aceh, kopi Kintamani dari Bali, kopi
                        Toraja dari Sulawesi, kopi Liberika Rangsang Meranti
                        dari Riau, hingga kopi Bajawa dari Flores. Meski
                        demikian, berdasarkan sejarah kopi di Indonesia,
                        terdapat ragam jenis kopi yang paling umum dan terkenal
                        hingga saat ini, yaitu Arabika, Robusta, dan Liberika.
                      </p>
                      <p>
                        1. Kopi Arabika (Coffea arabica) Sejarah kopi arabika
                        pertama kali ditemukan di Ethiopia oleh bangsa Arab.
                        Setelah itu, kopi pun disebarkan ke seluruh dunia dengan
                        nama arabika karena peran bangsa Arab dalam penemuannya.
                        Jenis kopi yang satu ini mengandung kafein yang rendah
                        sehingga menjadi kopi paling diminati oleh banyak orang.
                        Ciri dari jenis kopi ini adalah warna seduhan yang tidak
                        terlalu kental dan rasanya yang asam.
                      </p>
                      <p>
                        2. Kopi Robusta (Coffea canephora var. robusta) Kopi
                        robusta adalah salah satu jenis kopi dari varietas
                        Coffea canephora. Kopi ini memiliki rasa yang kuat dan
                        lebih pahit dari arabika. Oleh karena itu, robusta lebih
                        cocok digunakan untuk campuran seperti cappucino, latte,
                        mochacino, dan lainnya. Selain itu, robusta juga kerap
                        dijadikan bahan baku untuk pembuatan kopi instan.
                      </p>
                      <p className="sample-text">
                        3. Kopi Liberika (Coffea liberica) Ragam kopi yang
                        terakhir adalah liberika. Jenis kopi ini pertama kali
                        ditemukan di Liberia dan merupakan tumbuhan liar di
                        daerah sekitar Afrika. Produksi kopi jenis ini cukup
                        rendah, yaitu hanya sekitar 1-2 persen dari produksi
                        kopi dunia. Selain itu, liberika juga memiliki satu
                        varietas lain yang dikenal dengan nama excelsa. Itulah
                        rangkuman informasi mengenai sejarah kopi dan ragam
                        jenisnya di Indonesia. Semoga bermanfaat.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <img
                        src="assets/img/elements/g7.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>

          <div className="whole-wrap">
            <div className="container box_1170">
              <div className="section-top-border text-left">
                <h3 className="text-heading">Rekomendasi</h3>
                <h3 className="mb-30">Kopi Sehat Yang Enggak Ribet!!</h3>
                <p>Iced Vanilla Latte</p>
                <p className="sample-text">
                  Resep kopi sehat yang dingin ini hanya membutuhkan tiga bahan
                  dan kamu bisa menyesuaikan kalorinya dengan menggunakan susu
                  skim, susu almond, atau susu kelapa. Bahkan, kamu bisa saja
                  memilih untuk tidak menggunakan susu sama sekali! Kamu bisa
                  mengurangi gula dan kalori dengan cara menggunakan sirop
                  vanila yang tidak ditambahi gula. Jadi cukup sediakan: bubuk
                  kopi, sirop vanila, dan susu dengan tambahan es batu.
                </p>
                <p>Frozen Mochaccino</p>
                <p className="sample-text">
                  Menjaga kalorimu dengan membuat es kopi di rumah itu gampang
                  banget. Kamu cukup menggunakan kopi yang kamu sukai dan
                  mengubah bentuknya menjadi es batu agar rasanya tidak terlalu
                  encer. Gunakan susu low-fat dan cocoa powder yang belum
                  dimaniskan untuk memotong kalori dari kopi yang biasanya kamu
                  temukan di coffee shop
                </p>
                <p>Honey Cinnamon Iced Latte</p>
                <p className="sample-text">
                  Buat yang sedang mencari resep kopi dengan cita rasa manis dan
                  ringan, kamu bisa menggunakan resep satu ini! Campuran madu
                  dan cinnamon adalah rasa yang tidak banyak melalui proses
                  kimiawi, sehingga kopi yang kamu ciptakan dijamin sehat untuk
                  badan. Selain itu, kamu bisa menggunakan susu kelapa atau susu
                  almond untuk menambahkan cita rasa di kopi susumu. Jadi, nggak
                  membutuhkan gula yang berisiko mengganggu jumlah kalori yang
                  kamu konsumsi. Pasalnya perpaduan susu dan madu bakal
                  memberikan rasa manis yang pas.
                </p>
              </div>
            </div>
          </div>

          <div className="section-top-border">
            <h3 className="text-heading">Image Gallery</h3>
            <div className="row gallery-item">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <a href="assets/img/elements/g1.jpg" className="img-pop-up">
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g1.jpg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="assets/img/elements/g2.jpg" className="img-pop-up">
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g2.jpg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a
                      href="assets/img/elements/g3.jpeg"
                      className="img-pop-up"
                    >
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g3.jpeg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="assets/img/elements/g4.jpg" className="img-pop-up">
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g4.jpg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="assets/img/elements/g5.jpeg"
                      className="img-pop-up"
                    >
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g5.jpeg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="assets/img/elements/g6.jpg" className="img-pop-up">
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g6.jpg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a
                      href="assets/img/elements/g7.jpeg"
                      className="img-pop-up"
                    >
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g7.jpeg)",
                        }}
                      />
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="assets/img/elements/g8.jpg" className="img-pop-up">
                      <div
                        className="single-gallery-image"
                        style={{
                          background: "url(assets/img/elements/g8.jpg)",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ? services-area */}

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
                                Menyediakan informasi mendalam tentang dunia
                                kopi, termasuk sejarah kopi, berbagai jenis biji
                                kopi, teknik pemanggangan, dan proses
                                penyeduhan.
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
        </>
      </Fragment>
    </Fragment>
  );
}

export default Kursus;
