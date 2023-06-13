# English - Uzbek Dictionary Backend

This is the backend repository for the English Uzbek Dictionary program. It provides the necessary APIs to retrieve English-Uzbek word translations.

## Features

- Retrieve a list of all available words and their translations
- Get the translation of a specific English word in Uzbek

## Technologies Used

- Node.js
- Express.js

## Getting Started

To get started with the Uzbek Dictionary Backend, follow these steps:

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/qobulovasror/eng-uzb-dictionary.git
   ```
2. Installation dependencies:
   ```bash
   npm install 
   ```

3. Run app:

   ```bash
   npm start 
   ```

## How to use api
1. Get all words  
   - Returns a list of all available words and their translations in the English-Uzbek dictionary
   - Method: GET
   - API Endpoint
   ```bash
   /api/words
   ```
   - Response
   ```bash
   [
      {
         "eng" : "words",
         "uzb" : "so'zlar"
      },
      ....
   ]
2. Get a single word translation   
   - Returns the translation of the specified English word in Uzbek
   - Method: GET
   - Parameters: `:name` (string, required): The English word to search for
   - API Endpoint
   ```bash
   /api/words/:name
   ```
   - Response
   ```bash
   [
      {
         "eng": "hello",
         "uzb": "salom"
      }
   ]
   ```
