import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { name: "JS高级设计", price: 99, count: 1 },
        { name: "React高级设计", price: 78, count: 1 },
        { name: "Node高级设计", price: 82, count: 1 },
      ],
    };
  }
  addNewBook() {
    const newBook = { name: "TypeScript学习手册", price: 70, count: 1 };
    // 1.直接修改原有state，重新设置一遍
    // this.state.books.push(newBook);
    // this.setState({ books: this.state.books });
    // 2.遵守不变性原则，新生成一个books
    const books = [...this.state.books];
    books.push(newBook);
    this.setState({ books });
  }
  addCount(index) {
    const books = [...this.state.books];
    books[index].count++;
    this.setState({ books });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <button onClick={(e) => this.addNewBook(e)}>添加书籍</button>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                {item.name}-{item.price}-{item.count}
                <button onClick={(e) => this.addCount(index)}>+1</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
