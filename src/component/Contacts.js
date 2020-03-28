import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      phone: 0,
      selection: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      username, email, phone, selection, message,
    } = this.state;
    return (
      <div>
        <div className="all-content light-red-background">
          <div className="container">
            <div className="row">
              <div className="col-12 pt-5 cantacttext">
                <div className="breadcrumb justify-content-center" style={{ backgroundColor: '#d90845', color: 'white' }}>
                  <Link to="/">
                    <span style={{ color: 'white' }}>首頁 &nbsp;</span>
                  </Link>
                  <Link to="/contacts">
                    <span style={{ color: 'white' }} className="cantactus">&nbsp; 聯絡我們</span>
                  </Link>
                </div>
                <h1 className="text-center cantact-title mt-4 mb-3">有任何問題嗎？馬上聯絡我們！</h1>
                <div className="mb-5 cantact-question" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <div className="container">
            <div className="row">

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                  <h3 className="mb-1">五倍紅寶石股份有限公司</h3>
                  10046 台北市中正區衡陽路 7 號 5 樓
                </div>

                <div className="col-12 pl-0 d-flex">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    Tel：02-2331-5247
                    <br />
                    Mobile：0928-617-687
                    <br />
                    E-mail：
                    <a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
                  </div>
                  <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                    Fax：02-2331-8717
                    <br />
                    統編：24536806
                  </div>
                </div>

              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-6">

                <div className="mb-3">
                  任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
                </div>

                <form>

                  <div className="form-group">
                    <input className="form-control input-lg" onChange={this.handleChange} placeholder="名字" type="text" name="username" id="contact_name" required="" />
                  </div>

                  <div className="form-group">
                    <input className="form-control input-lg" onChange={this.handleChange} placeholder="信箱" type="email" name="email" id="contact_email" required="" />
                  </div>

                  <div className="form-group">
                    <input className="form-control input-lg" onChange={this.handleChange} placeholder="電話" type="text" name="phone" id="contact_phone" required="" />
                  </div>

                  <div className="form-group">
                    <select className="form-control input-lg" onChange={this.handleChange} id="selection" name="selection" required="">
                      <option value="">請選擇主題</option>
                      <option value="專案開發">專案開發</option>
                      <option value="技術諮詢">技術諮詢</option>
                      <option value="企業內訓">企業內訓</option>
                      <option value="課程詢問">課程詢問</option>
                      <option value="其它">其它</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <textarea rows="5" className="form-control" onChange={this.handleChange} placeholder="留下你的訊息" name="message" id="contact_message" required="" />
                  </div>

                  <input type="button" name="submit" value="送出" className="btn btn-red btn-block" data-toggle="modal" data-target=".bd-example-modal-lg" data-disable-with="送出" />

                </form>

                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content text-center">
                      <div>{username}</div>
                      <div>{email}</div>
                      <div>{phone}</div>
                      <div>{selection}</div>
                      <div>{message}</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contacts;
