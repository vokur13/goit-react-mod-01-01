// import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ================================================
const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};
/*
 * Определение defaultProps гарантирует, что props.imgUrl будет иметь значение,
 * даже если оно не было передано при использовании компонента в родителе.
 */
ReactDOM.createRoot(document.getElementById('root')).render(App);
