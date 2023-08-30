import React, { PureComponent } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./style.css";
export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 111, name: "你不知道的JS", price: 12 },
        { id: 222, name: "JS高级程序设计", price: 98 },
        { id: 333, name: "VueJS指南", price: 23 },
      ],
    };
  }
  addNewBook() {
    const books = [...this.state.books];
    books.push({ id: new Date().getTime(), name: "React源码剖析", price: 66 });
    this.setState({ books });
  }
  removeBook(index) {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({ books });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>图书列表</h2>
        {/* TransitionGroup默认是div元素，可以通过component进行设置 */}
        <TransitionGroup component="ul">
          {books.map((item, index) => {
            return (
              <CSSTransition key={item.id} classNames="book" timeout={1000}>
                <li>
                  <span>
                    {item.name}-{item.price}
                  </span>
                  <button onClick={(e) => this.removeBook(index)}>删除</button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={(e) => this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;
