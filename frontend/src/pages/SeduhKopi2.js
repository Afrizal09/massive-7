import React, { Fragment } from "react";
import Menu from "./Menu";

function SeduhKopi2() {
  return (
    <Fragment>
      <Fragment>
        <>
          <>
            <header>
              <Menu />
            </header>

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
                          <div className="hero__caption hero__caption2 text-left">
                            <h1 data-animation="bounceIn" data-delay="0.2s">
                              Seduh Kopi
                            </h1>
                            {/* breadcrumb Start*/}
                            <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                  <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                  <a href="#">Blog</a>
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
              {/*? Blog Area Start */}
              <section className="blog_area single-post-area section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 posts-list">
                      <div className="single-post text-left">
                        <div className="feature-img">
                          <img
                            className="img-fluid"
                            src="assets/img/kopi/racikankopi.jpg"
                            alt=""
                          />
                        </div>
                        <div className="blog_details">
                          <h2 style={{ color: "#2d2d2d" }}>
                            Catat! Ini 5 Racikan Kopi Kekinian yang Disebut
                            Menyehatkan
                          </h2>
                          <ul className="blog-info-link mt-3 mb-4">
                            <li>
                              <a href="#">
                                <i className="fa fa-user" /> Kopi dan Kesehatan,
                                Tren Kopi
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comments" /> 03 Komentar
                              </a>
                            </li>
                          </ul>
                          <p className="excert">
                            Selama beberapa tahun terakhir muncul berbagai tren
                            racikan kopi. Racikan kopi ini ada yang dicampur
                            dengan jamur sampai mentega tawar. Sebagai minuman
                            yang paling populer dan digemari di dunia, tak
                            terhitung berapa banyak jumlah racikan kopi yang
                            ada. Minuman yang dikenal dapat membuat orang lebih
                            berenergi hingga kaya antioksidan ini, sering diolah
                            menjadi minuman yang lebih sehat.
                          </p>
                          <p>
                            Salah satunya dengan mengganti pemanis buatan dengan
                            bahan alami yang lebih terjamin kesehatannya.
                            Seperti tren racikan kopi campur jamur yang kembali
                            hits, hingga kopi yang cocok untuk diet ketat karena
                            menggunakan campuran mentega tawar yang creamy.
                          </p>
                          <div className="quote-wrapper">
                            <div className="quotes">
                              Dilansir dari berbagai sumber berikut 5 racikan
                              kopi yang harus di coba : 1. Kopi Jamur 2. Kopi
                              Campur Minyak Zaitun 3. Kopi Campur Mentega Tawar
                              4. Kopi Campur Lemon 5. Kopi Tambah Alpukat
                            </div>
                          </div>
                          <p></p>
                        </div>
                      </div>
                      <div className="navigation-top">
                        <div className="d-sm-flex justify-content-between text-center">
                          <p className="like-info">
                            <span className="align-middle">
                              <i className="fa fa-heart" />
                            </span>{" "}
                            Ahmad dan 4 lainnya menyukai ini
                          </p>
                          <div className="col-sm-4 text-center my-2 my-sm-0">
                            {/* <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> */}
                          </div>
                          <ul className="social-icons">
                            <li>
                              <a href="https://www.facebook.com/sai4ull">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="navigation-area">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/Foto Kopi/latte1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="arrow">
                                <a href="#">
                                  <span className="lnr text-white ti-arrow-left" />
                                </a>
                              </div>
                              <div className="detials">
                                <p>Postingan Sebelumnya</p>
                                <a href="#">
                                  <h4 style={{ color: "#2d2d2d" }}>
                                    Kopi Latte Art Terunik
                                  </h4>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                              <div className="detials">
                                <p>Postingan Selanjutnya</p>
                                <a href="#">
                                  <h4 style={{ color: "#2d2d2d" }}>
                                    Tren Kopi Lelet Rembang
                                  </h4>
                                </a>
                              </div>
                              <div className="arrow">
                                <a href="#">
                                  <span className="lnr text-white ti-arrow-right" />
                                </a>
                              </div>
                              <div className="thumb">
                                <a href="#">
                                  <img
                                    className="img-fluid"
                                    src="assets/img/Foto Kopi/kopi lelet.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blog-author">
                        <div className="media align-items-left">
                          <img src="assets/img/blog/anonim.png" alt="" />
                          <div className="media-body text-left">
                            <a href="#">
                              <h4>Irfan Lian</h4>
                            </a>
                            <p>
                              Senang bisa berbagi informasi tentang 5 kopi
                              menyehatkan ini! Sebagai penggemar kopi, saya
                              percaya bahwa minuman favorit kita juga bisa
                              menjadi bagian dari gaya hidup sehat. Artikel ini
                              mencoba menyajikan opsi kopi yang tidak hanya
                              menggugah selera tetapi juga memberikan manfaat
                              kesehatan. Semoga pembaca menemukan inspirasi baru
                              dalam menikmati kopi mereka sehari-hari. Jangan
                              ragu untuk berbagi pengalaman setelah mencoba
                              rekomendasi ini. Selamat menikmati kopi sehat dan
                              nikmat!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="comments-area">
                        <h4>03 Komentar</h4>
                        <div className="comment-list text-left">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img src="assets/img/blog/anonim.png" alt="" />
                              </div>
                              <div className="desc">
                                <p className="comment">
                                  Artikel tentang 5 kopi menyehatkan sangat
                                  bermanfaat! Saya baru mengetahui variasi kopi
                                  yang memiliki manfaat kesehatan, dan ini
                                  benar-benar membuka mata saya. Saya terutama
                                  tertarik untuk mencoba kopi dengan tambahan
                                  bahan-bahan superfood. Terima kasih atas
                                  informasinya yang berharga!
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Gigih Pambudi</a>
                                    </h5>
                                    <p className="date">
                                      12 November 2023, 11:20 WIB{" "}
                                    </p>
                                  </div>
                                  <div className="reply-btn">
                                    <a
                                      href="#"
                                      className="btn-reply text-uppercase"
                                    >
                                      reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comment-list text-left">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img src="assets/img/blog/anonim.png" alt="" />
                              </div>
                              <div className="desc">
                                <p className="comment">
                                  Membaca artikel ini membuat saya lebih sadar
                                  akan pilihan kopi yang saya minum setiap hari.
                                  Ternyata, kopi tidak hanya enak tetapi juga
                                  dapat memberikan manfaat kesehatan. Saya
                                  sangat tertarik untuk mencoba beberapa jenis
                                  kopi yang disarankan untuk mendukung kesehatan
                                  tubuh saya. Terima kasih atas artikel yang
                                  informatif!
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Muhammad Ilham</a>
                                    </h5>
                                    <p className="date">
                                      12 November 2023, 12:00 WIB{" "}
                                    </p>
                                  </div>
                                  <div className="reply-btn">
                                    <a
                                      href="#"
                                      className="btn-reply text-uppercase"
                                    >
                                      reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comment-list text-left">
                          <div className="single-comment justify-content-between d-flex">
                            <div className="user justify-content-between d-flex">
                              <div className="thumb">
                                <img src="assets/img/blog/anonim.png" alt="" />
                              </div>
                              <div className="desc">
                                <p className="comment">
                                  Sangat menginspirasi! Sebagai pencinta kopi,
                                  saya senang mengetahui bahwa ada pilihan kopi
                                  yang tidak hanya lezat tetapi juga
                                  menyehatkan. Artikel ini memberikan wawasan
                                  yang baik tentang berbagai jenis kopi yang
                                  dapat meningkatkan kesehatan. Saya akan segera
                                  mencoba beberapa rekomendasi yang diberikan.
                                  Terima kasih!
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Dimas Dwi</a>
                                    </h5>
                                    <p className="date">
                                      12 November 2023, 13:12 WIB{" "}
                                    </p>
                                  </div>
                                  <div className="reply-btn">
                                    <a
                                      href="#"
                                      className="btn-reply text-uppercase"
                                    >
                                      reply
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment-form">
                        <h4>Tinggalkan Komentar</h4>
                        <form
                          className="form-contact comment_form"
                          action="#"
                          id="commentForm"
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control w-100"
                                  name="comment"
                                  id="comment"
                                  cols={30}
                                  rows={9}
                                  placeholder="Tulis Komentar"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="nama"
                                  id="nama"
                                  type="text"
                                  placeholder="Nama"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  type="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  name="website"
                                  id="website"
                                  type="text"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="button button-contactForm btn_1 boxed-btn"
                            >
                              Kirim Komentar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                          <form action="#">
                            <div className="form-group">
                              <div className="input-group mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Cari Kata Kunci"
                                  onfocus="this.placeholder = ''"
                                  onblur="this.placeholder = 'Cari Kata Kunci'"
                                />
                                <div className="input-group-append">
                                  <button className="btns" type="button">
                                    <i className="ti-search" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <button
                              className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                              type="submit"
                            >
                              Cari
                            </button>
                          </form>
                        </aside>
                        <aside className="single_sidebar_widget post_category_widget">
                          <h4
                            className="widget_title"
                            style={{ color: "#2d2d2d" }}
                          >
                            Kategori
                          </h4>
                          <ul className="list cat-list">
                            <li>
                              <a href="#" className="d-flex">
                                <p>Sejarah Kopi</p>
                                <p>(10)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex">
                                <p>Jenis Kopi</p>
                                <p>(15)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex">
                                <p>Proses Pembuatan Kopi</p>
                                <p>(07)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex">
                                <p>Kopi dan Kesehatan</p>
                                <p>(11)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex">
                                <p>Berita dan Tren Kopi</p>
                                <p>(10)</p>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="d-flex">
                                <p>Kopi Enak</p>
                                <p>(15)</p>
                              </a>
                            </li>
                          </ul>
                        </aside>
                        <aside className="single_sidebar_widget popular_post_widget">
                          <h3
                            className="widget_title"
                            style={{ color: "#2d2d2d" }}
                          >
                            Artikel Terkini
                          </h3>
                          <div className="media post_item text-left">
                            <img
                              src="assets/img/Foto Kopi/moccachino1.png"
                              alt="post"
                            />
                            <div className="media-body">
                              <a href="blog_details.html">
                                <h3 style={{ color: "#2d2d2d" }}>
                                  Tren Minuman Kopi yang Harus Anda Coba!
                                </h3>
                              </a>
                              <p>12 November 2023</p>
                            </div>
                          </div>
                          <div className="media post_item text-left">
                            <img
                              src="assets/img/Foto Kopi/Americano1.jpg"
                              alt="post"
                            />
                            <div className="media-body">
                              <a href="blog_details.html">
                                <h3 style={{ color: "#2d2d2d" }}>
                                  Inovasi Terkini dalam Dunia Kopi
                                </h3>
                              </a>
                              <p>13 November 2023</p>
                            </div>
                          </div>
                          <div className="media post_item text-left">
                            <img
                              src="assets/img/Foto Kopi/bijikopi1.jpg"
                              alt="post"
                            />
                            <div className="media-body">
                              <a href="blog_details.html">
                                <h3 style={{ color: "#2d2d2d" }}>
                                  Sensasi Rasa Kopi
                                </h3>
                              </a>
                              <p>14 November 2023</p>
                            </div>
                          </div>
                          <div className="media post_item text-left">
                            <img
                              src="assets/img/Foto Kopi/kopikopi1.jpg"
                              alt="post"
                            />
                            <div className="media-body">
                              <a href="blog_details.html">
                                <h3 style={{ color: "#2d2d2d" }}>
                                  Kreativitas dalam Secangkir Kopi
                                </h3>
                              </a>
                              <p>15 November 2023</p>
                            </div>
                          </div>
                        </aside>
                        <aside className="single_sidebar_widget tag_cloud_widget">
                          <h4
                            className="widget_title"
                            style={{ color: "#2d2d2d" }}
                          >
                            Tag
                          </h4>
                          <ul className="list">
                            <li>
                              <a href="#">kopi</a>
                            </li>
                            <li>
                              <a href="#">tren kopi</a>
                            </li>
                            <li>
                              <a href="#">teknologi</a>
                            </li>
                            <li>
                              <a href="#">kesehatan</a>
                            </li>
                            <li>
                              <a href="#">kedai kopi</a>
                            </li>
                            <li>
                              <a href="#">seduh kopi</a>
                            </li>
                            <li>
                              <a href="#">sejarah kopi</a>
                            </li>
                            <li>
                              <a href="#">pecinta kopi</a>
                            </li>
                          </ul>
                        </aside>
                        <aside className="single_sidebar_widget instagram_feeds">
                          <h4
                            className="widget_title"
                            style={{ color: "#2d2d2d" }}
                          >
                            Instagram Feeds
                          </h4>
                          <ul className="instagram_row flex-wrap">
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/kopikopi1.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/moccachino1.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/bijikopi1.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/Americano1.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/kopi lelet.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/img/Foto Kopi/latte1.jpg"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Blog Area End */}
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
                                  Menyediakan informasi mendalam tentang dunia
                                  kopi, termasuk sejarah kopi, berbagai jenis
                                  biji kopi, teknik pemanggangan, dan proses
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
        </>
      </Fragment>
    </Fragment>
  );
}

export default SeduhKopi2;
