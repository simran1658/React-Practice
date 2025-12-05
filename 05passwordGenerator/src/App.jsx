import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

// Main functional component
function App() {
  // State variables for password configuration
  const [length, setLength] = useState(8); // Initial length of the password
  const [numAllowed, setNumAllowed] = useState(false); // Flag for allowing numbers in the password
  const [charAllowed, setCharAllowed] = useState(false); // Flag for allowing special characters in the password
  const [password, setPassword] = useState(''); // State for storing the generated password

  // useRef hook to reference the password input for clipboard operations
  const passwordRef = useRef(null);

  // Function to generate a password based on the selected criteria
  const passwordGenerator = useCallback(() => {
    let pass = ''; // Initialize the password as an empty string
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Base string for alphabet characters

    // Append numbers if the numAllowed flag is true
    if (numAllowed) str += '0123456789';
    
    // Append special characters if the charAllowed flag is true
    if (charAllowed) str += "!@#$%^&*()_+=-{}|[':;?/>.<,~`";

    // Loop to generate the password of the specified length
    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); // Random index for character selection
      pass += str.charAt(charIndex); // Append the selected character to the password
    }

    setPassword(pass); // Update the password state with the generated password
  }, [length, numAllowed, charAllowed]); // Dependencies for memoizing the function

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the text in the input field
    passwordRef.current?.setSelectionRange(0, 999); // Ensure the full text is selected
    window.navigator.clipboard.writeText(password); // Copy the selected text to the clipboard
  }, [password]); // Dependency to re-run when `password` changes

  // useEffect to auto-generate a password whenever the configuration changes
  useEffect(() => {
    passwordGenerator(); // Call the password generator function
  }, [length, numAllowed, charAllowed, passwordGenerator]); // Dependencies for re-running the effect

  // JSX structure for the UI
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        {/* Input field for displaying the generated password */}
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} // Link the input to `passwordRef`
        />
        {/* Button to copy the password to the clipboard */}
        <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      {/* Controls for password configuration */}
      <div className='flex text-sm gap-x-2'>
        {/* Range input for setting the password length */}
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))} // Update `length` state on change
          />
          <label htmlFor='lengthInput'>Length: {length}</label>
        </div>

        {/* Checkbox for toggling numbers */}
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={numAllowed}
            id='numberInput'
            onChange={() => setNumAllowed((prev) => !prev)} // Toggle `numAllowed` state
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        {/* Checkbox for toggling special characters */}
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={charAllowed}
            id='characterInput'
            onChange={() => setCharAllowed((prev) => !prev)} // Toggle `charAllowed` state
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      
      {/* Button to manually generate a new password */}
      <button 
        className='mt-4 w-full bg-green-600 text-white py-2 rounded'
        onClick={passwordGenerator}
      >
        Generate Password
      </button>
    </div>
  );
}

// Export the component as the default export
export default App;
