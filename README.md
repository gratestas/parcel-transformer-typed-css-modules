# Parcel Transformer: Typed CSS Modules

![version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

A custom transformer for Parcel bundler that generates .d.ts files for .module.css files using [typed-css-modules](https://www.npmjs.com/package/typed-css-modules). This enables type-safe usage of CSS classes in TypeScript projects.

> **Note:** The transformer intelligently scans the project, locates `.module.css` files, and generates the corresponding `.d.ts` files **only in directories where `.tsx` files exist**. This targeted approach optimizes the build process and ensures that the typings are available precisely where they are needed.

## Installation

To use this custom transformer with Parcel, you need to install it as a dependency in your project.

```bash
npm install --save-dev parcel-transformer-typed-css-modules
```

## Usage

Once you have installed the custom transformer, Parcel will automatically use it for processing .module.css files.

You need to have a .module.css file along with its corresponding .tsx file in the same directory for the transformer to generate the .d.ts file.

> **Note:** it is important to maintain a consistent naming convention where the basename of both files (`.tsx` and `.module.css`) match

Example directory structure:

```bash
- src/
│ ├─ index.tsx
│ └─ index.module.css
│ ...
```

The transformer will generate a .d.ts file for index.module.css, which allows you to reference the CSS classes in your TypeScript code without type errors.

### .parcelrc Configuration

To enable the custom transformer and configure it, you need to add a `.parcelrc` file to the root of your project with the appropriate transformer configuration. Here's an example `.parcelrc` configuration:

```json
// .parcelrc

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.module.css": ["parcel-transformer-typed-css-modules", "..."]
  }
}
```

## Configuration

The custom transformer does not require any specific configuration options. It automatically generates the .d.ts files based on the presence of .module.css and .tsx files in the same directory.

## Example

To see how to use the `parcel-transformer-typed-css-modules` custom transformer, you can check out the included [example](./example) folder. This folder contains a simple example setup to demonstrate the usage of the transformer.

Follow these steps to run the example:

1. Navigate to the `example` directory:

```bash
cd example
```

2. Install the dependencies

```bash
npm install
```

3. Build the project

```bash
npm run build
```

## License

This package is licensed under the MIT License.
