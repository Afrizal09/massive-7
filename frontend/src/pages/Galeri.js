import React, { Fragment } from "react";
import Menu from "./Menu";

function Galeri() {
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
                          className="Kopi Enak text-left"
                          data-animation="bounceIn"
                          data-delay="0.2s"
                        >
                          Kopi Enak
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
          {/*? Blog Area Start*/}
          <section className="blog_area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="blog_left_sidebar">
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="assets/img/kopi/kopimadu.jpeg"
                          alt=""
                        />
                        <a href="/SEduhKopi1" className="blog_item_date">
                          <h3>11</h3>
                          <p>Nov</p>
                        </a>
                      </div>
                      <div className="blog_details text-left">
                        <a className="d-inline-block" href="/SeduhKopi1">
                          <h2
                            className="blog-head text-left"
                            style={{ color: "#2d2d2d" }}
                          >
                            “Racikan Kopi Campur Madu Lebih Menyehatkan? Ini
                            Faktanya”
                          </h2>
                        </a>
                        <p>
                          Kopi bisa diracik menggunakan pemanis tambahan, kalau
                          ingin yang alami bisa menambahkan madu. Ternyata,
                          racikan kopi dan madu lebih menyehatkan.Racikan kopi
                          yang biasa dikonsumsi saat pagi hari adalah kopi
                          hitam. Sebagian orang yang ingin merasakan manfaat
                          sehatnya, biasanya mengonsumsi kopi hitam polos tanpa
                          gula.Kalau ingin rasa yang lebih nikmat, beberapa
                          orang menambahkan gula pasir sebagai pemanis. Rasanya
                          jadi lebih lembut dan pahitnya berkurang. Namun,
                          racikan ini dianggap dapat mengganggu program diet.
                        </p>
                        <ul className="blog-info-link">
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
                      </div>
                    </article>
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="assets/img/kopi/racikankopi.jpg"
                          alt=""
                        />
                        <a href="#" className="blog_item_date">
                          <h3>12</h3>
                          <p>Nov</p>
                        </a>
                      </div>
                      <div className="blog_details text-left">
                        <a className="d-inline-block" href="/SeduhKopi2">
                          <h2
                            className="blog-head text-left"
                            style={{ color: "#2d2d2d" }}
                          >
                            Catat! Ini 5 Racikan Kopi Kekinian yang Disebut
                            Menyehatkan
                          </h2>
                        </a>
                        <p>
                          Selama beberapa tahun terakhir muncul berbagai tren
                          racikan kopi. Racikan kopi ini ada yang dicampur
                          dengan jamur sampai mentega tawar.Sebagai minuman yang
                          paling populer dan digemari di dunia, tak terhitung
                          berapa banyak jumlah racikan kopi yang ada. Minuman
                          yang dikenal dapat membuat orang lebih berenergi
                          hingga kaya antioksidan ini, sering diolah menjadi
                          minuman yang lebih sehat. Salah satunya dengan
                          mengganti pemanis buatan dengan bahan alami yang lebih
                          terjamin kesehatannya.
                        </p>
                        <ul className="blog-info-link">
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
                      </div>
                    </article>
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="assets/img/Foto Kopi/moccachino.jpg"
                          alt=""
                        />
                        <a href="#" className="blog_item_date">
                          <h3>13</h3>
                          <p>Nov</p>
                        </a>
                      </div>
                      <div className="blog_details text-left">
                        <a className="d-inline-block" href="/SeduhKopi3">
                          <h2
                            className="blog-head text-left"
                            style={{ color: "#2d2d2d" }}
                          >
                            Cocok Diminum Pagi Hari, Ini 8 Khasiat Kopi Pahit
                            Bagi Kesehatan
                          </h2>
                        </a>
                        <p>
                          Selain membangkitkan semangat di pagi hari, minum kopi
                          pahit nyatanya menyimpan banyak khasiat untuk
                          kesehatan. Tak heran jika rutinitas yang satu ini
                          digemari banyak orang, terutama untuk mengawali
                          aktivitas sehari-hari.Meski setiap orang memiliki
                          seleranya masing-masing, banyak orang percaya kopi
                          pahit memiliki lebih banyak khasiat daripada kopi yang
                          telah dicampur gula ataupun susu. Bagi pengidap
                          diabetes, kopi tanpa gula menjadi minuman yang cocok
                          untuk diseruput.
                        </p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="#">
                              <i className="fa fa-user" /> Kopi dan Kesehatan,
                              Berita dan Tren Kopi
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-comments" /> 03 Komentar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="assets/img/Foto Kopi/kopi gayo aceh.jpeg"
                          alt=""
                        />
                        <a href="#" className="blog_item_date">
                          <h3>14</h3>
                          <p>Nov</p>
                        </a>
                      </div>
                      <div className="blog_details text-left">
                        <a className="d-inline-block" href="/SeduhKopi4">
                          <h2
                            className="blog-head text-left"
                            style={{ color: "#2d2d2d" }}
                          >
                            Mengenal Budaya Kopi: Sejarah, Varietas, dan Cara
                            Menikmati Kopi yang Benar
                          </h2>
                        </a>
                        <p>
                          Kopi merupakan salah satu minuman yang disukai oleh
                          banyak orang. Bahkan pada tahun 2022 lalu pernah
                          dilakukan survei mengenai jenis minuman rasa yang
                          dikonsumsi oleh masyarakat Indonesia, dan hasilnya
                          menunjukkan bahwa kopi menempati peringkat teratas
                          minuman yang paling sering dikonsumsi.
                        </p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="#">
                              <i className="fa fa-user" /> Sejarah Kopi,
                              Lifestyle
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-comments" /> 03 Komentar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="assets/img/kopi/proseskopi.jpeg"
                          alt=""
                        />
                        <a href="#" className="blog_item_date">
                          <h3>15</h3>
                          <p>Nov</p>
                        </a>
                      </div>
                      <div className="blog_details text-left">
                        <a className="d-inline-block" href="/SeduhKopi5">
                          <h2
                            className="blog-head text-left"
                            style={{ color: "#2d2d2d" }}
                          >
                            Cerita Perjalanan dan Proses Pengolahan Kopi sampai
                            Siap Diseduh
                          </h2>
                        </a>
                        <p>
                          Sebelum bisa diseduh, diteguk, dan dinikmati di rumah
                          maupun coffee shop, kopi mengalami cerita perjalanan
                          dan proses pengolahan yang panjang. Proses tersebut
                          terdiri atas pemanenan, penjemuran, penyangraian,
                          hingga penyeduhan sampai jadi minuman yang mantap.
                        </p>
                        <ul className="blog-info-link">
                          <li>
                            <a href="#">
                              <i className="fa fa-user" /> Proses Pembuatan Kopi
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-comments" /> 03 Komentar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </article>
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
                      <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
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
                      <h3 className="widget_title" style={{ color: "#2d2d2d" }}>
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
                      <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
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
                      <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
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
      </>
    </Fragment>
  );
}

export default Galeri;
