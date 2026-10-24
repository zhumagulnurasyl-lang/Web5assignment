## Assignment 5

Name: Nurassyl Zhumagul  
Group: IT-2501

Open index.html in a browser to run the assignment
## Task 1 - Personal Info Object

The userProfile object stores a name, birth year, developer status, and hobbies. These properties demonstrate a string, number, boolean, and array, and they are displayed on the page.

<img width="732" height="190" alt="{1D48A095-5751-40F4-B5FE-192EB80174B5}" src="https://github.com/user-attachments/assets/07a16658-b92d-4ff5-9ba3-be7de01d5711" />
<img width="592" height="161" alt="{C05A29ED-F6C7-4DFC-8360-C8D8D35FFF83}" src="https://github.com/user-attachments/assets/6a83ef1e-2352-4a0f-ba94-6c27ec648da5" />


## Task 2 - Arithmetic Calculations

The code gets the current year using new Date().getFullYear() and subtracts the birth year to calculate age. It multiplies age by 12 to estimate months old and displays both results. The age is also printed with console.log().

<img width="733" height="136" alt="{91DB484A-4E00-476A-A8F6-DCC58A631785}" src="https://github.com/user-attachments/assets/45e53a29-1a5c-45e8-8984-c78f91d7b853" />

<img width="813" height="440" alt="{5C04A096-ADDE-45D4-B398-34FA7EFD6401}" src="https://github.com/user-attachments/assets/ddd85717-c9d2-4de7-8613-c9ba7376121b" />


## Task 3 - HTML Form

The form contains Username and Birth Year inputs and a Create / Update Profile submit button. Both inputs are required, and the birth year must be a whole number from 1 to the current year.

<img width="851" height="365" alt="{CAA37578-2C1A-4F21-905C-4C40AC7D3F5A}" src="https://github.com/user-attachments/assets/0b63b565-4c4b-4bf6-a290-d92f1255a1d7" />


## Task 4 - Event Listener

The form's submit listener uses preventDefault() to stop the page from reloading. It copies the input values into userProfile, using Number() to convert the birth year to a number. The updateProfile() function refreshes the profile, age, and approximate months old.

<img width="851" height="365" alt="{CAA37578-2C1A-4F21-905C-4C40AC7D3F5A}" src="https://github.com/user-attachments/assets/199b935f-47e5-41ad-ac93-f59d4eb7d38d" />


## Task 5 - DOM List Manipulation

Add Item creates a new li, sets its text, adds it to the list, and clears the input; blank input is ignored. Remove Item deletes the last item if the list is not empty. This practice list is separate from the hobbies array in userProfile.

<img width="812" height="324" alt="{F3373018-8CAF-47B2-96A7-89362C3FB901}" src="https://github.com/user-attachments/assets/54ece646-8396-4714-a1c7-3dfe4b83887b" />


## Summary

This assignment demonstrates basic data types, arithmetic, form events, and DOM changes. It uses only HTML, minimal CSS, and vanilla JavaScript.
