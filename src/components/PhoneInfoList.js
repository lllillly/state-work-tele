import React from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends React.Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log("render PhoneInfoList");
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map((info) => (
      <div className="phoneinfolist">
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </div>
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
