import React from "react";

const WorkingHours = () => {
  return <div className='wHours'>
    <table>
      <caption>Darbo laikas</caption>
      <tbody>
        <tr>
          <td>Pr</td>
          <td rowSpan="5">9:00 - 18:00</td>
        </tr>
        <tr>
          <td>An</td>
        </tr>
        <tr>
          <td>Tr</td>
        </tr>
        <tr>
          <td>Kt</td>
        </tr>
        <tr>
          <td>Pn</td>
        </tr>
        <tr>
          <td>Š</td>
          <td rowSpan="2">-</td>
        </tr>
        <tr>
          <td>S</td>
        </tr>
      </tbody>
    </table>
  </div>
};

export default WorkingHours;
