export default function NewOrderPage() {
  return (
    <>
    <h1>✈️ New Aircarft Rental Page ✈️</h1>
    <div className="form-container">
    <form >
      <label>Instructor</label>
      <select value="instructor">
        <option value="JimC">Jim C</option>
        <option value="Step">Stephanie L</option>
        <option value="MarioM">Mario R</option>
      </select>
      <label>Aircraft</label>
      <select value="aircraft">
        <option value="Cessna152">Cessna 152</option>
        <option value="Cessna172">Cessna 172</option>
        <option value="Cessna182">Cessna 182 RG</option>
        <option value="Duchess">BE76 Duchess</option>
      </select>
      <label>Hours: </label>
      <input type="text" name="hours" required />
      <label>Total Hours: </label>
      <input type="text" name="total-hours" required />
      <button type="submit">Check out</button>
    </form>
    </div>
    </>
  );
}