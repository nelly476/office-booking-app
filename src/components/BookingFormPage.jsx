import { useState, useEffect } from "react";

function BookingFormPage() {
  const [tower, setTower] = useState("A");
  const [floor, setFloor] = useState("3");
  const [room, setRoom] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
  const FLOOR_NUM = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27,
  ];
  const ROOM_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTowerChange = (e) => {
    setTower(e.target.value);
  };

  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setTower("A");
    setFloor("3");
    setRoom("1");
    setDate("");
    setTime("");
    setComment("");
  }

  const handleClear = () => {
    setTower("A");
    setFloor("3");
    setRoom("1");
    setDate("");
    setTime("");
    setComment("");
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <h1>Бронирование переговорной</h1>
        <label>
          Башня:
          <select value={tower} onChange={handleTowerChange}>
            <option value="A">Башня А</option>
            <option value="B">Башня Б</option>
          </select>
        </label>
        <label>
          Этаж:
          <select value={floor} onChange={handleFloorChange}>
            {FLOOR_NUM.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          Переговорная комната:
          <select value={room} onChange={handleRoomChange}>
            {ROOM_NUM.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          Дата и время:
          <input
            type="datetime-local"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <label>
          Комментарии:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <span className="buttons-section">
          <button type="submit">Отправить</button>
          <button type="button" onClick={handleClear}>
            Очистить
          </button>
        </span>
      </form>
    </div>
  );
}

export default BookingFormPage;
