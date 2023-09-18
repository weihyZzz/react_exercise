import React, { PureComponent } from "react";
import withRouter from "../hoc/withRouter";
export class HomeSongmenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      songMenu: [
        { id: 111, name: "华语" },
        { id: 112, name: "欧美" },
        { id: 113, name: "古典" },
      ],
    };
  }
  NavigateToDetail(id) {
    const { navigate } = this.props.router;
    navigate("/detail/" + id);
  }
  render() {
    const { songMenu } = this.state;
    return (
      <div>
        <h2>歌单</h2>
        <ul>
          {songMenu.map((item) => {
            return (
              <li key={item.id} onClick={(e) => this.NavigateToDetail(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeSongmenu);
