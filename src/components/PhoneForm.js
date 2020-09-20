import React from "react";
import { Input } from "antd";
import { UserOutlined, IdcardOutlined } from "@ant-design/icons";
import "../css/styles.css";

class PhoneForm extends React.Component {
  state = {
    name: "",
    phone: "",
  };
  render() {
    return (
      <form onSubmit={this._HandleSubmit}>
        <div className="phoneform">
          <UserOutlined />
          <Input
            placeholder="name..."
            value={this.state.name}
            onChange={this._HandleChange}
            name="name"
          />
          <br />
          <br />
          <IdcardOutlined />
          <input
            placeholder="number..."
            value={this.state.phone}
            onChange={this._HandleChange}
            name="phone"
          />
          <br />
          <br />
          <br />
          <button type="submit">등록</button>
        </div>
      </form>
    );
  }

  _HandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _HandleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      phone: "",
    });
  };
}

export default PhoneForm;
