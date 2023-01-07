# Password Generator

## Description

The password generator will produce a strong password that adheres to the criteria supplied by the user.

![Screenshot of the Password Generator](./Assets/images/Password_Generator_Website_ScreenShot.PNG)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Installation

There are no installation steps needed as the website only uses HTML, CSS, Javascript which is supported in the browser

## Usage

To use the password generator go to: [Password Generator](https://sinthushan.github.io/PasswordGenerator)

or

You can clone the repository using: `git clone git@github.com:sinthushan/PasswordGenerator.git`
Once cloned open up the index.html file in a web browser

### Steps
- click on the Generate password button \
 ![Password Generator button](./Assets/images/generate_password_button.PNG)
- you will be prompted to decide wether you want to choose a specific character length\
 ![First prompt](./Assets/images/prompt1.PNG)
- if you click cancelled by default the required length will be 8
- if you click ok you will be prompted to input a number between 8 and 128 inclusive (non-numbers and numbers outside the range will cause an alert and the prompt to reemerge)\
 ![Second prompt](./Assets/images/prompt2.PNG)
- you will then be given 4 different to prompts to determine which character sets you wish to use in your password (user must select at least one)\
![lower case characters prompt](./Assets/images/prompt3.PNG)
![upper case characters prompt](./Assets/images/prompt4.PNG)
![number characters prompt](./Assets/images/prompt5.PNG)
![special characters prompt](./Assets/images/prompt6.PNG)
- your password meeting your criteria will appear in the center panel of the app\
 ![final output](./Assets/images/finaloutput.PNG)

## License

MIT License
