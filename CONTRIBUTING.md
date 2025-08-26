# Contributing to AI Operator

This document provides guidelines for contributing to the project.

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/craig2812/ai-operator.git
   cd ai-operator
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

3. Development files are located in the `development/` directory

## Project Structure

- **Core Package Files**: Files that will be included in the NPM package
- **Development Files**: Located in `development/` directory - not included in package
- **Documentation**: Update relevant docs when making changes

## Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test your changes
4. Update documentation if needed
5. Submit a pull request

## Code Style

- Follow existing code style and conventions
- Use meaningful commit messages
- Update documentation for any user-facing changes

## Project Philosophy

AI Operator is designed as an experimental platform for exploring AI workflow orchestration rather than a prescriptive solution. When contributing, please consider:

- **Simplicity over Complexity**: While the current implementation is feature-rich, contributions should focus on making workflows simpler and more intuitive
- **Flexibility**: Changes should enhance rather than constrain how teams use AI tools
- **Documentation**: New features should include clear documentation and use cases
- **Backward Compatibility**: Changes should not break existing workflows without clear justification

## Testing

- Test your changes thoroughly
- Ensure existing functionality still works
- Add tests for new features when appropriate

## Questions?

If you have any questions about contributing, please open an issue or contact the maintainers.
