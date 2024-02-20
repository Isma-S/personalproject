import "./Form.css";

export default function Form() {
  return (
    <form className="mobile-form">
      <div className="field">
        <label htmlFor="autoLog">AutoLog:</label>
        <input type="text" id="autoLog" name="autoLog" placeholder="Enter AutoLog number" />
      </div>
      <div className="field">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder="Enter full name" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter phone number" />
      </div>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter email address" />
      </div>
      <div className="field">
        <label htmlFor="pickupAddress">Pickup Address:</label>
        <input type="text" id="pickupAddress" name="pickupAddress" placeholder="Enter pickup address" />
      </div>
      <div className="field">
        <label htmlFor="physicalAddress">Physical Address:</label>
        <input type="text" id="physicalAddress" name="physicalAddress" placeholder="Enter physical address" />
      </div>
      <div className="field">
        <label htmlFor="licencePassport">Driver Licence/Passport:</label>
        <input type="text" id="licencePassport" name="licencePassport" placeholder="Enter licence/passport number" />
      </div>
      <div className="field">
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <select name="vehicleType" id="vehicleType">
          <option value="Car">Car (Registered)</option>
          <option value="Van">Van (De-registered)</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="registrationNumber">Registration Number:</label>
        <input type="text" id="registrationNumber" name="registrationNumber" placeholder="Enter registration number" />
      </div>
      <div className="field">
        <label htmlFor="pickupDate">Pickup Date/Time:</label>
        <input type="datetime-local" id="pickupDate" name="pickupDate" />
      </div>
      <div className="field checkbox-field">
        <label htmlFor="platesReturned">Plates Returned:</label>
        <div className="radio-container">
          <input type="radio" id="platesReturnedYes" name="platesReturned" value="Yes" />
          <label htmlFor="platesReturnedYes">Yes</label>
          <input type="radio" id="platesReturnedNo" name="platesReturned" value="No" />
          <label htmlFor="platesReturnedNo">No</label>
        </div>
      </div>
      <div className="field checkbox-field">
        <label htmlFor="financeChecked">Finance Checked:</label>
        <div className="radio-container">
          <input type="radio" id="financeCheckedYes" name="financeChecked" value="Yes" />
          <label htmlFor="financeCheckedYes">Yes</label>
          <input type="radio" id="financeCheckedNo" name="financeChecked" value="No" />
          <label htmlFor="financeCheckedNo">No</label>
        </div>
      </div>
      <div className="field">
        <label htmlFor="paymentType">Payment Type:</label>
        <select name="paymentType" id="paymentType">
          <option value="Cash">Cash</option>
          <option value="Cheque">Cheque</option>
          <option value="Direct Debit">Direct Debit</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="signature">Signature:</label>
        <input type="text" id="signature" name="signature" placeholder="Enter signature" />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
