// import { Link } from "react-router-dom";

export default function Pagination(props) {
    return (
        <div className="flex justify-center item-center pagination wrap">
          <div className="prev">
            <p>Prev</p>
          </div>
          <div className="pagination-count">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
          </div>
          <div className="next">
            <p>Next</p>
          </div>
        </div>
      );
}