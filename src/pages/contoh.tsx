import styled from "styled-components";

export interface IContohProps {}

const ContohComponent = styled.div`
  min-height: 100vh;

  header {
    display: flex;
    // justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    background-color: maroon;
    color: white;
  }

  .header-logo {
    font-family: sans-serif;
    font-size: 40px;
    float: left;
    padding: 20px 40px;
  }

  header nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  header nav ul li {
    list-style: none;
    padding: 30px 30px;
  }

  header nav ul li a {
    text-decoration: none;
    color: white;
  }

  footer {
    display: flex;
    justify-content: space-between;
    background-color: maroon;
    bottom: 0;
    padding: 40px;
    width: 100%;
    height: 120px;
    align-items: center;
  }

  .footer-logo {
    font-family: sans-serif;
    font-size: 32px;
    float: left;
    color: white;
  }

  footer nav ul {
    display: flex;
    flex-direction: column;
  }

  footer nav ul li a {
    text-decoration: none;
    color: white;
  }

  footer nav ul li {
    padding: 5px;
    list-style: none;
  }

  .main {
    // border: 1px solid black;
    padding: 10px 80px 80px;
  }

  .contents {
    height: 500px;
    margin-top: 100px;
  }

  .section-title {
    border-bottom: 2px solid #dee7ec;
    font-size: 28px;
    padding-bottom: 15px;
    margin-bottom: 50px;
  }

  .contents-item {
    float: left;
    margin-right: 20px;
  }

  .contents-item p {
    font-size: 24px;
    margin-top: 30px;
  }

  .contact-form {
    padding-top: 50px;
    padding-left: 80px;
  }

  input,
  textarea {
    width: 400px;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 20px;
    font-size: 18px;
    border: 2px solid #dee7ec;
  }

  .contact-submit {
    background-color: #dee7ec;
    color: #889eab;
  }
`;

export function Contoh(props: IContohProps) {
  return (
    <ContohComponent>
      <header>
        <div className="header-logo">PAW</div>
        <nav>
          <ul>
            <li>
              <a href="/about">Tentang</a>
            </li>
            <li>
              <a className="active" href="#">
                Pelajaran
              </a>
            </li>
            <li>
              <a className="active" href="#">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="main">
        <div className="contents">
          <h3 className="section-title">Pelajaran</h3>
          <div>
            <div className="contents-item">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg"
                alt=""
              ></img>
              <p>HTML & CSS</p>
            </div>
            <div className="contents-item">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg"
                alt=""
              ></img>
              <p>PHP</p>
            </div>
            <div className="contents-item">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg"
                alt=""
              ></img>
              <p>Ruby</p>
            </div>
            <div className="contents-item">
              <img
                src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg"
                alt=""
              ></img>
              <p>Microservices</p>
            </div>
          </div>
        </div>
      </div>

      <form action="" className="contact-form">
        <h3 className="section-title">Hubungi Kami</h3>
        <p>Email (Wajib Diisi)</p>
        <input type="text" />
        <p>Pesan (Wajib Diisi)</p>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <p>* Bintang wajib diisi</p>
        <input type="submit" value="Kirim" />
      </form>

      <footer>
        <div className="footer-logo">Pemrograman Aplikasi Web</div>
        <nav>
          <ul>
            <li>
              <a href="/about">Tentang</a>
            </li>
            <li>
              <a className="active" href="#">
                Karier
              </a>
            </li>
            <li>
              <a className="active" href="#">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </ContohComponent>
  );
}
