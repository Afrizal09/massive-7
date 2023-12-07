import React, { Fragment } from "react";
import Menu from "./Menu";

function SeduhKopi5() {
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
                            src="assets/img/kopi/proseskopi.jpeg"
                            alt=""
                          />
                        </div>
                        <div className="blog_details">
                          <h2 style={{ color: "#2d2d2d" }}>
                            Cerita Perjalanan dan Proses Pengolahan Kopi sampai
                            Siap Diseduh
                          </h2>
                          <ul className="blog-info-link mt-3 mb-4">
                            <li>
                              <a href="#">
                                <i className="fa fa-user" /> Kopi dan Kesehatan,
                                Kopi Enak
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-comments" /> 03 Komentar
                              </a>
                            </li>
                          </ul>
                          <p className="excert">
                            Sebelum bisa diseduh, diteguk, dan dinikmati di
                            rumah maupun coffee shop, kopi mengalami cerita
                            perjalanan dan proses pengolahan yang panjang.
                            Proses tersebut terdiri atas pemanenan, penjemuran,
                            penyangraian, hingga penyeduhan sampai jadi minuman
                            yang mantap.
                          </p>
                          <p></p>
                          <div className="quote-wrapper">
                            <div className="quotes">
                              Kopi membawa cerita perjalanan yang panjang, dari
                              perkebunan hingga ke cangkir kita. Setiap jenis
                              kopi memiliki cerita asal yang unik dari
                              wilayahnya masing-masing. Kopi bukan hanya tentang
                              rasa atau kafein, tapi juga tentang sejarah,
                              warisan, dan interaksi sosial yang menghubungkan
                              orang dari berbagai latar belakang budaya di
                              seluruh dunia.
                            </div>
                          </div>
                          <p>
                            Proses ini turut memberikan kontribusi dalam hal
                            karakter dan cita rasanya. Apalagi, proses yang
                            digunakan bisa bermacam-macam dan masing-masing
                            menghasilkan keunikan rasa tersendiri. Rasa yang
                            dihasilkan dari jenis buah yang sama bisa berbeda
                            hanya karena ditanam di tempat yang berbeda, apalagi
                            dengan proses pengolahan yang variatif. Hal inilah
                            yang membuat kopi begitu unik dan misterius.
                          </p>
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
                              <h4>Rendy Gede</h4>
                            </a>
                            <p>
                              Dalam setiap tegukan kopi, kita tidak hanya
                              menikmati rasa dan aroma yang memanjakan lidah,
                              tetapi juga merasakan sentuhan seni dan budaya
                              yang melebur dalam minuman ini. Artikel ini
                              mengajak kita untuk merayakan keunikan kopi
                              sebagai lebih dari sekadar minuman; itu adalah
                              pengalaman seni dan budaya yang menghidupkan
                              kembali jiwa dan merayakan keindahan setiap momen.
                              Mari terus menikmati dan mengeksplorasi kekayaan
                              dunia kopi, karena di setiap tegukan, terdapat
                              kisah seni dan kehidupan yang menunggu untuk
                              ditemukan.
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
                                  Artikel ini membawa kita ke dalam dunia kopi
                                  sebagai lebih dari sekadar minuman; ia
                                  menggambarkan kopi sebagai seni dan budaya
                                  yang mendalam. Penjelasan tentang proses
                                  persiapan kopi sebagai seni yang melibatkan
                                  keterampilan dan perhatian terhadap detail
                                  memberikan apresiasi baru terhadap minuman
                                  yang sering kita nikmati secara tergesa-gesa.
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Rio Pratama</a>
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
                                  Pentingnya kedai kopi sebagai pusat budaya dan
                                  tempat berkumpul menyoroti bagaimana kopi
                                  telah melampaui sekadar minuman dan menjadi
                                  suatu bentuk pengalaman sosial. Setiap kedai
                                  kopi mencerminkan identitas budaya lokal,
                                  menciptakan ruang unik yang mempertemukan
                                  orang-orang dengan minat dan gaya hidup yang
                                  serupa.
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Tiara Melani</a>
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
                                  Artikel ini berhasil membuka mata kita tentang
                                  kedalaman dan keanekaragaman dunia kopi
                                  sebagai sebuah seni dan budaya. Ini mengajak
                                  kita untuk melihat secangkir kopi dengan mata
                                  yang lebih bijak, menghargai lebih dari
                                  sekadar rasa, tetapi juga kreativitas,
                                  sejarah, dan konektivitas yang terwujud dalam
                                  setiap tegukan.
                                </p>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <h5>
                                      <a href="#">Rizki Kurniawan</a>
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

export default SeduhKopi5;
