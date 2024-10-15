import React from 'react';
function PrintNumbers() {
  const display = () => {
    let elements = [];
    for (let i = 1; i <= 100; i++) {
      elements = [...elements, <p>{i}</p>];}
    return elements;};
  return (
    <div>{display()}</div>);}
export default PrintNumbers;
