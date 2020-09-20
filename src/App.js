import React from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
import "./css/styles.css";

class App extends React.Component {
  id = 2;
  state = {
    info: [
      {
        id: 0,
        name: "가나다",
        phone: "010-0000-0000",
      },
      {
        id: 1,
        name: "마바사",
        phone: "010-0000-0001",
      },
    ],
    keyword: "",
  };
  render() {
    const { info, keyword } = this.state;
    const filteredList = info.filter(
      (info) => info.name.indexOf(keyword) !== -1
    );
    return (
      <div className="app">
        <PhoneForm onCreate={this._HandleCreate} />
        <p>
          <input
            type="text"
            placeholder="검색할 이름을 입력하세요.."
            onChange={this._HandleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this._HandleRemove}
          onUpdate={this._HandleUpdate}
        />
      </div>
    );
  }

  _HandleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  _HandleCreate = (data) => {
    const { info } = this.state;
    this.setState({
      info: info.concat({ id: this.id++, ...data }),
    });
  };

  _HandleRemove = (id) => {
    const { info } = this.state;
    this.setState({
      info: info.filter((info) => info.id !== id),
    });
  };

  _HandleUpdate = (id, data) => {
    const { info } = this.state;
    this.setState({
      info: info.map(
        (info) =>
          id === info.id
            ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
            : info // 기존의 값을 그대로 렌더링
      ),
    });
  };
}

export default App;
