# Student Q&A Platform

Welcome to our Student Q&A Platform! This application provides a platform for students to ask questions, share knowledge, and collaborate with each other.

## About the App

Our Student Q&A Platform allows users to:
- Ask questions on various topics related to their studies.
- Answer questions posted by other users.
- Upvote or downvote questions and answers.
- Comment on questions and answers to provide additional insights.
- Follow specific topics or users to stay updated with relevant content.

## How to Contribute

We welcome contributions from the community to help improve and enhance the platform. Here are some ways you can contribute:

1. **Reporting Issues**: If you encounter any bugs or issues while using the platform, please report them by creating a new issue in the GitHub repository.

2. **Feature Requests**: Have an idea for a new feature or improvement? Share it with us by opening a new feature request issue.

3. **Code Contributions**: Feel free to fork the repository, make your changes, and submit a pull request. We appreciate all code contributions, whether it's fixing bugs, adding new features, or improving documentation.

## Setting Up the Environment

To set up the environment for local development, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/Elita-6/devhunt-client-starter-project
    ```

2. Install dependencies:
    ```
    cd devhunt-client-starter-project
    npm install
    ```

3. Create a `.env` file in the root directory of the project with the following environment variables:
    ```plaintext
    NEXTAUTH_SECRET=""
    NEXTAUTH_URL="http://localhost:3000"
    GITHUB_CLIENT_SECRET=""
    GITHUB_CLIENT_ID=""
    OPEN_API_KEY=""
    IM_KEY=""
    IM_SECRET=""
    ```

4. Start the development server:
    ```
    npm run dev
    ```

5. Access the application in your browser at `http://localhost:3000`.

## Environment Variables

- `NEXTAUTH_SECRET`: Secret used for NextAuth authentication.
- `NEXTAUTH_URL`: Base URL for the application.
- `GITHUB_CLIENT_SECRET`: Client secret for GitHub OAuth authentication.
- `GITHUB_CLIENT_ID`: Client ID for GitHub OAuth authentication.
- `OPEN_API_KEY`: API key for accessing open APIs.
- `IM_KEY`: Key for accessing instant messaging service.
- `IM_SECRET`: Secret for accessing instant messaging service.

## Feedback and Support

If you have any feedback, questions, or need support, please reach out to us by opening an issue in the GitHub repository or contacting our team directly.

Happy coding! 🚀
