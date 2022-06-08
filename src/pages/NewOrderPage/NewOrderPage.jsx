export default function NewOrderPage() {
  return (
    <>
    <h1>✈️ New Aircarft Rental Page ✈️</h1>
    <div className="form-container">
    <form >
      <label>Choose Your Instructor: </label>
      <select value="instructor">
        <option value="JimC">Jim C</option>
        <option value="Step">Stephanie L</option>
        <option value="MarioM">Mario R</option>
        <option value="MarvelJ">Marvel J</option>
      </select>
      <label>ID: </label>
      <input type="text" name="student-id" required />
      <label>Aircraft</label>
      <select value="aircraft">
        <option value="1115">Cessna 152</option>
        <option value="131">Cessna 172</option>
        <option value="182">Cessna 182 RG</option>
        <option value="280">BE76 Duchess</option>
      </select>
      <label>Pervious Total Hours: </label>
      <input type="text" name="pervHrs" required />
      <label>Current Total Hours: </label>
      <input type="text" name="totalHrs" required />
      <button type="submit">Check out</button>
    </form>
    </div>
    </>
  );
}