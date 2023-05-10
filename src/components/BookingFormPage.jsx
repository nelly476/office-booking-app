import { useState } from "react";

function BookingFormPage() {
  const [formData, setFormData] = useState({
    tower: "A",
    floor: 3,
    room: 1,
    date: new Date(),
    time: "09.00",
    comment: "",
  });

  const FLOOR_NUM = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27,
  ];
  const ROOM_NUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const TIME_SELECTION = ["09:00", "10:00", "14:00", "15:00", "17:00", "18:00"];

  function handleChange(e) {
    setFormData((prev) => {
      const { name, value } = e.target;

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function clearForm() {
    setFormData({
      tower: "A",
      floor: 3,
      room: 1,
      date: new Date(),
      time: "09.00",
      comment: "",
    });
  }

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit}>
        <h1>Бронирование переговорной</h1>
        <label>
          Башня:
          <select name="tower" value={formData.tower} onChange={handleChange}>
            <option value="A">Башня А</option>
            <option value="B">Башня Б</option>
          </select>
        </label>
        <label>
          Этаж:
          <select name="floor" value={formData.floor} onChange={handleChange}>
            {FLOOR_NUM.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          Переговорная комната:
          <select name="room" value={formData.room} onChange={handleChange}>
            {ROOM_NUM.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          Дата:
          <input type="date" onChange={handleChange} />
        </label>
        <label>
          Время:
          <select name="floor" value={formData.time} onChange={handleChange}>
            {TIME_SELECTION.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
        <label>
          Комментарии:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows="3"
          />
        </label>
        <span className="buttons-section">
          <button type="submit">Отправить</button>
          <button type="button" onClick={clearForm}>
            Очистить
          </button>
        </span>
      </form>
    </div>
  );
}

export default BookingFormPage;
